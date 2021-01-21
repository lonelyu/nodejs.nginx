import express from 'express';
const router = express.Router();
router.get('/', function (req, res) {
  res.send(JSON.stringify({ code: 200, data: 'H222!' }));
});
router.get('/demo', function (req, res) {
  res.send(JSON.stringify({ code: 200, data: '666!' }));
});

export default router;