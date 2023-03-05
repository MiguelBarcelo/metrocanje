const  { Schema, model } = require('mongoose');
const creator = require('../utils/creator');

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true
  },
  parents: [
    {
      name: {
        type: String,
        required: true,
        trim: true
      }
    }
  ],
  contact: String,
  comments: String,
  savings: {
    type: Number,
    default: 0
  },
  creator
}, {
  timestamps: true
});

module.exports = model('Student', studentSchema);