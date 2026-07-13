# BE-01-API

A simple Node.js and Express backend API developed as part of an internship assignment.

## Developer Info
- **GitHub**: [wirashauma](https://github.com/wirashauma)

## Project Architecture
The project files are structured as follows under the git repository:
```text
BE-01-API/
├── node_modules/        # Ignored via .gitignore
├── .gitignore          # Git ignore configuration
├── package-lock.json
├── package.json        # Project metadata and dependencies
├── README.md           # Documentation
└── server.js           # Express server code & endpoints
```

## Getting Started

### Prerequisites
- Node.js installed on your system.

### Running the Server
1. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
   The server will run on [http://localhost:3000](http://localhost:3000).

## Endpoints

### 1. Welcome Endpoint
- **URL**: `/`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "message": "Hello! This is my first API endpoint.",
    "developer": "wirashauma"
  }
  ```

### 2. Status Endpoint
- **URL**: `/status`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "status": "active",
    "timestamp": "2026-07-14T00:00:00.000Z",
    "developer": "wirashauma"
  }
  ```