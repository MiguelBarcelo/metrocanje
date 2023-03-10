const  { Schema, model } = require('mongoose');
const creator = require('../utils/creator');

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
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
      },
      lastName: {
        type: String,
        trim: true
      }
    }
  ],
  contact: String,
  comments: String,
  savings: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = model('Student', studentSchema);