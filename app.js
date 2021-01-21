import express from 'express';

import indexRouter from './src/api/index.js';
import demoRouter from './src/api/demo/index.js';

const app = express();

app.use('/', indexRouter);
app.use('/demo', demoRouter);

app.listen(9998, function () {
  console.log('http://localhost:9998');
});