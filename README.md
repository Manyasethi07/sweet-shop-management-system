# 🍬 Sweet Shop Management System

The Sweet Shop Management System is a full-stack web application developed as part of the **AI Kata Assessment**.  
It enables users to browse and purchase sweets, while administrators can securely manage inventory using role-based access control.

---

## 📌 Project Explanation

The Sweet Shop Management System is designed to simulate a real-world sweet shop environment with secure authentication and clean system design. The application supports two types of users:

- **Admin** – Can add, update, delete, and restock sweets.
- **User** – Can browse, search, filter, and purchase sweets.

The backend is built using **FastAPI**, following RESTful principles with **JWT-based authentication** and role-based authorization.  
The frontend is implemented as a modern **single-page application (SPA)** using **React**, ensuring a responsive and user-friendly interface.

The project emphasizes clean coding practices, modular architecture, automated testing, and maintainable design.

---

## 🛠 Tech Stack

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

## ✨ Features

### Authentication & Authorization
- User registration and login
- Admin registration and login
- JWT-based authentication
- Strict role-based access control

### Sweet Management
- View all available sweets
- Search sweets by name
- Filter sweets by category
- Purchase sweets with automatic stock reduction
- Purchase disabled when stock is zero

### Admin Functionalities
- Add new sweets
- Update sweet details
- Delete sweets
- Restock inventory
- Admin-only UI components

### UI & UX
- Centered, card-based login and registration pages
- Responsive dashboard layout
- Clean and intuitive user interface
- Quick search options for popular sweets

---

## ⚙️ Local Setup & Execution Guide

### Backend Setup

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate   # On Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend will be available at:
- http://127.0.0.1:8000  
- API Docs: http://127.0.0.1:8000/docs

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
- Login Page
- Admin Dashboard (Add / Manage Sweets)
- User Dashboard (Browse & Purchase Sweets)
- Automated Test Execution (pytest)

Screenshots are stored in the `screenshots/` directory.

---

## 🧪 Test Report

The backend application is covered with automated tests using **pytest**.  
The test suite validates:
- User and admin authentication
- Role-based access control
- Sweet creation and management
- Inventory purchase logic and stock validation

All tests were executed locally and passed successfully.

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
