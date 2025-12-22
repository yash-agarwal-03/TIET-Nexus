import os
from dotenv import load_dotenv
from fastapi import FastAPI
from pydantic import BaseModel
from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_groq import ChatGroq
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate
from config import (
    EMBEDDING_MODEL,
    CHROMA_DB_PATH,
    LLM_MODEL,
    HUGGINGFACE_API_KEY
)

load_dotenv()

os.environ['HUGGINGFACE_API_KEY'] = HUGGINGFACE_API_KEY
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

app = FastAPI(title="Campus RAG Chatbot API")

# -------- Load Vector DB ----------
embeddings = HuggingFaceEmbeddings(model_name=EMBEDDING_MODEL)
vectorstore = Chroma(
    persist_directory=CHROMA_DB_PATH,
    embedding_function=embeddings
)
retriever = vectorstore.as_retriever(search_kwargs={"k": 4})

# -------- Load LLM ----------
llm = ChatGroq(groq_api_key=GROQ_API_KEY, model_name=LLM_MODEL)

# -------- Prompt ----------

system_prompt = (
    "You are a helpful chatbot for college regulations. "
    "Use ONLY the provided context to answer. "
    "If answer not found, say: 'I don't have information in the college documents.' "
    "Do NOT reveal or include your reasoning, thinking process, or analysis. "
    "Do NOT use <think> or show internal thoughts. "
    "Just provide the final concise useful answer."
    "\n\nContext:\n{context}"
)

# system_prompt = (
#     "You are a helpful chatbot for college regulations. "
#     "Answer ONLY using the context provided. "
#     "If answer not found, say: 'I don't have information in the college documents.'\n\n"
#     "Context:\n{context}"
# )

qa_prompt = ChatPromptTemplate.from_messages([
    ("system", system_prompt),
    ("human", "{input}")
])

qa_chain = create_stuff_documents_chain(llm, qa_prompt)

# -------- Request Schema ----------
class Query(BaseModel):
    question: str


# -------- API Endpoint ----------
@app.post("/chat")
def chat(data: Query):
    docs = retriever.invoke(data.question)

    response = qa_chain.invoke({
        "input": data.question,
        "context": docs
    })

    # return {
    #     "answer": response,
    #     "sources": [d.page_content[:300] for d in docs]
    # }

    
    final_answer = response
    # remove <think> reasoning if appears
    if "<think>" in final_answer:
        start = final_answer.find("</think>")
        if start != -1:
            final_answer = final_answer[start+8:].strip()
            
    
    return {
        "answer": final_answer,
        "sources": [d.page_content[:300] for d in docs]
    }


