const path = require('path');
const route = require('../routes/index.routes');
const express = require('express');
const app = express();

// Configuration des fichiers statiques
app.use('/assets', express.static(path.join(__dirname, '../../../client/assets')));
app.use('/', express.static(path.join(__dirname, '../../../client/public')));

// Middleware pour parser le JSON
app.use(express.json());

// Configuration des routes API
app.use('/api', route);

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../client/index.html'));
});

module.exports = app;
