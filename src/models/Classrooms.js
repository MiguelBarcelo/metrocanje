const { Schema, model } = require('mongoose');
const creator = require('../utils/creator');

const classroomSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    min: { type: Number, required: true },
    max: { type: Number, required: true } 
  },
  capacity: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

module.exports = model('Classroom', classroomSchema);