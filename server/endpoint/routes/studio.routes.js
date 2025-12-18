const express = require('express');
const studioCtrl = require('../controller/studio.controller');
const router = express.Router();


router.post('/', studioCtrl.newStudio);
router.get('/', studioCtrl.getAllStudios);
router.get('/:id', studioCtrl.getOneStudio);
router.put('/:id', studioCtrl.upsertStudio);
router.delete('/:id', studioCtrl.deleteStudio);

module.exports = router;
