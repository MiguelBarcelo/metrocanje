module.exports = (res, code, message) => 
  res.status(code).json({ msg: message });