const router = require("express").Router();

const { carsModel } = require('./db.js');

router.get('/getAllCars', (req, res) => carsModel.find({}).then(results => res.send(results)).catch(err => next(err)));

router.post("/createCar", async (req, res, next) => {
    if (!req.body.name) return next({ status: 400, message: "Missing info" })
    try {
        const result = await carsModel.create(req.body);
        res.status(201).send(result);
    } catch (err) {
        return next(err);
    }
})









module.exports = router;