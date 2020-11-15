var express = require('express');
var router = express.Router();

var HexController = require('../controllers/hex.controller')

// GETTING

router.get('/hex', HexController.getHexNumber)

router.get('/hex/:amount', HexController.getHexNumbers)

// CONVERTING

//converting hex to decimal
router.get('/hex/convert/:value', HexController.convertHexTo)

module.exports = router;