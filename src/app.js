import express from 'express';

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(1234, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});