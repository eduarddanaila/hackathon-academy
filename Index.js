const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json())

const carsRoutes = require('./Cars.js')
app.use(carsRoutes);


app.get('/', (req, res) => res.send('Hello World!'));





const server = app.listen(4193, () => console.log(`Server successfully started on port ${server.address().port}`));
module.exports = server