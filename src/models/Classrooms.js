const { Schema, model } = require('mongoose');
const creator = require('../utils/creator');

const classroomSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    min: { type: Number },
    max: { type: Number } 
  },
  capacity: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

module.exports = model('Classroom', classroomSchema);