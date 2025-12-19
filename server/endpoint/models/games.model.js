const mongoose = require('mongoose');

// Définition du schéma pour les jeux
let GameSchema = mongoose.Schema({
    title: String,
    genre: String,
    releaseDate: Date,
    developer: String,
    platform: String,
    imageUrl: String
});

// Création du modèle Game
let Game = mongoose.model('Game', GameSchema);

module.exports = Game;
