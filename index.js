const http = require('http');

const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Le serveur est ouvert et ecoute le port ${port}`);
});

app.get('/', (req, res) => {

})