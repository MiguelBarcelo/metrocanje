const Transactions = require('../models/Transactions');

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transactions.find({});
    return res.json(transactions);
  } catch (err) {
    console.error('Error getting transactions:', err);
    return res.status(500).json({ msg: 'Error getting transactions' });
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
    return res.status(500).json({ msg: 'Error getting transaction' });
  }
};

const createTransaction = async (req, res) => {
  const { body } = req;

  try {
    const transaction = await Transactions.create(body);
    return res.json(transaction);
  } catch (err) {
    console.error('Error creating transaciont:', err);
    return res.status(500).json({ msg: 'Error creating transaciont' });
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
    return res.status(500).json({ msg: 'Error updating transaction' });
  }
};

const deleteTransaction = async (req, res) => {
  const { id: _id } = req.params;

  try {
    await Transactions.findByIdAndDelete(_id);
    return res.json({ msg: 'Transaction deleted' });
  } catch (err) {
    console.error('Error deleting transaction:', err);
    return res.status(500).json({ msg: 'Error deleting transaction' });
  }
};

module.exports = {
  getTransactions,
  getTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction
}