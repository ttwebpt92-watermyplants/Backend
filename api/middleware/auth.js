// const jwt = require("jsonwebtoken");

const restricted = (req, res, next) => {

//     // const token = req.cookies.token;

//     // if(!token) {
//     //   return res.status(401).json({message: 'Token required'})
//     // }

//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//       if (err) {
//         return res.status(401).json({message: 'Token invalid'})
//       }

//       req.token = decoded;

//       next();

//     })
}

module.exports = {
  restricted,
}
