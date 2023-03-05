const { Schema, model } = require('mongoose');
const creator = require('../utils/creator');

const storageSchema = new Schema({
  url: String,
  filename: String
}, {
  timestamps: true
})

module.exports = model('Storage', storageSchema);