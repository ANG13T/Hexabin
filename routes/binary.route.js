var express = require('express');
var router = express.Router();

var BinaryController = require('../controllers/binary.controller')

// GETTING
router.get('/binary', BinaryController.getBinaryNumber)
 
router.get('/binary/:amount', BinaryController.getBinaryNumbers)

//CONVERTING

router.get('/binary/convert/:value', BinaryController.convertBinaryTo)

module.exports = router;