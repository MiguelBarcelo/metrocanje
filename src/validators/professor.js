const { check, validationResult } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validateProfessor = [
  check("name")
    .exists().withMessage("must be exists")
    .notEmpty().withMessage("must not be empty")
    .trim(),
  check("lastName")
    .exists().withMessage("must be exists")
    .notEmpty().withMessage("must not be empty")
    .trim(),
  validateResults
];

module.exports = {
  validateProfessor
};