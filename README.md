🍬 Sweet Shop Management System
A Full-Stack Inventory & Purchase Management Application

The Sweet Shop Management System is a full-stack web application developed as part of the AI Kata Assessment.
It simulates a real-world sweet shop, enabling customers to browse and purchase sweets while allowing administrators to securely manage inventory through role-based access control.

🎯 Focus Areas: Clean Architecture • Secure Authentication • Role-Based Access • Automated Testing

🌟 Project Highlights
🔐 Secure authentication using JWT
👥 Role-based access for Admin and Users
🍭 Real-time sweet inventory management
🧪 Fully tested backend with Pytest
⚡ FastAPI + React (Vite) modern stack

📖 Project Overview
The application is designed with clean system design, modular architecture, and maintainability in mind.

👤 User Roles
👨‍💼 Admin
Add, update, delete sweets
Restock inventory
Access admin-only dashboards and controls

🧑 User
Browse available sweets
Search by name
Filter by category
Purchase sweets with automatic stock updates

The backend is built using FastAPI, following RESTful principles with JWT-based authentication and strict role-based authorization.
The frontend is a responsive Single Page Application (SPA) developed using React, providing a smooth and intuitive user experience.

🛠 Tech Stack
🔧 Backend
FastAPI
Python
SQLite
SQLAlchemy
JWT Authentication
Pytest
🎨 Frontend
React (Vite)
Axios
CSS

✨ Features
🔐 Authentication & Security
User and Admin registration & login
JWT-based authentication
Strict role-based access control

🍬 Sweet Inventory Management
View all available sweets
Search sweets by name
Filter sweets by category
Purchase sweets with automatic stock reduction
Purchase disabled when stock is unavailable

🧑‍💼 Admin Capabilities

Add new sweets
Edit sweet details
Delete sweets
Restock inventory
Admin-only UI components

🎨 UI & UX

Centered, card-based authentication screens
Responsive dashboard layout
Clean, modern, and intuitive interface
Quick search options for popular sweets

⚙️ Local Setup & Execution
🔧 Backend Setup
cd backend
python -m venv .venv
.venv\Scripts\activate   # Windows
uvicorn app.main:app --reload

📍 Backend URLs
API: http://127.0.0.1:8000
Swagger Docs: http://127.0.0.1:8000/docs

🌐 Frontend Setup
cd frontend
npm install
npm run dev

📍 Frontend URL
http://localhost:5173
🖼 Application Screenshots

📸 The following screenshots demonstrate the application flow:

Login & Registration Pages
Admin Dashboard (Add / Manage Sweets)
User Dashboard (Browse & Purchase Sweets)
Automated Test Execution (Pytest)
#All screenshots are available in the screenshots/ directory.

🧪 Testing & Quality Assurance
The backend is fully covered with automated tests using Pytest.
✅ Test Coverage Includes:
User & Admin authentication
Role-based authorization checks
Sweet CRUD operations
Inventory purchase and stock validation logic

✔️ All tests were executed locally and passed successfully.

🔁 Test-Driven Development (TDD)

The backend follows Test-Driven Development (TDD) principles using the Red–Green–Refactor cycle:
🔴 Red – Write failing tests to define expected behavior
🟢 Green – Implement minimal logic to pass tests
🔵 Refactor – Improve code quality and structure

This approach ensured reliability, confidence, and maintainability throughout development.

🤖 AI Usage Declaration
AI tools were used responsibly and minimally as learning and productivity aids.
🧠 AI Tool Used
ChatGPT

📌 How AI Assisted
Understanding FastAPI best practices
Clarifying JWT authentication & role-based access
Assisting with selected Pytest unit tests
Debugging backend issues
Referencing TDD concepts and workflows

📝 Reflection

AI was not used to generate the full codebase.
All AI-assisted suggestions were carefully reviewed, modified, and implemented manually to ensure originality, correctness, and maintainability.

🚀 Conclusion

This project demonstrates the implementation of a secure, scalable, and well-tested full-stack application, following industry-standard practices in backend development, frontend design, and software testing.
