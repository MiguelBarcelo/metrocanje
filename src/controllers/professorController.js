const Professors = require('../models/Professors');
const handleHttpError = require('../utils/handleError');
const { matchedData } = require('express-validator');

const getProfessors = async (req, res) => {
  try {
    const professors = await Professors.find({});
    return res.json(professors);
  } catch (err) {
    console.error('Error getting professors:', err);
    return handleHttpError(res, 500, 'ERROR_GET_PROFESSORS');
  }
};

const getProfessor = async (req, res) => {
  const { id: _id } = req.params;

  try {
    const professor = await Professors.findById(_id);
    if (!professor) {
      return res.status(404).json({ msg: 'Professor not found' });
    }
    return res.json(professor);

  } catch (err) {
    console.error('Error getting professor:', err);
    return handleHttpError(res, 500, 'ERROR_GET_PROFESSOR');
  }
};

const createProfessor = async (req, res) => {
  try {
    const body = matchedData(req);

    const professor = await Professors.create(body);

    return res.json(professor);

  } catch (err) {
    console.error('Error creating professor:', err);
    return handleHttpError(res, 500, 'ERROR_CREATE_PROFESSOR');
  }
};

const updateProfessor = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const body = matchedData(req);

    let professor = await Professors.findById(_id);
    if (!professor) {
      return res.status(404).json({ msg: 'Professor not found' });
    }

    professor = await Professors.findByIdAndUpdate(_id, body, { new: true });
    
    return res.json({ professor });
    
  } catch (err) {
    console.error('Error updating professor:', err);
    return handleHttpError(res, 500, 'ERROR_UPDATE_PROFESSOR');
  }
};

const deleteProfessor = async (req, res) => {
  const { id: _id } = req.params;

  try {
    await Professors.findByIdAndDelete(_id)
    return res.json({ msg: 'Professor deleted' });
  } catch (err) { 
    console.error('Error deleting professor:', err);
    return handleHttpError(res, 500, 'ERROR_DELETE_PROFESSOR');
  }
};

module.exports = {
  getProfessors,
  getProfessor,
  createProfessor,
  updateProfessor,
  deleteProfessor
}