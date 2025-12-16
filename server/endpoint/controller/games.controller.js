const Game = require('../models/games.model');

function getAllGames(req, res) {
    return Game.find({})
       .then((objet) => {
        return res.send(objet);
       })
       .catch((error) => {
            console.error('Erreur', error);
            return res.status(500).send
       });
}       

function getOneGames(req, res) {
     return Game.findById(req.params.id)
          .then((object) => {
               return res.send(object);
          })
          .catch((error) => {
               console.error('Erreur :', error);
               return res.status(500).send;
          });
}

function newGame(req, res) {
     let newGame = new Game(req.body);
     newGame.save()
          .then((object) => {
               return res.send(object);
          })
          .catch((error) => {
               console.error('Erreur :', error);
               return res.status(500).send;
          });
}

function upsertGames(req, res) {
     return Game.findBtIdAndUpdate({_id: req.params.id}, req.body, {upsert: true, new: true, runValidators: true})
          .then((object) => {
               return res.send(object);
          })
          .catch((error) => {
               console.error('Erreur :', error);
               return res.status(500).send;
          });
}

function deleteGame(req, res) {
     return Game.findByIdAndDelete(req.params.id)
          .then((object) => {
               return res.send(object);
          })
          .catch((error) => {
               console.error('Erreur :', error);
               return res.status(500).send;
          });
}

module.exports = {
     getAllGames,
     getOneGames,
     newGame,
     upsertGames,
     deleteGame
}