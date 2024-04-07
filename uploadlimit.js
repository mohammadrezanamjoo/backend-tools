const express = require('express');
const multer = require('multer');

const app = express();
const port = 3000;

// Set up multer for file upload
const upload = multer({
  limits: {
    fileSize: 1024 * 1024, // Limit file size to 1 MB
  }
});

// Middleware to limit the size of file uploads
const uploadLimit = (req, res, next) => {
  upload.single('file')(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: 'File size exceeds the limit (1MB)' });
    } else if (err) {
      return res.status(500).json({ error: 'Unknown error occurred while uploading file' });
    }
    next();
  });
};

// POST endpoint for file upload
app.post('/upload', uploadLimit, (req, res) => {
  res.status(200).json({ message: 'File uploaded successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
