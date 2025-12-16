const mongoose = require('mongoose');

let DeveloperSchema = mongoose.Schema({
    name: String,
    location: String,
    founded: Date,
    founder: String,
    employees: Number
});

let Developer = mongoose.model('Developer', DeveloperSchema);

module.exports = Developer;
