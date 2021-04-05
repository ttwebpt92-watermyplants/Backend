const express = require("express")
const Plants = require('../models/plants');
const router = require("express").Router();
const auth = require('../middleware/auth');

// Add New Plant
router.post("/",  auth, (req, res, next) => {
	Plants.add(req.body)
		.then((data) => res.status(201).json(data))
		.catch((err) => next(err))
})

// Get All Plants
router.get("/",  auth, (req, res, next) => {
	Plants.find()
		.then((data) => res.status(200).json(data))
		.catch((err) => next(err))
})

// Get Specific Plant
router.get("/:id", auth, (req, res, next) => {
	res.status(200).json(req.shout)
})

// Update Plant
router.put('/:id', auth, async (req, res, next) => {
    try {
        const data = await projects.update(req.params.id, req.body);
        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
})

// Delete Plant
router.delete("/:id", auth, (req, res, next) => {
	Shouts.remove(req.params.id)
		.then(() => res.status(204).end())
		.catch((err) => next(err))
})

module.exports = router;
