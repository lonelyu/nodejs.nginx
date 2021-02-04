import express from 'express';

import demoRouter from './demo/index.mjs';

const router = express.Router();

router.get('/', function (req, res) {
  res.send(JSON.stringify({ code: 200, data: 'Hello World!' }));
});

router.use(demoRouter);

export default router;