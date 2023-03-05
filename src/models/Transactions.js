const { Schema, model } = require('mongoose');
const creator = require('../utils/creator');

const transactionSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    rel: 'Student',
    required: true
  },
  points: {
    type: Number,
    default: 0
  },
  move: {
    type: ["withdrawal", "saving"],
    required: true
  },
  creator
}, {
  timestamps: true
});

module.exports = model('Transaction', transactionSchema);