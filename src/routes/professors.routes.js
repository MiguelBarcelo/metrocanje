const { Router } = require('express');
const professorController = require('../controllers/professorController')
const { validateProfessor } = require('../validators/professor');

const router = Router();

router.get('/', professorController.getProfessors);

router.get('/:id', professorController.getProfessor);

router.post(
  '/',
  validateProfessor,
  professorController.createProfessor
);

router.put(
  '/:id', 
  validateProfessor,
  professorController.updateProfessor
);

router.delete('/:id', professorController.deleteProfessor);

module.exports = router;