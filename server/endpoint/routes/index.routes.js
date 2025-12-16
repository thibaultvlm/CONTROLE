const express = require('express');
const gameRoute = require('./games.route');

const router = express.Router();
router.use('/games', gameRoute);
// router.use('/studiogames', sutdioRoute);
module.exports = router;

