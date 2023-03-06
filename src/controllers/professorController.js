const Professors = require('../models/Professors');

const getProfessors = async (req, res) => {
  try {
    const professors = await Professors.find({});
    return res.json(professors);
  } catch (err) {
    console.error('Error getting professors:', err);
    res.status(500).json({ msg: 'Error getting professor' });
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
    return res.status(500).json({ msg: 'Error getting professor' });
  }
};

const createProfessor = async (req, res) => {
  const { body } = req;

  try {
    const professor = await Professors.create(body);
    return res.json(professor);
  } catch (err) {
    console.error('Error creating professor:', err);
    return res.status(500).json({ msg: 'Error creating professor' });
  }
};

const updateProfessor = async (req, res) => {
  const { id: _id } = req.params;
  const { body } = req;

  try {
    let professor = await Professors.findById(_id);
    if (!professor) {
      return res.status(404).json({ msg: 'Professor not found' });
    }
    professor = await Professors.findByIdAndUpdate(_id, body, { new: true });
    return res.json({ professor });
  } catch (err) {
    console.error('Error updating professor:', err);
    return res.status(500).json({ msg: 'Error updating professor' });
  }
};

const deleteProfessor = async (req, res) => {
  const { id: _id } = req.params;

  try {
    await Professors.findByIdAndDelete(_id)
    return res.json({ msg: 'Professor deleted' });
  } catch (err) { 
    console.error('Error deleting professor:', err);
    return res.status(500).json({ msg: 'Error deleting professor' });
  }
};

module.exports = {
  getProfessors,
  getProfessor,
  createProfessor,
  updateProfessor,
  deleteProfessor
}