const{ Router } = require('express');

const router = Router();

router.post('/auth', (req, res) => {
  throw Error('POST /auth not implemented!');
});

router.get('/auth', (req, res) => {
  throw Error('GET /auth not implemented!');
})

module.exports = router;