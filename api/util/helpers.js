const jwt = require("jsonwebtoken");
const Storage = require("../models/storage");

const generateToken = (user) => {
  const payload = {
    username: user.username,
    id: user.id
  };
  const options = {
    expiresIn: '1d',
  };
  return jwt.sign(payload, process.env.JWT_SECRET, options);
}

const findToken = (token) => {
  const invalidated = Storage.findBy(token);

}

module.exports = {
  generateToken
}
