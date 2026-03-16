# MathEase 🧮

> Making math beautiful through interactive GeoGebra and Desmos visualizations.

## Project Structure

```
mathease/
├── backend/              # FastAPI Python server
│   ├── main.py           # App entry point + CORS
│   ├── database.py       # SQLite via SQLAlchemy
│   ├── models.py         # User model
│   ├── schemas.py        # Pydantic request/response schemas
│   ├── auth.py           # JWT authentication helpers
│   ├── requirements.txt  # Python dependencies
│   ├── routers/
│   │   ├── auth_router.py    # /auth/register, /auth/login, /auth/me
│   │   └── tools_router.py   # /api/categories, /api/topics/:id, /api/search
│   └── data/
│       └── categories.py     # A–Z topic data (80+ topics)
│
└── frontend/             # React + Vite
    ├── index.html
    ├── vite.config.js    # Proxy: /auth, /api → localhost:8000
    ├── package.json
    └── src/
        ├── main.jsx
        ├── App.jsx             # Routes
        ├── context/
        │   └── AuthContext.jsx # Global user state + axios headers
        ├── components/
        │   ├── Navbar.jsx
        │   └── ProtectedRoute.jsx
        ├── pages/
        │   ├── LandingPage.jsx    # Public homepage
        │   ├── AuthPage.jsx       # Login + Register (split layout)
        │   ├── DashboardPage.jsx  # Post-login home
        │   ├── CategoriesPage.jsx # A–Z browsing + search
        │   └── TopicPage.jsx      # Embedded Desmos/GeoGebra + guided panel
        └── styles/
            └── global.css         # Cosmic dark theme, variables, utilities
```

## Quick Start

### 1. Backend

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start server (auto-creates SQLite DB on first run)
uvicorn main:app --reload --port 8000
```

API available at: http://localhost:8000  
Swagger docs: http://localhost:8000/docs

### 2. Frontend

```bash
cd frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```

App available at: http://localhost:5173

## API Endpoints

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | /auth/register | ❌ | Create account |
| POST | /auth/login | ❌ | Sign in, get JWT |
| GET | /auth/me | ✅ | Get current user |
| GET | /api/categories | ✅ | All A–Z topics (summary) |
| GET | /api/categories/:letter | ✅ | Topics for one letter |
| GET | /api/topics/:id | ✅ | Full topic detail |
| GET | /api/search?q=... | ✅ | Search topics |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page (redirects to dashboard if logged in) |
| `/auth` | Login / Register (split-panel design) |
| `/dashboard` | Post-login home with quick topic access |
| `/categories` | Full A–Z topic library with search + alphabet filter |
| `/topic/:id` | Topic page with embedded Desmos/GeoGebra + guided steps |

## Topic Page Layout Modes

The topic page has 3 layout modes (toggle in top bar):
- **Split** (default): Info panel left, tool iframe right  
- **Full Tool**: Maximize the Desmos/GeoGebra canvas  
- **Info Only**: Read the steps and formulas without the tool

## Tech Stack

- **Backend**: Python 3.11+ · FastAPI · SQLAlchemy · SQLite · JWT (python-jose) · bcrypt
- **Frontend**: React 18 · Vite · React Router v6 · Axios
- **Tools**: Desmos Calculator API (embed) · GeoGebra Geometry/Graphing (embed)
- **Auth**: JWT stored in localStorage, sent as Bearer token

## Future Roadmap

- [ ] User bookmarks / saved topics
- [ ] Progress tracking per topic
- [ ] Custom Desmos expressions pre-loaded per topic
- [ ] GeoGebra pre-built construction files per topic (.ggb)
- [ ] Teacher mode: create custom topic sequences
- [ ] Notebook: annotate graphs and save screenshots
- [ ] Mobile-responsive layout
