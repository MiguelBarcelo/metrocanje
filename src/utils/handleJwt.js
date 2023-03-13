const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const tokenSign = async (user) => {
  const sign = await jwt.sign({
      _id: user._id,
      role: user.role
    }, 
    JWT_SECRET,
    {
      expiresIn: "5m"
    }
  );
  return sign;
}

const verifyToken = async (token) => {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (err) {
    return null;
  }
}

module.exports = {
  tokenSign,
  verifyToken
}