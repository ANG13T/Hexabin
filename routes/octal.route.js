var express = require('express');
var router = express.Router();

var OctalController = require('../controllers/octal.controller')

// GETTING

router.get('/octal', OctalController.getOctalNumber)

router.get('/octal/:amount', OctalController.getOctalNumbers)

//CONVERTING

//converting octal to decimal
router.get('/octal/convert/:value', OctalController.convertOctalTo)

module.exports = router;