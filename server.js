const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('config');

const items = require('./routes/api/items');

const app = express();

//bosyparse middleware
app.use(bodyParser.json());

mongoose.connect(config.database.connection)
    .then(() => console.log('MongoDB connect success'))
    .catch(err => console.log(err));

app.use('/api/items', items);

const port = process.env.port || 3000;

app.listen(port, () => console.log(`server on port ${port}`));
