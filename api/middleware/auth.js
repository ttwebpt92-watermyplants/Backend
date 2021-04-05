const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
		try {
			const token = req.cookies.token
			if (!token) {
				return res.status(401).json({
					message: "Invalid credentials",
				})
			}

			jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
				if (err) {
					return res.status(401).json({
						message: "Invalid credentials",
					})
				}

				req.token = decoded;

				next();
			})
		} catch(err) {
			next(err)
		}
	}
