from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base
from routers import auth_router, tools_router

# Create all database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="MathEase API",
    description="Backend API for MathEase — making math visual",
    version="1.0.0"
)

# CORS — allow React dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router.router)
app.include_router(tools_router.router)

@app.get("/")
def root():
    return {"message": "MathEase API is running 🚀", "docs": "/docs"}

@app.get("/health")
def health():
    return {"status": "ok"}
