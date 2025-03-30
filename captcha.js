const express = require('express');

const svgCaptcha = require('svg-captcha');


const app = express();
const port = 3000;

app.get('/captcha', (req, res) => {
  
  const captcha = svgCaptcha.create(); 
  
  res.type('svg');
  
  res.status(200).send(captcha.data);
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
