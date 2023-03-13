const Transactions = require('../models/Transactions');
const handleHttpError = require('../utils/handleError');

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transactions.find({});
    return res.json(transactions);
  } catch (err) {
    console.error('Error getting transactions:', err);
    return handleHttpError(res, 500, 'ERROR_GET_TRANSACTIONS');
  }
};

const getTransaction = async (req, res) => {
  const { id: _id } = req.params;

  try {
    const transaction = await Transactions.findById(_id);
    if (!transaction) {
      return res.status(404).json({ msg: 'Transaction not found' });
    }
    return res.json(transaction);
  } catch (err) {
    console.error('Error getting transaction:', err);
    return handleHttpError(res, 500, 'ERROR_GET_TRANSACTION');
  }
};

const createTransaction = async (req, res) => {
  const { body } = req;

  try {
    const transaction = await Transactions.create(body);
    return res.json(transaction);
  } catch (err) {
    console.error('Error creating transaciont:', err);
    return handleHttpError(res, 500, 'ERROR_CREATE_TRANSACTION');
  }
};

const updateTransaction = async (req, res) => {
  const { id: _id } = req.params;
  const { body } = req;
  
  try {
    let transaction = await Transactions.findById(_id);
    if (!transaction) {
      return res.status(404).json({ msg: 'Transaction not found' });
    }

    transaction = await Transactions.findByIdAndUpdate(_id, body, { new: true });
    return res.json(transaction);
  } catch (err) {
    console.error('Error updating transaction:', err);
    return handleHttpError(res, 500, 'ERROR_UPDATE_TRANSACTION');
  }
};

const deleteTransaction = async (req, res) => {
  const { id: _id } = req.params;

  try {
    await Transactions.findByIdAndDelete(_id);
    return res.json({ msg: 'Transaction deleted' });
  } catch (err) {
    console.error('Error deleting transaction:', err);
    return handleHttpError(res, 500, 'ERROR_DELETE_TRANSACTION');
  }
};

module.exports = {
  getTransactions,
  getTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction
}