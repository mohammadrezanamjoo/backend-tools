const express = require('express');
const app = express();

// Middleware function to log incoming request IP address
app.use((req, res, next) => {
    console.log(`Incoming request from IP: ${req.ip}`);
    next();
});

// Define your routes and other middleware here

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
