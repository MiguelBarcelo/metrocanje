const { Router } = require('express');
const studentController = require('../controllers/studentController');
const { validateStudent } = require('../validators/student');

const router = Router();

router.get('/', studentController.getStudents);

router.get('/:id', studentController.getStudent);

router.post(
  '/', 
  validateStudent,
  studentController.createStudent
);

router.put(
  '/:id', 
  validateStudent,
  studentController.updateStudent
);

router.delete('/:id', studentController.deleteStudent);

module.exports = router;