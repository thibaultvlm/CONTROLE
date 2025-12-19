const express = require('express');
const studioCtrl = require('../controller/studio.controller');
const router = express.Router();

<<<<<<< HEAD
// Configuration des routes pour les studios
=======

>>>>>>> 9c1dd51274dd08343d1ae12a3584582ee1006cac
router.post('/', studioCtrl.newStudio);
router.get('/', studioCtrl.getAllStudios);
router.get('/:id', studioCtrl.getOneStudio);
router.put('/:id', studioCtrl.upsertStudio);
router.delete('/:id', studioCtrl.deleteStudio);

module.exports = router;
