import os
from dotenv import load_dotenv
import streamlit as st

load_dotenv()

# Embedding model
EMBEDDING_MODEL = "all-MiniLM-L6-v2"

#CHROMA_DB_PATH = "./chroma_db"

CHUNK_SIZE = 1000
CHUNK_OVERLAP = 200

LLM_MODEL = "qwen/qwen3-32b"

# First try local .env → if missing, use Streamlit secrets
GROQ_API_KEY = os.getenv("GROQ_API_KEY") or st.secrets.get("GROQ_API_KEY")
HUGGINGFACE_API_KEY = os.getenv("HUGGINGFACE_API_KEY") or st.secrets.get("HUGGINGFACE_API_KEY")

#DOCUMENTS_FOLDER = "./documents"

from pathlib import Path

BASE_DIR = Path(__file__).parent

CHROMA_DB_PATH = str(BASE_DIR / "chroma_db")
DOCUMENTS_FOLDER = str(BASE_DIR / "documents")

