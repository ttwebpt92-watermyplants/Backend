const express = require("express")
const bcrypt = require("bcryptjs");
const Users = require("../models/users");
const auth = require("../middleware/auth");
const { generateToken } = require('../util/helpers');

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

//Login User
router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findByUsername(username);
    const validPass = await bcrypt.compare(password, user.password);

    if (user && validPass) {
      const token = generateToken(user);
      res.cookie("token", token);
      res.status(200).json(
        {
          message: `Hello, ${username}! You are now logged in!`,
          token: token});
    } else {
      res.status(401).json({message: 'Invalid Credentials! Try again.'});
    }
  } catch (err) {
      next(err)
  }
});



// Get All Users
router.get("/", auth, async (req, res, next) => {
  try {
    res.json(await Users.find())
  } catch (err) {
    next(err)
  }
});

  // Get Specific User
  router.get("/:id", auth, (req, res, next) => {
    Users.findById(req.params.user_id)
      .then(user => {
        res.json(user);
      })
      .catch(next);
  });

// Update User
router.put("/:id", auth, async (req, res, next) => {
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
router.delete("/:id", auth, async (req, res, next) => {
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
