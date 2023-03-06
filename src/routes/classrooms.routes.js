const { Router } = require('express');
const classroomController = require('../controllers/classroomController');

const router = Router();

router.get('/', classroomController.getClassrooms);

router.get('/:id', classroomController.getClassroom);

router.post('/', classroomController.createClassroom);

router.put('/:id', classroomController.updateClassroom);

router.delete('/:id', classroomController.deleteClassroom);

module.exports = router;