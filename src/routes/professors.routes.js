const { Router } = require('express');
const professorController = require('../controllers/professorController')

const router = Router();

router.get('/', professorController.getProfessors);

router.get('/:id', professorController.getProfessor);

router.post('/', professorController.createProfessor);

router.put('/:id', professorController.updateProfessor);

router.delete('/:id', professorController.deleteProfessor);

module.exports = router;