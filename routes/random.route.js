var express = require('express');
var router = express.Router();

var RandomController = require('../controllers/random.controller')

// GETTING

router.get('/random', RandomController.getRandomNumber)

router.get('/random/:amount', RandomController.getRandomNumbers)

router.get('/random/base/:base', RandomController.getRandomNumberOfBase)

router.get('/random/base/:base/:amount', RandomController.getRandomNumbersOfBase)


module.exports = router;