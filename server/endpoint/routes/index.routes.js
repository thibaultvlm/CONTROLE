const express = require('express');
const gameRoute = require('./games.routes');
<<<<<<< HEAD
const studioRoute = require('./studio.routes');
const developerRoute = require('./developers.routes');
=======
const studioRoute = require('./studio.routes')
const developerRoute = require('./developers.routes')
>>>>>>> 9c1dd51274dd08343d1ae12a3584582ee1006cac

const router = express.Router();

// Configuration des routes principales
router.use('/games', gameRoute);
router.use('/studiogames', studioRoute);
router.use('/developers', developerRoute);

module.exports = router;
