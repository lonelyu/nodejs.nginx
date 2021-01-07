const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!111');
});

app.listen(9998, function () {
  console.log('http://localhost:9998');
});