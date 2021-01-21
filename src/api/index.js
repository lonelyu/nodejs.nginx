import express from 'express';
const router = express.Router();

router.get('/', function (req, res) {
  res.send(JSON.stringify({ code: 200, data: 'Hello World!' }));
});

export default router;