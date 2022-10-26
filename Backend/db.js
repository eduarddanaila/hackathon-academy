const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true
}).then(() => console.log('Connected to MongoDB')).catch(err => console.error(err))

const carSchema = new mongoose.Schema({
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
});

const carModel = mongoose.model('car', carSchema);
module.exports = { carModel }