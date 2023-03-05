const { Router } = require('express');

const router = Router();

router.get('/professors', (req, res) => {
  throw Error('GET /professors not implemented!');
});

router.get('/professors/:id', (req, res) => {
  throw Error('GET /professors/:id not implemented!');
});

router.post('/professors', (req, res) => {
  throw Error('POST /professors not implemented!');
})

router.put('/professors/:id', (req, res) => {
  throw Error('PUT /professors/:id not implemented!');
})

router.delete('/professors/:id', (req, res) => {
  throw Error('DELETE /professors/:id not implemented!');
})

module.exports = router;