const express = require('express');
const app = express();
const PORT = 3000;

// Developed by: wirashauma (https://github.com/wirashauma)

// Endpoint 1 - Welcome Endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: "Hello! This is my first API endpoint.",
    developer: "wirashauma"
  });
});

// Endpoint 2 - Server Status Endpoint
app.get('/status', (req, res) => {
  res.json({ 
    status: "active", 
    timestamp: new Date(), 
    developer: "wirashauma" 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Developer: wirashauma`);
});
