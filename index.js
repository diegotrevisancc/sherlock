const express = require('express');
const app = express();
const path = require('path');

app.get('/', function (req, res) {
  console.log("Starting express");
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(3000);