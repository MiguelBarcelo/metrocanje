const { Router } = require('express');

const router = Router();

router.get('/classrooms', (req, res) => {
  throw Error('GET /classrooms not implemented!');
});

router.get('/classrooms/:id', (req, res) => {
  throw Error('GET /classrooms/:id not implemented!');
});

router.post('/classrooms', (req, res) => {
  throw Error('POST /classrooms not implemented!');
});

router.put('/classrooms/:id', (req, res) => {
  throw Error('PUT /classrooms/:id not implemented!');
});

router.delete('/classrooms/:id', (req, res) => {
  throw Error('DELETE /classrooms not implemented!');
});

module.exports = router;