from fastapi.testclient import TestClient
from app.main import app
 
client = TestClient(app)
 
def test_register_and_login():
    # Register user
    res = client.post("/api/auth/register", json={
        "username": "testuser",
        "password": "testpass",
        "role": "user"
    })
    assert res.status_code == 200
 
    # Login user
    response = client.post("/api/auth/login", json={
        "username": "testuser",
        "password": "testpass",
        "role": "user"
    })
 
    assert response.status_code == 200
    assert "access_token" in response.json()