const { Router } = require('express');
const classroomController = require('../controllers/classroomController');
const { validateClassroom } = require('../validators/classroom');

const router = Router();

router.get('/', classroomController.getClassrooms);

router.get('/:id', classroomController.getClassroom);

router.post(
  '/', 
  validateClassroom,
  classroomController.createClassroom
);

router.put(
  '/:id', 
  validateClassroom,
  classroomController.updateClassroom
);

router.delete('/:id', classroomController.deleteClassroom);

module.exports = router;