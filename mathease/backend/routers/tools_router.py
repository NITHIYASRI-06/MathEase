from fastapi import APIRouter, HTTPException, Depends
from data.categories import get_all_categories, get_topic_by_id, CATEGORIES
import models
import auth

router = APIRouter(prefix="/api", tags=["Tools & Categories"])

@router.get("/categories")
def get_categories(current_user: models.User = Depends(auth.get_current_user)):
    return get_all_categories()

@router.get("/categories/{letter}")
def get_letter_topics(letter: str, current_user: models.User = Depends(auth.get_current_user)):
    letter = letter.upper()
    topics = CATEGORIES.get(letter)
    if topics is None:
        raise HTTPException(status_code=404, detail=f"No topics found for letter '{letter}'")
    return topics

@router.get("/topics/{topic_id}")
def get_topic(topic_id: str, current_user: models.User = Depends(auth.get_current_user)):
    topic = get_topic_by_id(topic_id)
    if not topic:
        raise HTTPException(status_code=404, detail="Topic not found")
    return topic

@router.get("/search")
def search_topics(q: str, current_user: models.User = Depends(auth.get_current_user)):
    results = []
    q_lower = q.lower()
    for letter, topics in CATEGORIES.items():
        for topic in topics:
            if q_lower in topic["name"].lower() or q_lower in topic["description"].lower():
                results.append({"letter": letter, **topic})
    return results
