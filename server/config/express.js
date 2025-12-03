const path = require('path');
const route = require('./index.routes');
const express = require('express');
const app = express();

app.use('/assets', express.static(path.join(__dirname, '../../client/assets')));
app.use('/public', express.static(path.join(__dirname, '../../client/public')));
app.use(express.json());

app.use(/^((?!(api)).)*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
});

module.exports = app;