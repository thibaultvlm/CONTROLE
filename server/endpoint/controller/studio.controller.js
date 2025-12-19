const Studio = require('../models/studio.model');

// Récupérer tous les studios
function getAllStudios(req, res) {
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
