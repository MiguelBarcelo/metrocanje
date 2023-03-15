const { Router } = require('express');
const transactionController = require('../controllers/transactionController');
const { validateTransaction } = require('../validators/transaction');

const router = Router();

router.get('/', transactionController.getTransactions);

router.get('/:id', transactionController.getTransaction);

router.post(
  '/', 
  validateTransaction,
  transactionController.createTransaction
);

router.put(
  '/:id', 
  validateTransaction,
  transactionController.updateTransaction
);

router.delete('/:id', transactionController.deleteTransaction);

module.exports = router;