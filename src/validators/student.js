const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validateStudent = [
  check("name")
    .exists()
    .notEmpty()
    .trim(),
  check("lastName")
    .exists()
    .notEmpty()
    .trim(),
  check("age")
    .exists()
    .notEmpty()
    .isNumeric({ min: 0 }),
  check("parents").exists(),
  validateResults
];

module.exports = {
  validateStudent
}
