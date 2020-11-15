var express = require('express');
var router = express.Router();

// var UserController = require('../controllers/user.controller')

// router.get('/', UserController.getUsers)


// GETTING
router.get('/binary', function (req, res) {
    res.json({name: "binary"})
 })
 
 router.get('/binary/:amount', function (req, res) {
    
 })

 //CONVERTING

//converting binary to decimal
router.get('/binary/convert/decimal', function (req, res) {
   
})

//converting binary to hex
router.get('/binary/convert/hex', function (req, res) {
   
})

//converting binary to octal
router.get('/binary/convert/octal', function (req, res) {
   
})

module.exports = router;