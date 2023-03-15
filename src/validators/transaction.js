const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validateTransaction = [
  check("student")
    .exists()
    .isMongoId().withMessage("It must be a Mongo ID")
    .notEmpty()
    .trim(),
  check("points")
    .exists()
    .notEmpty()
    .isNumeric({ min: 0 }),
  check("move")
    .exists()
    .notEmpty(),
  validateResults
];

module.exports = {
  validateTransaction
}