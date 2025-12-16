const mongoose = require('mongoose');

let StudioSchema = mongoose.Schema({
    name: String,
    location : String,
    founded: Date,
    founder: String,
    employees: Number
});

let Studio = mongoose.model('Studio', StudioSchema);

module.exports = Studio;