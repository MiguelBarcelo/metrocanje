const Users = require('../models/Users');
const handleHttpError = require('../utils/handleError');
const { tokenSign } = require('../utils/handleJwt');
const { compare } = require('../utils/handlePassword');

const authenticateUser = async (req, res) => {
  throw Error('AuthController.authenticateUser not implemented!');
}

const getLoggedUser = async (req, res) => {
  throw Error('AuthController.getLoggedUser not implemented!');
}

const login = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await Users.findOne({ username })
    if (!user) {
      return handleHttpError(res, 404, "USER_NOT_EXISTS")
    }

    const { password } = req.body;
    const check = await compare(password, user.password);
    if (!check) {
      return handleHttpError(res, 401, "PASSWORD_INVALID")
    }

    const data = {
      token: tokenSign(user),
      user
    }

    res.send(data)

  } catch (err) {
    return handleHttpError(res, 401, "ERROR_LOGIN_USER")
  }
}

module.exports = {
  authenticateUser,
  getLoggedUser,
  login
}