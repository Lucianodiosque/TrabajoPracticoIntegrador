const express = require('express');
const router = express.Router();
const autosController = require('../controller/autosController.js');

router.get('/', autosController.autos);
router.get('/:marca', autosController.autosMarca);
router.get('/:marca/:dato?', autosController.autosMarcaDato);

module.exports = router;