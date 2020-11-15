var express = require('express');
var router = express.Router();

// var UserController = require('../controllers/user.controller')

// router.get('/', UserController.getUsers)

//GETTING
router.get('/decimal', function (req, res) {
    res.json({name: "decimal"})
})

router.get('/decimal/:amount', function (req, res) {
   
})

//CONVERTING

//converting decimal to binary
router.get('/decimal/convert/binary', function (req, res) {
   
})

//converting decimal to binary
router.get('/decimal/convert/octal', function (req, res) {
   
})

//converting decimal to hex
router.get('/decimal/convert/hex', function (req, res) {
   
})

module.exports = router;