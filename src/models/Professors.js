const { Schema, model } = require('mongoose');
const creator = require('../utils/creator');

const professorSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
})

module.exports = model('Professor', professorSchema);
