const { Router } = require('express');
const studentController = require('../controllers/studentController');

const router = Router();

router.get('/', studentController.getStudents);

router.get('/:id', studentController.getStudent);

router.post('/', studentController.createStudent);

router.put('/:id', studentController.updateStudent);

router.delete('/:id', studentController.deleteStudent);

module.exports = router;