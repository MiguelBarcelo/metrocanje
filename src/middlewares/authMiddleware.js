const handleHttpError = require('../utils/handleError');
const { verifyToken } = require('../utils/handleJwt');

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleHttpError(res, 401, "NOT_TOKEN");
      return;
    }

    const token = req.headers.authorization.split(' ').pop();
    const dataToken = await verifyToken(token);

    if (!dataToken._id) {
      handleHttpError(res, 401, "NOT_ID_TOKEN");
      return;
    }

    next();

  } catch (err) {
    handleHttpError(res, 401, "NOT_SESSION");
  }
};

module.exports = authMiddleware;