from pydantic import BaseModel
 
class UserRegister(BaseModel):
    username: str
    password: str
    role: str  
   
class UserLogin(BaseModel):
    username: str
    password: str
    role: str  
 
class Token(BaseModel):
    access_token: str
    token_type: str
 
class SweetCreate(BaseModel):
    name: str
    category: str
    price: float
    quantity: int
 
class SweetResponse(SweetCreate):
    id: int
 
    class Config:
        from_attributes = True