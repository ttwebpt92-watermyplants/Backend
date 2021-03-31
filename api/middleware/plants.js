const Plants = require('../models/plants');

function validatePlantId() {
    return (req, res, next) => {
        Plants.findById(req.params.id)
            .then((plant) => {
                if (plant) {
                    req.plant = plant
                    next()
                } else {
                    res.status(404).json({
                        message: "Could not find shout",
                    })
                }
            })
            .catch(next)
    }
}

module.exports = {
    validatePlantId,
}
