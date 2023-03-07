const bcrypt = require('bcrypt');

const encrypt = async (plainPassword) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(plainPassword, salt);
}

const compare = async (plainPassword, hashPassword) => {
  return await bcrypt.compare(plainPassword, hashPassword);
}

module.exports = {
  encrypt,
  compare
}