const { Router } = require('express');
const transactionController = require('../controllers/transactionController');

const router = Router();

router.get('/transactions', transactionController.getTransactions);

router.get('/transactions/:id', transactionController.getTransaction);

router.post('/transactions', transactionController.createTransaction);

router.put('/transactions/:id', transactionController.updateTransaction);

router.delete('/transactions/:id', transactionController.deleteTransaction);

module.exports = router;