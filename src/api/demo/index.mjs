import express from 'express';

const router = express.Router();

router.get('/demo', function (req, res) {
  res.json({ code: 200, data: '6686!' });
});

export default router;