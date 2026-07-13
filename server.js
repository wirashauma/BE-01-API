const express = require('express');
const app = express();
const PORT = 3000;
const DEVELOPER = "wirashauma";

// Welcome Endpoint
app.get('/', (req, res) => res.json({ 
  message: "Hello! This is my first API endpoint.", 
  developer: DEVELOPER 
}));

// Status Endpoint
app.get('/status', (req, res) => res.json({ 
  status: "active", 
  timestamp: new Date(), 
  developer: DEVELOPER 
}));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Developer: ${DEVELOPER}`);
});
