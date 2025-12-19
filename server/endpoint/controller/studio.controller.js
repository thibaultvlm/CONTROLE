const Studio = require('../models/studio.model');

// Récupérer tous les studios
function getAllStudios(req, res) {
<<<<<<< HEAD
    Studio.find({})
        .then(studios => {
            res.json(studios);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des studios :', error);
            res.status(500).json({ error: 'Erreur serveur' });
        });
}

// Récupérer un studio par ID
function getOneStudio(req, res) {
    Studio.findById(req.params.id)
        .then(studio => {
            if (!studio) {
                return res.status(404).json({ error: 'Studio non trouvé' });
            }
            res.json(studio);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération du studio :', error);
            res.status(500).json({ error: 'Erreur serveur' });
        });
}

// Créer un nouveau studio
function newStudio(req, res) {
    const studio = new Studio(req.body);
    studio.save()
        .then(savedStudio => {
            res.status(201).json(savedStudio);
        })
        .catch(error => {
            console.error('Erreur lors de la création du studio :', error);
            res.status(500).json({ error: 'Erreur serveur' });
        });
}

// Mettre à jour un studio
function upsertStudio(req, res) {
    Studio.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
    .then(studio => {
        if (!studio) {
            return res.status(404).json({ error: 'Studio non trouvé' });
        }
        res.json(studio);
    })
    .catch(error => {
        console.error('Erreur lors de la mise à jour du studio :', error);
        res.status(500).json({ error: 'Erreur serveur' });
    });
}

// Supprimer un studio
function deleteStudio(req, res) {
    Studio.findByIdAndDelete(req.params.id)
        .then(studio => {
            if (!studio) {
                return res.status(404).json({ error: 'Studio non trouvé' });
            }
            res.json(studio);
        })
        .catch(error => {
            console.error('Erreur lors de la suppression du studio :', error);
            res.status(500).json({ error: 'Erreur serveur' });
        });
}

module.exports = {
    getAllStudios,
    getOneStudio,
    newStudio,
    upsertStudio,
    deleteStudio
};
=======
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
>>>>>>> 9c1dd51274dd08343d1ae12a3584582ee1006cac
