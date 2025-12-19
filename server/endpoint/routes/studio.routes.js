const express = require('express');
const studioCtrl = require('../controller/studio.controller');
const router = express.Router();

// Configuration des routes pour les studios
router.post('/', studioCtrl.newStudio);
router.get('/', studioCtrl.getAllStudios);
router.get('/:id', studioCtrl.getOneStudio);
router.put('/:id', studioCtrl.upsertStudio);
router.delete('/:id', studioCtrl.deleteStudio);

module.exports = router;
