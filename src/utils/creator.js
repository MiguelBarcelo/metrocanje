const { Schema } = require('mongoose');

module.exports = {
  type: Schema.Types.ObjectId,
  rel: 'User',
  required: true
};