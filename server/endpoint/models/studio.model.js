const mongoose = require('mongoose');

// Définition du schéma pour les studios
let StudioSchema = mongoose.Schema({
    name: String,
    location: String,
    founded: Date,
    founder: String,
    employees: Number,
    imageUrl: String
});

// Création du modèle Studio
let Studio = mongoose.model('Studio', StudioSchema);

module.exports = Studio;
