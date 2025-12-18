const express = require('express');
const developersCtrl = require('../controller/developer.controller');
const router = express.Router();

router.post('/', developersCtrl.newDeveloper);
router.get('/', developersCtrl.getAllDevelopers);
router.get('/:id', developersCtrl.getOneDeveloper);
router.get('/:id', developersCtrl.upsertDeveloper);
router.get('/:id', developersCtrl.deleteDeveloper);

module.exports = router;