const Developer = require('../models/developer.model');

function getAllDevelopers(req, res) {
    return Developer.find({})
        .then((objet) => {
            return res.send(objet);
        })
        .catch((error) => {
            console.error('Erreur', error);
            return res.status(500).send;
        })
}

function getOneDeveloper(req, res) {
    return Developer.findById(req.params.id)
        .then((objet) => {
            return res.send(objet);
        })
        .catch((error) => {
            console.error('Erreur', error);
            return res.status(500).send;
        })
}

function newDeveloper(req, res) {
    let oneDeveloper = new Developer(req.body);
}

