// Importation des modules nécessaires
const http = require('http');
const app = require('./endpoint/config/express');
const mongoose = require('mongoose');
const uri = "mongodb+srv://test:test@cluster0.3u98d2q.mongodb.net/?appName=Cluster0";

// Configuration du port
const port = 3000;

// Connexion à la base de données MongoDB
let promise = mongoose.connect(uri);

// Gestion de la connexion à la BDD et démarrage du serveur
promise.then(() => {
    console.log('[✅] Connexion à la BDD réussie !');

    // Démarrage du serveur après la connexion à la BDD
    app.listen(port, () => {
        console.log('[✅] Serveur démarré avec succès !');
        console.log(`[👂] En écoute sur le port ${port}`);
    });
}).catch(err => {
    console.error('[❌] Erreur de connexion à la BDD :', err);
});

module.exports = app;
