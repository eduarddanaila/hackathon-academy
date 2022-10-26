const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json())

const carRoutes = require('./routes/Cars.js')
app.use('/Cars', carRoutes);


app.get('/', (req, res) => res.send('Hello World!'));



const server = app.listen(4193, () => console.log(`Server successfully started on port ${server.address().port}`));
module.exports = server