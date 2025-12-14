# Sweet Shop Management System

The **Sweet Shop Management System** is a full-stack web application developed as part of the **AI Kata Assessment**.  
It simulates a real-world sweet shop where users can browse and purchase sweets, while administrators securely manage inventory using role-based access control.

---

## Project Overview

This application is built with a clean and modular architecture focusing on security, maintainability, and usability.  
It supports two types of users:

- **Admin** – Manages sweets and inventory
- **User** – Browses, searches, filters, and purchases sweets

The backend follows RESTful API design using **FastAPI**, while the frontend is implemented as a responsive single-page application using **React (Vite)**.

---

## Tech Stack

### Backend
- FastAPI
- Python
- SQLite
- SQLAlchemy
- JWT Authentication
- Pytest

### Frontend
- React (Vite)
- Axios
- CSS

---

## Features

- User and Admin authentication with JWT
- Role-based access control
- Browse, search, and filter sweets
- Purchase sweets with automatic stock update
- Admin inventory management (add, update, delete, restock)
- Backend fully tested using pytest

---

## Local Setup

### Backend Setup

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will be available at:
- http://localhost:5173

---

## 🖼 Application Screenshots

The following screenshots demonstrate the final working application:
- Register Page
- Login Page
- Admin Dashboard (Add / Manage Sweets)
- User Dashboard (Browse & Purchase Sweets)


Screenshots are stored in the `screenshots/` directory.

---


## 🔁 Test-Driven Development (TDD)

The backend logic follows **Test-Driven Development (TDD)** principles.  
Core functionalities such as authentication, sweet management, and inventory handling were validated using automated tests.

The **Red–Green–Refactor** approach was applied by:
- Writing tests to define expected behavior (Red)
- Implementing minimal logic to pass the tests (Green)
- Refactoring code to improve clarity and maintainability (Refactor)

This approach ensured reliability and confidence during development.

---

## 🤖 My AI Usage

AI tools were used in a limited and supportive manner during the development of this project.  
I primarily used **ChatGPT** as a guidance and learning tool for selected backend-related tasks, while the overall system design, implementation, and logic were done manually.

### AI Tools Used
- ChatGPT

### How AI Was Used
- Assistance in understanding FastAPI best practices and backend project structuring
- Clarification of JWT-based authentication flows and role-based authorization
- Help in writing and correcting selected backend unit tests using pytest
- Debugging specific backend issues and understanding test failures
- Referencing explanations for concepts like Test-Driven Development (TDD) and Red–Green–Refactor

### Reflection on AI Usage
AI was used as a productivity and learning aid rather than for generating the entire codebase.  
Only selected backend components benefited from AI guidance, and all suggestions were reviewed, modified, and implemented manually to ensure correctness and maintainability without over-reliance on AI tools.
