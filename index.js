const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());

const port = 8000;

// Middleware to parse JSON in request body
app.use(bodyParser.json());

// POST endpoint for login
app.post('/login', (req, res) => {
  const { user, passwd } = req.body;
  console.log(req.body)
  // Check if both username and password are provided
  if (!user || !passwd) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  // Perform authentication (in a real application, you would check against a database)
  // For simplicity, here we just return the username
  const responseData = true;

  res.json(responseData);
});

app.get('/', (req, res) => {
    
  
    // Perform authentication (in a real application, you would check against a database)
    // For simplicity, here we just return the username
    const responseData = "READY";
  
    res.json(responseData);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
