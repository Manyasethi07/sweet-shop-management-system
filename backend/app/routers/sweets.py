from fastapi import APIRouter, Depends, Query, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import Sweet
from app.schemas import SweetCreate, SweetResponse
from app.auth import get_current_user
from app.dependencies import admin_only
 
router = APIRouter()
 
@router.post("/", response_model=SweetResponse)
def add_sweet(sweet: SweetCreate, db: Session = Depends(get_db),
              admin=Depends(admin_only)):
    new_sweet = Sweet(**sweet.dict())
    db.add(new_sweet)
    db.commit()
    db.refresh(new_sweet)
    return new_sweet
 
@router.get("/")
def list_sweets(db: Session = Depends(get_db)):
    return db.query(Sweet).all()
 
@router.get("/search")
def search_sweets(
    name: str = Query(None),
    category: str = Query(None),
    min_price: float = Query(None),
    max_price: float = Query(None),
    db: Session = Depends(get_db)
):
    q = db.query(Sweet)
    if name:
        q = q.filter(Sweet.name.ilike(f"%{name}%"))
    if category:
        q = q.filter(Sweet.category == category)
    if min_price is not None:
        q = q.filter(Sweet.price >= min_price)
    if max_price is not None:
        q = q.filter(Sweet.price <= max_price)
    return q.all()
 
@router.put("/{sweet_id}", response_model=SweetResponse)
def update_sweet(
    sweet_id: int,
    sweet: SweetCreate,
    db: Session = Depends(get_db),
    admin=Depends(admin_only)
):
    db_sweet = db.query(Sweet).get(sweet_id)
    if not db_sweet:
        raise HTTPException(status_code=404, detail="Sweet not found")
 
    for k, v in sweet.dict().items():
        setattr(db_sweet, k, v)
 
    db.commit()
    db.refresh(db_sweet)
    return db_sweet
 
@router.delete("/{sweet_id}")
def delete_sweet(
    sweet_id: int,
    db: Session = Depends(get_db),
    admin=Depends(admin_only)
):
    sweet = db.query(Sweet).get(sweet_id)
    if not sweet:
        raise HTTPException(status_code=404, detail="Sweet not found")
 
    db.delete(sweet)
    db.commit()
    return {"message": "Deleted"}