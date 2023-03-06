const { Router } = require('express');
const professorController = require('../controllers/professorController')

const router = Router();

router.get('/professors', professorController.getProfessors);

router.get('/professors/:id', professorController.getProfessor);

router.post('/professors', professorController.createProfessor);

router.put('/professors/:id', professorController.updateProfessor);

router.delete('/professors/:id', professorController.deleteProfessor);

module.exports = router;