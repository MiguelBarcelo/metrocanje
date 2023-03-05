const { Router } = require('express');

const router = Router();

router.get('/students', (req, res) => {
  throw Error('GET /students not implemented!');
});

router.get('/students/:id', (req, res) => {
  throw Error('GET /students/:id not implemented!');
});

router.post('/students', (req, res) => {
  throw Error('POST /students not implemented!');
})

router.put('/students/:id', (req, res) => {
  throw Error('PUT /students/:id not implemented!');
})

router.delete('/students/:id', (req, res) => {
  throw Error('DELETE /students/:id not implemented!');
})

module.exports = router;