const express = require('express');
const gameRoute = require('./games.routes');
const developerRoute = require('./developers.routes')

const router = express.Router();
router.use('/games', gameRoute);
// router.use('/studiogames', sutdioRoute);
router.use('/developers', developerRoute);

module.exports = router;

