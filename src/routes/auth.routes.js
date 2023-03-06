const{ Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.post('/auth', authController.authenticateUser);

router.get('/auth', authController.getLoggedUser);

module.exports = router;