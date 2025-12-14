from fastapi.testclient import TestClient
from app.main import app
 
client = TestClient(app)
 
def get_admin_token():
    # Register admin
    client.post("/api/auth/register", json={
        "username": "adminuser",
        "password": "adminpass",
        "role": "admin"
    })
 
    # Login admin
    res = client.post("/api/auth/login", json={
        "username": "adminuser",
        "password": "adminpass",
        "role": "admin"
    })
 
    return res.json()["access_token"]
 
def test_add_sweet():
    token = get_admin_token()
 
    response = client.post(
        "/api/sweets/",
        json={
            "name": "Ladoo",
            "category": "Indian",
            "price": 10.0,
            "quantity": 50
        },
        headers={"Authorization": f"Bearer {token}"}
    )
 
    assert response.status_code == 200
    assert response.json()["name"] == "Ladoo"