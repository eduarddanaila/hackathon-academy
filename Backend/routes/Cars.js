const router = require("express").Router();

const { carModel } = require('../db.js');

router.get('/getAllCars', (req, res) => {
    carModel.find()
        .then(cars => res.json(cars))
        .catch(err => res.status(404).json({ nocarsfound: 'No cars found' }));
});
router.get('/getCar/:id', (req, res) => {
    carModel.findById(req.params.id)
        .then(car => res.json(car))
        .catch(err => res.status(404).json({ nocarfound: 'No car found' }));
});
router.post('/createCar', (req, res) => {
    carModel.create(req.body)
        .then(car => res.json({ msg: 'Car added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this car' }));
});
router.put('/modifyCar/:id', (req, res) => {
    carModel.findByIdAndUpdate(req.params.id, req.body)
        .then(car => res.json({ msg: 'Updated successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to update the Database' }))
});
router.delete('/deleteCar/:id', (req, res) => {
    carModel.findByIdAndRemove(req.params.id, req.body)
        .then(car => res.json({ msg: 'Car deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such car' }))
});
module.exports = router;