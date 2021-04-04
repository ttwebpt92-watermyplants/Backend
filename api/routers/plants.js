const express = require("express")
const Plants = require('../models/plants');
const router = require("express").Router();
const { restricted } = require('../middleware/auth');

// Add New Plant
router.post("/",  restricted(), (req, res, next) => {
	Plants.add(req.body)
		.then((data) => res.status(201).json(data))
		.catch((err) => next(err))
})

// Get All Plants
router.get("/",  restricted(), (req, res, next) => {
	Plants.find()
		.then((data) => res.status(200).json(data))
		.catch((err) => next(err))
})

// Get Specific Plant
router.get("/:id", restricted(), (req, res, next) => {
	res.status(200).json(req.shout)
})

// Update Plant
router.put('/:id', restricted(), async (req, res, next) => {
    try {
        const data = await projects.update(req.params.id, req.body);
        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
})

// Delete Plant
router.delete("/:id", restricted(), (req, res, next) => {
	Shouts.remove(req.params.id)
		.then(() => res.status(204).end())
		.catch((err) => next(err))
})

module.exports = router;
