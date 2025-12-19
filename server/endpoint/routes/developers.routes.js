const express = require('express');
const developersCtrl = require('../controller/developer.controller');
const router = express.Router();

// Configuration des routes pour les développeurs
router.post('/', developersCtrl.newDeveloper);
router.get('/', developersCtrl.getAllDevelopers);
router.get('/:id', developersCtrl.getOneDeveloper);
router.put('/:id', developersCtrl.upsertDeveloper);
router.delete('/:id', developersCtrl.deleteDeveloper);

module.exports = router;
