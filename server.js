const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/default').mongoURI;
const titles = require('./routes/api/titles');
const app = express();

app.use(bodyParser.json());
app.use('/api/titles', titles);

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('connected'))
    .catch(err => console.log(err));

const port = process.env.port || 6000;

app.listen(port, () => console.log(`server on port ${port}`));
