const Studio = require('../models/studio.model');

function getAllStudios(req, res) {
    return Studio.find({})
       .then((objet) => {
        return res.send(objet);
       })
       .catch((error) => {
            console.error('Erreur', error);
            return res.status(500).send
       });
}
