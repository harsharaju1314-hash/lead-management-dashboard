# Lead Management Dashboard

This project is a Lead Management Dashboard developed as part of an assignment.

## Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB (Local – MongoDB Compass)
- Frontend: React (Vite)
- ODM: Mongoose

## Project Structure
lead-management-dashboard/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── seed/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ ├── index.html
│ └── package.json
│
└── README.md

## Features
- REST API for managing leads
- Pagination support in backend API
- MongoDB integration using Mongoose
- React frontend setup using Vite

## Backend Setup
```bash
cd backend
npm install
node server.js

Server runs on:
http://localhost:5000

API Example:
GET /api/leads?page=1&limit=10

## Frontend Setup

cd frontend
npm install
npm run dev

Frontend runs on:
arduino
http://localhost:5173
Database
MongoDB is connected locally using MongoDB Compass

Database runs on:
mongodb://127.0.0.1:27017


## Notes
.env file is excluded from GitHub for security
node_modules is ignored using .gitignore
Sample data can be added using the seed script

## Author
Harshavardhan Varma


## Run these commands **once**:

```bash
git add README.md
git commit -m "Add README for assignment"
git push