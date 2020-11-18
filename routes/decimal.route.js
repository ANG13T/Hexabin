var express = require('express');
var router = express.Router();

var DecimalController = require('../controllers/decimal.controller')


//GETTING
router.get('/decimal', DecimalController.getDecimalNumbers)

// router.get('/decimal/:amount', DecimalController.getDecimalNumbers)

// router.get('/decimal/:length/:amount', DecimalController.getDecimalNumbersByLength)

//CONVERTING

//converting decimal to binary
router.get('/decimal/:decimal/convert/:value', DecimalController.convertDecimalTo)


module.exports = router;