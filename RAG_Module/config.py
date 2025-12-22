import os
from dotenv import load_dotenv

load_dotenv()

# Embedding model
EMBEDDING_MODEL = "all-MiniLM-L6-v2"

CHROMA_DB_PATH = "./chroma_db"

CHUNK_SIZE = 1000
CHUNK_OVERLAP = 200

LLM_MODEL = "qwen/qwen3-32b"

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
HUGGINGFACE_API_KEY = os.getenv("HUGGINGFACE_API_KEY")

DOCUMENTS_FOLDER = "./documents"
