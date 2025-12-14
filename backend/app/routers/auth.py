from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
 
from app.database import get_db
from app.models import User
from app.schemas import UserRegister, UserLogin, Token
from app.auth import hash_password, verify_password, create_access_token
 
router = APIRouter()
 
@router.post("/register")
def register(user: UserRegister, db: Session = Depends(get_db)):
    if user.role not in ["admin", "user"]:
        raise HTTPException(status_code=400, detail="Invalid role")
 
    if db.query(User).filter(User.username == user.username).first():
        raise HTTPException(status_code=400, detail="User already exists")
 
    new_user = User(
        username=user.username,
        password=hash_password(user.password),
        role=user.role
    )
    db.add(new_user)
    db.commit()
 
    return {"message": "Registered successfully"}
 
@router.post("/login", response_model=Token)
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.username == user.username).first()
 
    if not db_user or not verify_password(user.password, db_user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
 
    if db_user.role != user.role:
        raise HTTPException(
            status_code=403,
            detail=f"{db_user.role} cannot login as {user.role}"
        )
 
    token = create_access_token({
        "sub": db_user.username,
        "role": db_user.role
    })
 
    return {"access_token": token, "token_type": "bearer"}