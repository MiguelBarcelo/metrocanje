const { check, validationResult } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validateClassroom = [
  check("name")
    .exists().withMessage("must be exists")
    .notEmpty().withMessage("must not be empty")
    .trim(),
  check("age.min")
    .exists().withMessage("must be exists")
    .notEmpty().withMessage("must not be empty")
    .isNumeric({ min: 0, max: 15 }).withMessage("must be a number between 0 and 15"),
  check("age.max")
    .exists().withMessage("must be exists")
    .notEmpty().withMessage("must not be empty")
    .isNumeric({ min: 0, max: 15 }).withMessage("must be a number between 0 and 15"),
  check("capacity").exists().notEmpty().isNumeric({ min: 0 }),
  //(req, res, next) => validateResults(req, res, next)
  validateResults // Point Free
]

module.exports = {
  validateClassroom
}