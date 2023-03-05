const { Schema, model} = require('mongoose');
const creator = require('../utils/creator');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: [
      "user",
      "professor",
      "admin"
    ],
    default: "user"
  },
  creator
},{
  timestamps: true
})

module.exports = model('User', userSchema);