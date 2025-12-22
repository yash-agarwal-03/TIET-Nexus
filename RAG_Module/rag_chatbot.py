import streamlit as st
import os
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_chroma import Chroma
from langchain_core.prompts import ChatPromptTemplate
from langchain_groq import ChatGroq
from langchain_huggingface import HuggingFaceEmbeddings
from dotenv import load_dotenv
from config import (
    EMBEDDING_MODEL,
    CHROMA_DB_PATH,
    LLM_MODEL,
    HUGGINGFACE_API_KEY
)

# Load environment variables from .env
load_dotenv()

# # Set environment variables
# os.environ['HUGGINGFACE_API_KEY'] = HUGGINGFACE_API_KEY
# GROQ_API_KEY = os.getenv("GROQ_API_KEY")

import streamlit as st
from config import (
    EMBEDDING_MODEL,
    CHROMA_DB_PATH,
    LLM_MODEL,
    HUGGINGFACE_API_KEY,
    GROQ_API_KEY
)

if HUGGINGFACE_API_KEY:
    os.environ["HUGGINGFACE_API_KEY"] = HUGGINGFACE_API_KEY


# Check if Groq API key exists
if not GROQ_API_KEY:
    st.error("❌ GROQ_API_KEY not found in .env file")
    st.info("Please add GROQ_API_KEY to your .env file:\nGROQ_API_KEY=your_actual_key")
    st.stop()

# ==================== HELPER FUNCTIONS ====================

def check_vector_db():
    """Check if vector DB exists and is populated"""
    if not os.path.exists(CHROMA_DB_PATH):
        return False, "Vector DB not found"
    
    try:
        #embeddings = HuggingFaceEmbeddings(model_name=EMBEDDING_MODEL)
        embeddings = HuggingFaceEmbeddings(
             model_name=EMBEDDING_MODEL,
             model_kwargs={"device": "cpu"}
        )

        db = Chroma(
            persist_directory=CHROMA_DB_PATH,
            embedding_function=embeddings
        )
        count = db._collection.count()
        if count == 0:
            return False, "Vector DB is empty"
        return True, f"DB ready ({count} embeddings)"
    except Exception as e:
        return False, f"Error checking DB: {e}"

def load_vector_db():
    """Load existing vector DB"""
    #embeddings = HuggingFaceEmbeddings(model_name=EMBEDDING_MODEL)
    embeddings = HuggingFaceEmbeddings(
        model_name=EMBEDDING_MODEL,
        model_kwargs={"device": "cpu"}
    )


    vectorstore = Chroma(
        persist_directory=CHROMA_DB_PATH,
        embedding_function=embeddings
    )
    return vectorstore

def setup_qa_chain(llm):
    """Setup simple QA chain WITHOUT chat history (stateless)"""
    
    # System prompt - GROUNDED IN CONTEXT ONLY
    system_prompt = (
        "You are a helpful assistant for question-answering tasks. "
        "Use ONLY the following pieces of retrieved context to answer the question. "
        "Do NOT use any external knowledge or information outside the provided context. "
        "If you don't know the answer from the context, say 'I don't have enough information from the documents.' "
        "Keep answers concise and direct."
        "\n\n"
        "Context:\n{context}"
    )
    
    qa_prompt = ChatPromptTemplate.from_messages([
        ("system", system_prompt),
        ("human", "{input}"),
    ])
    
    # Simple QA chain (no chat history)
    qa_chain = create_stuff_documents_chain(llm, qa_prompt)
    
    return qa_chain

# ==================== STREAMLIT APP ====================

st.set_page_config(page_title="RAG Chatbot", layout="wide")
st.title("🤖 RAG Chatbot with Chroma DB")
st.write("Ask questions about your documents (stateless - no chat history)")

# Check if vector DB exists
db_exists, db_status = check_vector_db()

if not db_exists:
    st.error(f"❌ {db_status}")
    st.info(
        "**Setup Required:**\n\n"
        "1. Place your PDF files in the `documents/` folder\n"
        "2. Run `python embeddings_creator.py` to create embeddings\n"
        "3. Come back here and refresh the page"
    )
    st.stop()

st.success(f"✓ {db_status}")

# Initialize LLM with API key from .env
try:
    llm = ChatGroq(groq_api_key=GROQ_API_KEY, model_name=LLM_MODEL)
    st.sidebar.success("✓ Groq API loaded from .env")
except Exception as e:
    st.error(f"❌ Error initializing Groq LLM: {e}")
    st.stop()

# Load vector DB
vectorstore = load_vector_db()
retriever = vectorstore.as_retriever(search_kwargs={"k": 4})

# Setup QA chain (NO chat history)
qa_chain = setup_qa_chain(llm)

# ==================== MAIN INTERFACE ====================

st.subheader("Ask a Question")

# User input
user_input = st.chat_input("Ask a question about your documents...")

if user_input:
    # Display user message
    with st.chat_message("user"):
        st.write(user_input)
    
    # Generate response
    with st.chat_message("assistant"):
        with st.spinner("Generating response..."):
            try:
                # Retrieve relevant documents
                relevant_docs = retriever.invoke(user_input)
                
                # Generate answer using QA chain
                response = qa_chain.invoke({
                    "input": user_input,
                    "context": relevant_docs
                })
                
                # Display answer
                st.write(response)
                
                # Show source documents
                with st.expander("📄 Source Documents"):
                    if relevant_docs:
                        for i, doc in enumerate(relevant_docs, 1):
                            st.write(f"**Source {i}:**")
                            st.write(doc.page_content[:300] + "...")
                    else:
                        st.write("No relevant documents found.")
                        
            except Exception as e:
                st.error(f"Error generating response: {e}")

# Sidebar info
with st.sidebar:
    st.divider()
    st.subheader("📊 DB Statistics")
    col1, col2 = st.columns(2)
    with col1:
        st.metric("Total Embeddings", vectorstore._collection.count())
    with col2:
        st.metric("Retrieval K", 4)
    
    st.divider()
    st.subheader("ℹ️ Info")
    st.write("**Stateless Mode:** No chat history maintained")
    st.write("**Each query:** Retrieves context + generates answer independently")