const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const payload = {
    username: user.username,
    id: user.id,
  };
  const options = {
    expiresIn: '1d',
  };
  return jwt.sign(payload, process.env.JWT_SECRET, options);
}

module.exports = {
  generateToken
}
