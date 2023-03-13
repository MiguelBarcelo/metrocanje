const Users = require('../models/Users');
const { encrypt } = require('../utils/handlePassword');
const handleHttpError = require('../utils/handleError');

const getUsers = async (req, res) => {
  try {
    const users = await Users.find({});
    return res.json(users);
  } catch (err) { 
    console.error('Error getting users:', err);
    return handleHttpError(res, 500, 'ERROR_GET_USERS');
  }
};

const getUser = async (req, res) => {
  const { id: _id } = req.params;

  try {
    const user = await Users.findById(_id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    return res.json(user);
  } catch (err) {
    console.error('Error getting user:', err);
    return handleHttpError(res, 500, 'ERROR_GET_USER');
  }
};

const createUser = async (req, res) => {
  const { username } = req.body;

  try {
    const prevUser = await Users.findOne({ username });
    if (prevUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const { body } = req;
    const hash = await encrypt(body.password);
    const user = await Users.create({ ...body, password: hash });
    user.set('password', undefined, { strict: false });

    return res.json(user);
  } catch (err) {
    console.error('Error creating user:', err);
    return handleHttpError(res, 500, 'ERROR_CREATE_USER');
  }
};

const updateUser = async (req, res) => {
  const { body, params: { id: _id } } = req;
  const { username, ...newBody } = body;

  try {
    let user = await Users.findById(_id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const hash = await encrypt(newBody.password);
    user = await Users.findByIdAndUpdate(_id, { ...newBody, password: hash }, { new: true });
    user.set('password', undefined, { strict: false });
    
    return res.json(user);
  } catch (err) {
    console.error('Error updating user:', err);
    return handleHttpError(res, 500, 'ERROR_UPDATE_USER');
  }
};

const deleteUser = async (req, res) => {
  const { id: _id } = req.params;

  try {
    await Users.findByIdAndDelete(_id);
    return res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error('Error deleting user:', err);
    return handleHttpError(res, 500, 'ERROR_DELETE_USER');
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}