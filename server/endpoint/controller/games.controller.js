const Game = require('../models/games.model');
const Studio = require('../models/studio.model');

// Récupérer tous les jeux
function getAllGames(req, res) {
<<<<<<< HEAD
    Game.find({})
        .then(games => {
            res.json(games);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des jeux :', error);
            res.status(500).json({ error: 'Erreur serveur' });
        });
=======
    return Game.find({})
       .then((objet) => {
        return res.send(objet);
       })
       .catch((error) => {
            console.error('Erreur', error);
            return res.status(500).send
       })
}       

function getOneGames(req, res) {
     return Game.findById(req.params.id)
          .then((object) => {
               return res.send(object);
          })
          .catch((error) => {
               console.error('Erreur :', error);
               return res.status(500).send;
          })
>>>>>>> 9c1dd51274dd08343d1ae12a3584582ee1006cac
}

// Récupérer un jeu par ID
function getOneGame(req, res) {
    Game.findById(req.params.id)
        .then(game => {
            if (!game) {
                return res.status(404).json({ error: 'Jeu non trouvé' });
            }
            res.json(game);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération du jeu :', error);
            res.status(500).json({ error: 'Erreur serveur' });
        });
}

// Créer un nouveau jeu
function newGame(req, res) {
<<<<<<< HEAD
    const game = new Game(req.body);
    game.save()
        .then(savedGame => {
            res.status(201).json(savedGame);
        })
        .catch(error => {
            console.error('Erreur lors de la création du jeu :', error);
            res.status(500).json({ error: 'Erreur serveur' });
        });
}

// Mettre à jour un jeu
function upsertGame(req, res) {
    Game.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
    .then(game => {
        if (!game) {
            return res.status(404).json({ error: 'Jeu non trouvé' });
        }
        res.json(game);
    })
    .catch(error => {
        console.error('Erreur lors de la mise à jour du jeu :', error);
        res.status(500).json({ error: 'Erreur serveur' });
    });
=======
     let newGame = new Game(req.body);
     newGame.save()
          .then((object) => {
               return res.send(object);
          })
          .catch((error) => {
               console.error('Erreur :', error);
               return res.status(500).send;
          })
}

function upsertGames(req, res) {
     return Game.findBtIdAndUpdate({_id: req.params.id}, req.body, {upsert: true, new: true, runValidators: true})
          .then((object) => {
               return res.send(object);
          })
          .catch((error) => {
               console.error('Erreur :', error);
               return res.status(500).send;
          })
>>>>>>> 9c1dd51274dd08343d1ae12a3584582ee1006cac
}

// Supprimer un jeu
function deleteGame(req, res) {
<<<<<<< HEAD
    Game.findByIdAndDelete(req.params.id)
        .then(game => {
            if (!game) {
                return res.status(404).json({ error: 'Jeu non trouvé' });
            }
            res.json(game);
        })
        .catch(error => {
            console.error('Erreur lors de la suppression du jeu :', error);
            res.status(500).json({ error: 'Erreur serveur' });
        });
}

// Récupérer les 3 derniers jeux ajoutés
function getLatestGames(req, res) {
    Game.find({})
        .sort({ _id: -1 }) // Tri par ID décroissant 
        .limit(3) 
        .then(games => {
            res.json(games);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des derniers jeux :', error);
            res.status(500).json({ error: 'Erreur serveur' });
        });
}

// Récupérer les statistiques (nombre de jeux, studios, genres)
function getStats(req, res) {
    Promise.all([
        Game.countDocuments(), 
        Studio.countDocuments(), 
        Game.distinct('genre') 
    ])
    .then(([gameCount, studioCount, genres]) => {
        res.json({
            gameCount,
            studioCount,
            genreCount: genres.length
        });
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des statistiques :', error);
        res.status(500).json({ error: 'Erreur serveur' });
    });
=======
     return Game.findByIdAndDelete(req.params.id)
          .then((object) => {
               return res.send(object);
          })
          .catch((error) => {
               console.error('Erreur :', error);
               return res.status(500).send;
          })
>>>>>>> 9c1dd51274dd08343d1ae12a3584582ee1006cac
}

module.exports = {
    getAllGames,
    getOneGame,
    newGame,
    upsertGame,
    deleteGame,
    getLatestGames,
    getStats 
};
