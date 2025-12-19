const express = require('express');
const gamesCtrl = require('../controller/games.controller');
const router = express.Router();

// Configuration des routes pour les jeux
router.post('/', gamesCtrl.newGame);
router.get('/', gamesCtrl.getAllGames);
router.get('/:id', gamesCtrl.getOneGame);
router.put('/:id', gamesCtrl.upsertGame);
router.delete('/:id', gamesCtrl.deleteGame);
router.get('/latest/games', gamesCtrl.getLatestGames); 
router.get('/stats/all', gamesCtrl.getStats); 

module.exports = router;
