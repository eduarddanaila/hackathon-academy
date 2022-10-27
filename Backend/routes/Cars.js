const router = require("express").Router();

const carModel = require('../db.js');

router.get('/getAllCars', async (req, res) => {
    try {
      const cars = await carModel.find();
      return res.send(cars)
    } catch (err) {
      return next(err);
    }
});

router.get('/getCar/:id', (req, res) => {
    carModel.findById(req.params.id)
        .then(car => res.json(car))
        .catch(err => res.status(404).json({ nocarfound: 'No car found' }));
});

router.post('/createCar', async (req, res, next) => {
    try {
      const newCar = await carModel.create(req.body);
      return res.status(201).send(newCar);
    } catch (err) {
      return next(err);
    }
  });

router.put('/modifyCar/:id', (req, res) => {
    carModel.findByIdAndUpdate(req.params.id, req.body)
        .then(car => res.json({ msg: 'Updated successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to update the Database' }))
});

router.delete('/deleteCar/:id', (req, res) => {
    carModel.findByIdAndRemove(req.params.id)
        .then(car => res.json({ msg: 'Car deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such car' }))
});
module.exports = router;