const path = require('path');
const route = require('../routes/index.routes');
const express = require('express');
const app = express();


app.use('/assets', express.static(path.join(__dirname, '../../../client/assets')));
app.use(express.static(path.join(__dirname, '../../../client/public')));

app.use(express.json());

app.use('/api', route);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../client/index.html'));
});

module.exports = app;
