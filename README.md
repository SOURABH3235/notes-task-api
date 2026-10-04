# Notes/Task API

SapphireIQ Student Project built with Node.js, Express, MongoDB and Mongoose.

## Modules
1. Server & DB Setup
2. CRUD Routes
3. Validation & Error Handling
4. Query Features

## Setup

```bash
npm install
```

Create `.env` from `.env.example` and set your MongoDB connection string.

Run development server:

```bash
npm run dev
```

Server:
`http://localhost:5000`

Health check:
`GET /health`

Notes API:
`/api/notes`

## Query examples

```text
GET /api/notes?completed=true
GET /api/notes?sort=-createdAt
GET /api/notes?page=1&limit=10
GET /api/notes?completed=false&sort=-createdAt&page=1&limit=5
```
