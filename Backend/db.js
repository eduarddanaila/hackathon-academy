const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hackathon', {
    useNewUrlParser: true
}).then(() => console.log('Connected to MongoDB')).catch(err => console.error(err))

const carSchema = new mongoose.Schema({
    manufacturer: {
        type: String,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    engine: {
        type: String,
        require: true
    },
    power: {
        type: String,
        require: true
    }
});

const carModel = mongoose.model('car', carSchema);

module.exports = carModel 