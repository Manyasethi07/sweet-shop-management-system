from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session
from .auth import get_current_user
from .database import get_db
 
def admin_only(user=Depends(get_current_user)):
    if user.role != "admin":
        raise HTTPException(status_code=403, detail="Admins only")
    return user