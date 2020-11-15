var express = require('express');
var router = express.Router();

// var UserController = require('../controllers/user.controller')

// router.get('/', UserController.getUsers)

// GETTING

router.get('/octal', function (req, res) {
    res.json({name: "octal"})
})

router.get('/octal/:amount', function (req, res) {
   
})

//CONVERTING

//converting octal to decimal
router.get('/octal/convert/decimal', function (req, res) {
   
})

//converting octal to binary
router.get('/octal/convert/binary', function (req, res) {
   
})

//converting octal to hex
router.get('/octal/convert/hex', function (req, res) {
   
})

module.exports = router;