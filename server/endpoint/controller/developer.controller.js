const Developer = require('../models/developer.model');

// Récupérer tous les développeurs
function getAllDevelopers(req, res) {
    Developer.find({})
        .then(developers => {
            res.json(developers);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des développeurs :', error);
            res.status(500).json({ error: 'Erreur serveur' });
        });
}

// Récupérer un développeur par ID
function getOneDeveloper(req, res) {
    Developer.findById(req.params.id)
        .then(developer => {
            if (!developer) {
                return res.status(404).json({ error: 'Développeur non trouvé' });
            }
            res.json(developer);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération du développeur :', error);
            res.status(500).json({ error: 'Erreur serveur' });
        });
}

// Créer un nouveau développeur
function newDeveloper(req, res) {
    const developer = new Developer(req.body);
    developer.save()
        .then(savedDeveloper => {
            res.status(201).json(savedDeveloper);
        })
        .catch(error => {
            console.error('Erreur lors de la création du développeur :', error);
            res.status(500).json({ error: 'Erreur serveur' });
        });
}

// Mettre à jour un développeur
function upsertDeveloper(req, res) {
    Developer.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
    .then(developer => {
        if (!developer) {
            return res.status(404).json({ error: 'Développeur non trouvé' });
        }
        res.json(developer);
    })
    .catch(error => {
        console.error('Erreur lors de la mise à jour du développeur :', error);
        res.status(500).json({ error: 'Erreur serveur' });
    });
}

// Supprimer un développeur
function deleteDeveloper(req, res) {
    Developer.findByIdAndDelete(req.params.id)
        .then(developer => {
            if (!developer) {
                return res.status(404).json({ error: 'Développeur non trouvé' });
            }
            res.json(developer);
        })
        .catch(error => {
            console.error('Erreur lors de la suppression du développeur :', error);
            res.status(500).json({ error: 'Erreur serveur' });
        });
}

module.exports = {
    getAllDevelopers,
    getOneDeveloper,
    newDeveloper,
    upsertDeveloper,
    deleteDeveloper
};
