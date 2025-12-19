const mongoose = require('mongoose');

// Définition du schéma pour les développeurs
let DeveloperSchema = mongoose.Schema({
    name: String,
    location: String,
    founded: Date,
    founder: String,
    employees: Number
});

// Création du modèle Developer
let Developer = mongoose.model('Developer', DeveloperSchema);

module.exports = Developer;
