const Students = require('../models/Students');
const handleHttpError = require('../utils/handleError');

const getStudents = async (req, res) => {
  try {
    const students = await Students.find({});
    return res.json(students);
  } catch (err) {
    console.error('Error getting students:', err);
    return handleHttpError(res, 500, 'ERROR_GET_STUDENTS');
  }
};

const getStudent = async (req, res) => {
  const { id: _id } = req.params;

  try {
    const student = await Students.findById(_id);
    if (!student) {
      return res.status(404).json({ msg: 'Student not found '});
    }
    return res.json(student);
  } catch (err) {
    console.error('Error getting student:', err);
    return handleHttpError(res, 500, 'ERROR_GET_STUDENT');
  }
};

const createStudent = async (req, res) => {
  const { body } = req;

  try {
    const student = await Students.create(body);
    return res.json(student);
  } catch (err) {
    console.error('Error creating student:', err);
    return handleHttpError(res, 500, 'ERROR_CREATE_STUDENT');
  }
};

const updateStudent = async (req, res) => {
  const { id: _id } = req.params;
  const { body } = req;

  try {
    let student = await Students.findById(_id);
    if (!student) {
      return res.status(404).json({ msg: 'Student not found' });
    }
    student = await Students.findByIdAndUpdate(_id, body, { new: true });
    return res.json(student);
  } catch (err) {
    console.error('Error updating student:', err);
    return handleHttpError(res, 500, 'ERROR_UPDATE_STUDENT');
  }
};

const deleteStudent = async (req, res) => {
  const { id: _id } = req.params;

  try {
    await Students.findByIdAndDelete(_id);
    return res.json({ msg: 'Student deleted' });
  } catch (err) {
    console.error('Error deleting student:', err);
    return handleHttpError(res, 500, 'ERROR_DELETE_STUDENT');
  }
};

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent
}