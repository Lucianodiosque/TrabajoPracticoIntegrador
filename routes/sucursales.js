const express = require('express');
const router = express.Router();
const sucursalesController = require('../controller/sucursalesController.js');

router.get('/', sucursalesController.listar);
router.get('/:sucursal', sucursalesController.infosucursal);

module.exports = router;