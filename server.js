var express = require('express');
var app = express();
var binaryRoute = require("./routes/binary.route");
var hexRoute = require("./routes/hex.route");
var octalRoute = require("./routes/octal.route");
var decimalRoute = require("./routes/decimal.route");
var randomRoute = require("./routes/random.route");

app.use(binaryRoute);
app.use(hexRoute);
app.use(octalRoute);
app.use(decimalRoute);
app.use(randomRoute);


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})