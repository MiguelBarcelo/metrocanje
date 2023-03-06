const Students = require('../models/Students');

const getStudents = async (req, res) => {
  try {
    const students = await Students.find({});
    return res.json(students);
  } catch (err) {
    console.error('Error getting students:', err);
    return res.status(500).json({ msg: 'Error getting students' });
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
    return res.status(500).json({ msg: 'Error getting student '});
  }
};

const createStudent = async (req, res) => {
  const { body } = req;

  try {
    const student = await Students.create(body);
    return res.json(student);
  } catch (err) {
    console.error('Error creating student:', err);
    return res.status(500).json({ msg: 'Error creating student' });
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
    return res.status(500).json({ msg: 'Error updating student' })
  }
};

const deleteStudent = async (req, res) => {
  const { id: _id } = req.params;

  try {
    await Students.findByIdAndDelete(_id);
    return res.json({ msg: 'Student deleted' });
  } catch (err) {
    console.error('Error deleting student:', err);
    return res.status(500).json({ msg: 'Error deleting student' });
  }
};

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent
}