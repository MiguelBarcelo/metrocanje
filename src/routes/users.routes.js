const { Router } = require('express');

const router = Router();

router.get('/users', (req, res) => {
  throw Error('GET /users not implemented!');
});

router.get('/users/:id', (req, res) => {
  throw Error('GET /users not implemented!');
});

router.post('/users', (req, res) => {
  throw Error('GET /users not implemented!');
});

router.put('/users/:id', (req, res) => {
  throw Error('GET /users/:id not implemented!');
});

router.delete('/users/:id', (req, res) => {
  throw Error('GET /users/:id not implemented!');
});

module.exports = router;