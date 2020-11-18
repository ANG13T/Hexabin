var express = require('express');
var router = express.Router();

var BinaryController = require('../controllers/binary.controller')

// GETTING

router.get('/binary', BinaryController.getBinaryNumbers)

//CONVERTING

router.get('/binary/:binary/convert/:value', BinaryController.convertBinaryTo)

module.exports = router;