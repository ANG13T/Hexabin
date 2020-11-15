var express = require('express');
var router = express.Router();

var DecimalController = require('../controllers/decimal.controller')


//GETTING
router.get('/decimal', DecimalController.getDecimalNumber)

router.get('/decimal/:amount', DecimalController.getDecimalNumbers)

//CONVERTING

//converting decimal to binary
router.get('/decimal/convert/:value', DecimalController.convertDecimalTo)


module.exports = router;