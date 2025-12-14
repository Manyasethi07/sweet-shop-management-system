from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import Sweet
from app.auth import get_current_user
from app.dependencies import admin_only
 
router = APIRouter()
 
@router.post("/{sweet_id}/purchase")
def purchase_sweet(
    sweet_id: int,
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):
    sweet = db.query(Sweet).get(sweet_id)
    if not sweet or sweet.quantity <= 0:
        raise HTTPException(status_code=400, detail="Out of stock")
 
    sweet.quantity -= 1
    db.commit()
    return {"message": "Purchased"}
 
@router.post("/{sweet_id}/restock")
def restock_sweet(
    sweet_id: int,
    amount: int,
    db: Session = Depends(get_db),
    admin=Depends(admin_only)
):
    sweet = db.query(Sweet).get(sweet_id)
    if not sweet:
        raise HTTPException(status_code=404, detail="Sweet not found")
 
    sweet.quantity += amount
    db.commit()
    return {"message": "Restocked"}