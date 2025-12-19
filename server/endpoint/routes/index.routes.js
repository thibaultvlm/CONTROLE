const express = require('express');
const gameRoute = require('./games.routes');
const studioRoute = require('./studio.routes');
const developerRoute = require('./developers.routes');

const router = express.Router();

// Configuration des routes principales
router.use('/games', gameRoute);
router.use('/studiogames', studioRoute);
router.use('/developers', developerRoute);

module.exports = router;
