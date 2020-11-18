var express = require('express');
var router = express.Router();

var OctalController = require('../controllers/octal.controller')

// GETTING
router.get('/octal', OctalController.getOctal)
router.get('/octal/:amount', OctalController.getOctalNumbers)
router.get('/octal/:length/:amount', OctalController.getOctalNumbersByLength)

//CONVERTING

//converting octal to decimal
router.get('/octal/:octal/convert/:value', OctalController.convertOctalTo)

module.exports = router;