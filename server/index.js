const http = require('http');
const app = require('./endpoint/config/express');
const mongoose = require('mongoose')
const uri = "mongodb+srv://test:test@cluster0.3u98d2q.mongodb.net/?appName=Cluster0";

const port = 3000;
let promise = mongoose.connect(uri);

// BDD Connexion et allumage du serveur

promise.then(() => {
    console.log('[✅] BDD OK !');
    // Ci dessous, on démarre le serveur après la connexion à la BDD
    app.listen(port, () => {
        console.log('[✅] Server OK !');
        console.log(`[👂] Listening on port ${port}`);
    });
});

module.exports = app;