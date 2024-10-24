const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  console.log("Starting express");
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(3000);