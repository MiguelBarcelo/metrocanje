const { Router } = require('express');

const router = Router();

router.get('/transactions', (req, res) => {
  throw Error('GET /transactions not implemented!');
});

router.get('/transactions/:id', (req, res) => {
  throw Error('GET /transactions not implemented!');
});

router.post('/transactions', (req, res) => {
  throw Error('POST /transactions not implemented!');
});

router.put('/transactions/:id', (req, res) => {
  throw Error('PUT /transactions/:id not implemented!');
});

router.delete('/transactions/:id', (req, res) => {
  throw Error('DELETE /transactions/:id not implemented!');
});

module.exports = router;