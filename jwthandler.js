const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

// Define your secret key
const secretKey = 'yourSecretKey'; // Replace with your actual secret key

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  // Get the token from the request header
  const token = req.headers['authorization'];

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, secretKey);
    // Attach the decoded token to the request object for further use if needed
    req.user = decoded;
    next(); // Move to the next middleware
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};

// Example protected route
app.get('/protected', verifyToken, (req, res) => {
  // Access the decoded token
  console.log('Decoded token:', req.user);
  res.json({ message: 'Protected route accessed' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
