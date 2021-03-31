const express = require("express")
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../models/users");


// Register New User
router.post("/", async (req, res, next) => {

    try {
      const {username, password, phone, firstname, lastname, email} = req.body;
      const user = await Users.find(username);

      if (user) {
          return res.status(409).json({message: `The username ${user.username} is already taken. Please try again.`})
      }

      const newUser = await Users.add({
        username,
        password: await bcrypt.hash(password, process.env.BCRYPT_TIME_COMPLEXITY),
        phone,
        firstname,
        lastname,
        email
      })

      res.status(201).json(newUser);

    } catch (err) {
        next(err);
    }
})

// Login User
router.post("/login", async (req, res, next) => {

    try {
      const {username, password} = req.body;
      const user = await Users.findBy({username}).first();

      if(!user) {
        return res.status(401).json({message: 'Invalid Credentials'})
      }
      const validPass = await bcrypt.compare(password, user.password);

      if (!validPass) {
          return res.status(401).json({message: 'Invalid Credentials'})
      }

      const token = jwt.sign({
          userID: user.user_id,
          userRole: role,
          JWT_SECRET,
      })

      res.cookie('token', token);

      res.json({message: `Welcome, ${user.username}!`})

    } catch (err) {
        next(err);
    }
});

// Get All Users
router.get("/", (req, res, next) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(next);
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
