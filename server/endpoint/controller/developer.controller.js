const Developer = require('../models/developer.model');

function getAllDevelopers(req, res) {
    return Developer.find({})
        .then((object) => {
            return res.send(objet);
        })
        .catch((error) => {
            console.error('Erreur', error);
            return res.status(500).send;
        })
}

function getOneDeveloper(req, res) {
    return Developer.findById(req.params.id)
        .then((object) => {
            return res.send(object);
        })
        .catch((error) => {
            console.error('Erreur', error);
            return res.status(500).send;
        })
}

function newDeveloper(req, res) {
    let oneDeveloper = new Developer(req.body);
    newDeveloper.save()
        .then((object) => {
            return res.send(object);
        })
        .catch((error) => {
            console.error('Erreur :', error);
            return res.status(500).send;
        })
}

function upsertDeveloper(req, res) {
    return Developer.findByIdAndUpate({_id: req.params.id}, req.body, {upsert: true, new: true, runValidators: true})
        .then((object) => {
            return res.send(object);
        })
        .catch((error) => {
            console.error('Erreur :', error);
            return res.status(500).send;
        })
}

function deleteDeveloper(req, res) {
    return Developer.findByIdAndUpate({_id: req.params.id}, req.body, {upsert: true, new: true, runValidators: true})
        .then((object) => {
            return res.send(object);
        })
        .catch((error) => {
            console.error('Erreur :', error);
            return res.status
        })
}

module.exports = {
    getAllDevelopers,
    getOneDeveloper,
    newDeveloper,
    upsertDeveloper,
    deleteDeveloper
}

