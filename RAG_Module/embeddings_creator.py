import os
import shutil
from pathlib import Path
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
from config import (
    EMBEDDING_MODEL,
    CHROMA_DB_PATH,
    CHUNK_SIZE,
    CHUNK_OVERLAP,
    DOCUMENTS_FOLDER,
    HUGGINGFACE_API_KEY
)
import os

os.environ['HUGGINGFACE_API_KEY'] = HUGGINGFACE_API_KEY

def check_vector_db_exists():
    """Check if Chroma DB is already populated"""
    if os.path.exists(CHROMA_DB_PATH):
        try:
            embeddings = HuggingFaceEmbeddings(model_name=EMBEDDING_MODEL)
            db = Chroma(persist_directory=CHROMA_DB_PATH, embedding_function=embeddings)
            # Check if collection has documents
            collection = db._collection
            if collection.count() > 0:
                print(f"✓ Vector DB found with {collection.count()} embeddings")
                return True
        except Exception as e:
            print(f"DB check error (will recreate): {e}")
    return False

def create_vector_db(pdf_paths: list):
    """Create and persist vector embeddings from PDFs"""
    
    print("\n🔄 Starting embedding creation...\n")
    
    # Initialize embeddings
    embeddings = HuggingFaceEmbeddings(model_name=EMBEDDING_MODEL)
    
    # Load documents
    documents = []
    for pdf_path in pdf_paths:
        try:
            print(f"📄 Loading: {pdf_path}")
            loader = PyPDFLoader(pdf_path)
            docs = loader.load()
            documents.extend(docs)
            print(f"   ✓ Loaded {len(docs)} pages")
        except Exception as e:
            print(f"   ✗ Error loading {pdf_path}: {e}")
            continue
    
    if not documents:
        print("❌ No documents loaded. Exiting.")
        return False
    
    print(f"\n✓ Total pages loaded: {len(documents)}")
    
    # Split documents into chunks
    print("\n✂️ Splitting documents into chunks...")
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=CHUNK_SIZE,
        chunk_overlap=CHUNK_OVERLAP
    )
    splits = text_splitter.split_documents(documents)
    print(f"✓ Created {len(splits)} chunks")
    
    # Delete existing DB if present
    if os.path.exists(CHROMA_DB_PATH):
        print(f"\n🗑️  Removing existing DB at {CHROMA_DB_PATH}")
        shutil.rmtree(CHROMA_DB_PATH)
    
    # Create and persist vector DB
    # Chroma automatically persists when persist_directory is specified
    print("\n🔐 Creating and persisting Chroma DB...")
    vectorstore = Chroma.from_documents(
        documents=splits,
        embedding=embeddings,
        persist_directory=CHROMA_DB_PATH
        # ❌ REMOVED: vectorstore.persist() - not needed in newer Chroma
    )
    
    # Verify persistence
    print(f"✓ Vector DB created and persisted at {CHROMA_DB_PATH}")
    
    return True

def main():
    """Main entry point for embedding creation"""
    
    print("=" * 60)
    print("RAG VECTOR DB EMBEDDINGS CREATOR")
    print("=" * 60)
    
    # Check if DB already exists
    if check_vector_db_exists():
        response = input("\nVector DB already exists. Recreate? (y/n): ").strip().lower()
        if response != 'y':
            print("Exiting without changes.")
            return
    
    # Get PDF files
    pdf_files = []
    
    # Check documents folder
    if os.path.exists(DOCUMENTS_FOLDER):
        pdf_files = [
            os.path.join(DOCUMENTS_FOLDER, f) 
            for f in os.listdir(DOCUMENTS_FOLDER) 
            if f.endswith('.pdf')
        ]
    
    if not pdf_files:
        print(f"\n❌ No PDF files found in {DOCUMENTS_FOLDER}")
        print("Please place PDF files in the 'documents' folder and run again.")
        return
    
    print(f"\n📁 Found {len(pdf_files)} PDF file(s):")
    for pdf in pdf_files:
        print(f"   - {os.path.basename(pdf)}")
    
    # Create embeddings
    if create_vector_db(pdf_files):
        print("\n" + "=" * 60)
        print("✓ Embedding creation successful!")
        print(f"✓ Vector DB persisted at: {CHROMA_DB_PATH}")
        print("✓ You can now run: streamlit run rag_chatbot.py")
        print("=" * 60)
    else:
        print("\n❌ Embedding creation failed!")

if __name__ == "__main__":
    main()