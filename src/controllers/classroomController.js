const Classrooms = require('../models/Classrooms');
const handleHttpError = require('../utils/handleError');

const getClassrooms = async (req, res) => {
  try {
    const classrooms = await Classrooms.find({})
    res.json(classrooms);
  } catch (err) {
    console.error('Error getting classrooms:', err);
    return handleHttpError(res, 500, 'ERROR_GET_CLASSROOMS');
  }
};

const getClassroom = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const classroom = await Classrooms.findById({ _id });
    res.json(classroom);
  } catch (err) {
    console.error('Error getting classroom:', err);
    return handleHttpError(res, 500, 'ERROR_GET_CLASSROOM');
  }
};

const createClassroom = async (req, res) => {
  try {
    const classroom = await Classrooms.create(req.body);
    res.json(classroom);
  } catch (err) {
    console.error('Error creating classroom:', err);
    return handleHttpError(res, 500, 'ERROR_CREATE_CLASSROOM');
  }
};

const updateClassroom = async (req, res) => {
  const { id: _id } = req.params;
  try {
    let classroom = await Classrooms.findById({ _id })
    if (!classroom) {
      return res.status(404).json({ msg: 'Classroom not found' });
    }

    classroom = await Classrooms.findByIdAndUpdate(_id, req.body, { new: true });
    res.json({ classroom });
  } catch (err) {
    console.error('Error updating classroom:', err);
    return handleHttpError(res, 500, 'ERROR_UPDATE_CLASSROOM');
  }
};

const deleteClassroom = async (req, res) => {
  const { id: _id } = req.params;
  try {
    let classroom = await Classrooms.findById(_id);
    if (!classroom) {
      return res.status(404).json({ msg: 'Classroom not found' });
    }

    await Classrooms.findByIdAndDelete(_id)
    res.json({ msg: 'Classroom deleted' })
  } catch (err) {
    console.error('Error deleting classroom:', err);
    return handleHttpError(res, 500, 'ERROR_DELETE_CLASSROOM');
  }
};

module.exports = {
  getClassrooms,
  getClassroom,
  createClassroom,
  updateClassroom,
  deleteClassroom
}