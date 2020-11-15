var express = require('express');
var app = express();
var fs = require("fs");

app.get('/binary', function (req, res) {
   res.json({name: "Bob"})
})

app.get('/binary/:amount', function (req, res) {
   
})

app.get('/hex', function (req, res) {
   
})

app.get('/hex/:amount', function (req, res) {
   
})

app.get('/octal', function (req, res) {
   
})

app.get('/octal/:amount', function (req, res) {
   
})

app.get('/decimal', function (req, res) {
   
})

app.get('/decimal/:amount', function (req, res) {
   
})

//Conversion routes

//DECIMAL

//converting decimal to binary
app.get('/convert/decimal/binary', function (req, res) {
   
})

//converting decimal to binary
app.get('/convert/decimal/octal', function (req, res) {
   
})

//converting decimal to hex
app.get('/convert/decimal/hex', function (req, res) {
   
})

//BINARY

//converting binary to decimal
app.get('/convert/binary/decimal', function (req, res) {
   
})

//converting binary to hex
app.get('/convert/binary/hex', function (req, res) {
   
})

//converting binary to octal
app.get('/convert/binary/octal', function (req, res) {
   
})


//HEX


//converting hex to decimal
app.get('/convert/hex/decimal', function (req, res) {
   
})

//converting hex to binary
app.get('/convert/hex/binary', function (req, res) {
   
})

//converting binary to octal
app.get('/convert/hex/octal', function (req, res) {
   
})


//OCTAL


//converting octal to decimal
app.get('/convert/octal/decimal', function (req, res) {
   
})

//converting octal to binary
app.get('/convert/octal/binary', function (req, res) {
   
})

//converting octal to hex
app.get('/convert/octal/hex', function (req, res) {
   
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})