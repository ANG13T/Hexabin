var express = require('express');
var router = express.Router();

var RandomController = require('../controllers/random.controller')

// GETTING

router.get('/random', RandomController.getRandomNumber)

router.get('/random/:base', RandomController.getRandomNumberOfBase)


module.exports = router;