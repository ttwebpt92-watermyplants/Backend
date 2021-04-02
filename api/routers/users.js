const express = require("express")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../models/users");
// const { restricted } = require("../middleware/auth");

const router = express.Router();

router.post('/register', async (req, res, next) => {
  try {
    const { username, password, phone, email, firstname, lastname } = req.body;

    const hashed = await bcrypt.hash(password, parseInt(process.env.BCRYPT_TIME_COMPLEXITY));

    const newUser = await Users.add({ username, phone, email, firstname, lastname , password: hashed })
    res.status(201).json({ message: "User registered", newUser });
  } catch (err) {
      next(err)
  }
});

// Login User
// router.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   Users
//     .findByUsername(username)
//     .then(user => {
//       if (user && bcrypt.compare(password, user.password)) {
//         const token = generateToken(user);
//         res.status(200).json({
//           message: "Yay! You logged in!!!!!!!",
//           token
//         });
//       } else {
//         res.status(401).json({ message: "Invalid password" });
//       }
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ message: "Error logging in user" });
//     });
// });


// Get All Users
router.get("/", async (req, res, next) => {
  try {
    res.json(await Users.find())
  } catch (err) {
    next(err)
  }
});

  // Get Specific User
  router.get("/:id", (req, res, next) => {
    Users.findById(req.params.user_id)
      .then(user => {
        res.json(user);
      })
      .catch(next);
  });

// Update User
router.put("/:id", async (req, res, next) => {
	try {
		const { id } = req.params
		await db("users").where({ id }).update(req.body)
		const user = await db("users").where({ id }).first()

		res.json(user)
	} catch(err) {
		next(err)
	}
})

// Delete User
router.delete("/:id", async (req, res, next) => {
	try {
		await users.deleteUserById(req.params.id);
		res.status(204).end()
	} catch(err) {
		next(err)
	}
})

// Log User Out (Destroy Session)
router.get("/logout", async (req, res, next) => {
	try {
		req.session.destroy((err) => {
			if (err) {
				next(err)
			} else {
				res.status(204).end()
			}
		})
	} catch (err) {
		next(err)
	}
})

module.exports = router;
