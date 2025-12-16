const mongoose = require('mongoose');

let GameSchema = mongoose.Schema({
    title: String,
    genre : String,
    releaseDate: Date,
    developer: String,
    platform: String
});

let Games = mongoose.model('Game', GameSchema);

module.exports = Games;