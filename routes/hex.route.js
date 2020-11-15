var express = require('express');
var router = express.Router();

// var UserController = require('../controllers/user.controller')

// router.get('/', UserController.getUsers)


// GETTING

router.get('/hex', function (req, res) {
    res.json({name: "hex"})
})

router.get('/hex/:amount', function (req, res) {
   
})

// CONVERTING

//converting hex to decimal
router.get('/hex/convert/decimal', function (req, res) {
   
})

//converting hex to binary
router.get('/hex/convert/binary', function (req, res) {
   
})

//converting hex to octal
router.get('/hex/convert/octal', function (req, res) {
   
})

module.exports = router;