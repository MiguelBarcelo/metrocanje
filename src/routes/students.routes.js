const { Router } = require('express');
const studentController = require('../controllers/studentController');

const router = Router();

router.get('/students', studentController.getStudents);

router.get('/students/:id', studentController.getStudent);

router.post('/students', studentController.createStudent);

router.put('/students/:id', studentController.updateStudent);

router.delete('/students/:id', studentController.deleteStudent);

module.exports = router;