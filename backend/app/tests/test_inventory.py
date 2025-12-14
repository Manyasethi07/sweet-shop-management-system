from fastapi.testclient import TestClient
from app.main import app
 
client = TestClient(app)
 
def get_admin_token():
    client.post("/api/auth/register", json={
        "username": "inventoryadmin",
        "password": "adminpass",
        "role": "admin"
    })
    res = client.post("/api/auth/login", json={
        "username": "inventoryadmin",
        "password": "adminpass",
        "role": "admin"
    })
    return res.json()["access_token"]
 
 
def test_purchase_reduces_quantity():
    token = get_admin_token()
 
    # Add sweet
    res = client.post(
        "/api/sweets/",
        json={
            "name": "Halwa",
            "category": "Indian",
            "price": 20,
            "quantity": 5
        },
        headers={"Authorization": f"Bearer {token}"}
    )
    sweet_id = res.json()["id"]
 
    # ✅ PASS TOKEN HERE
    purchase = client.post(
        f"/api/inventory/{sweet_id}/purchase",
        headers={"Authorization": f"Bearer {token}"}
    )
 
    assert purchase.status_code == 200
 
    sweets = client.get("/api/sweets").json()
    assert sweets[0]["quantity"] == 4
 
 
def test_purchase_fails_when_out_of_stock():
    token = get_admin_token()
 
    # Add sweet with 0 quantity
    res = client.post(
        "/api/sweets/",
        json={
            "name": "Barfi",
            "category": "Indian",
            "price": 15,
            "quantity": 0
        },
        headers={"Authorization": f"Bearer {token}"}
    )
    sweet_id = res.json()["id"]
 
    # ✅ PASS TOKEN HERE
    purchase = client.post(
        f"/api/inventory/{sweet_id}/purchase",
        headers={"Authorization": f"Bearer {token}"}
    )
 
    assert purchase.status_code == 400