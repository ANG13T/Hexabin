var express = require('express');
var router = express.Router();

var BinaryController = require('../controllers/binary.controller')

// GETTING

router.get('/binary', BinaryController.getBinary)

router.get('/binary/:amount', BinaryController.getBinaryNumbers)

router.get('/binary/:length/:amount', BinaryController.getBinaryNumbersByLength)

//CONVERTING

router.get('/binary/:binary/convert/:value', BinaryController.convertBinaryTo)

module.exports = router;