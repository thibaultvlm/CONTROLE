const express = require('express');
const gamesCtrl = require('../controller/games.controller');
const router = express.Router();

router.post('/', gamesCtrl.newGame);
router.get('/', gamesCtrl.getAllGames);
router.get('/:id', gamesCtrl.getOneGames);
router.put('/:id', gamesCtrl.upsertGames);
router.delete('/:id', gamesCtrl.deleteGame);

module.exports = router;