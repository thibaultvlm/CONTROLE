const Studio = require('../models/studio.model');

function getAllStudios(req, res) {
     return Studio.find({})
          .then((object) => {
               return res.send(object);
          })
          .catch((error) => {
               console.error('Erreur', error);
               return res.status(500).send
          })

}

function getOneStudio(req, res) {
     return Studio.findById(req.params.id)
          .then((object) => {
               return res.send(object)
          })
          .catch((error) => {
               console.error('Erreur', error);
               return res.status(500).send
          })
}

function newStudio(req, res) {
     let newStudio = new Studio (req.body);
     newStudio.save()
          .then((object) => {
               return res.send(object);
          })
          .catch((error) => {
               console.error('Erreur :', error);
               return res.status(500).send;
          })
}

function upsertStudio(req, res) {
     return Studio.findByIdAndUpdate({_id: req.params.id}, req.body, {upsert: true, new: true, runValidators: true})
          .then((object) => {
               return res.send(object);
          })
          .catch((error) => {
               console.error('Erreur :', error);
               return res.status(500).send;
          })
}

function deleteStudio(req, res) {
     return Studio.findByIdAndUpdate(req.params.id)
          .then((object) => {
               console.error('Erreur :', error);
               return res.status(500).send;
          })
}

module.exports = {
     getAllStudios,
     getOneStudio,
     newStudio,
     upsertStudio,
     deleteStudio
}