#!/bin/bash
# MathEase — start both servers

echo "🧮 Starting MathEase..."

# Start backend
echo "▶ Starting FastAPI backend on port 8000..."
cd backend
python -m venv venv 2>/dev/null || true
source venv/bin/activate 2>/dev/null || source venv/Scripts/activate 2>/dev/null
pip install -r requirements.txt -q
uvicorn main:app --reload --port 8000 &
BACKEND_PID=$!

# Start frontend
echo "▶ Starting React frontend on port 5173..."
cd ../frontend
npm install --silent
npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ MathEase is running!"
echo "   Frontend → http://localhost:5173"
echo "   API Docs  → http://localhost:8000/docs"
echo ""
echo "Press Ctrl+C to stop both servers."

wait $BACKEND_PID $FRONTEND_PID
