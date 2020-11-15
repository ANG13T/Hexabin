var express = require('express');
var router = express.Router();

// var UserController = require('../controllers/user.controller')

// router.get('/', UserController.getUsers)


// GETTING
app.get('/binary', function (req, res) {
    res.json({name: "Bob"})
 })
 
 app.get('/binary/:amount', function (req, res) {
    
 })

 //CONVERTING

//converting binary to decimal
app.get('/binary/convert/decimal', function (req, res) {
   
})

//converting binary to hex
app.get('/binary/convert/hex', function (req, res) {
   
})

//converting binary to octal
app.get('/binary/convert/octal', function (req, res) {
   
})

module.exports = router;