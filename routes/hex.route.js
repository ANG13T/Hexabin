var express = require('express');
var router = express.Router();

var HexController = require('../controllers/hex.controller')

// GETTING

router.get('/hex', HexController.getHexNumbers)

// CONVERTING

//converting hex to decimal
router.get('/hex/:hex/convert/:value', HexController.convertHexTo)

module.exports = router;