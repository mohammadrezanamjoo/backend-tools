const express = require('express');
const app = express();


app.use((req, res, next) => {
    console.log(`Incoming request from IP: ${req.ip}`);
    next();
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
