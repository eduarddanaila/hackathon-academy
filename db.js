const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true
}).then(() => console.log('Connected to MongoDB')).catch(err => console.error(err))

const carsSchema = new mongoose.Schema({
    'Manufacturer': {
        type: String,
        require: true
    },
    'Model': {
        type: String,
        require: true
    },
    'Engine': {
        type: String,
        require: true
    },
    'Power': {
        type: String,
        require: true
    }
})

const carsModel = mongoose.model('cars', carsSchema);
module.exports = { carsModel }