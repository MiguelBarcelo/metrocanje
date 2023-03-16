const { Router } = require('express');
const classroomController = require('../controllers/classroomController');
const { validateClassroom } = require('../validators/classroom');
const authMiddleware = require('../middlewares/authMiddleware');

const router = Router();

router.get(
  '/', 
  authMiddleware,
  classroomController.getClassrooms
);

router.get(
  '/:id', 
  authMiddleware,
  classroomController.getClassroom
);

router.post(
  '/', 
  authMiddleware,
  validateClassroom,
  classroomController.createClassroom
);

router.put(
  '/:id', 
  authMiddleware,
  validateClassroom,
  classroomController.updateClassroom
);

router.delete(
  '/:id', 
  authMiddleware,
  classroomController.deleteClassroom
);

module.exports = router;