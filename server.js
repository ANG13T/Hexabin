var express = require('express');
var app = express();
var binaryRoute = require("./routes/binary.route");
var hexRoute = require("./routes/hex.route");
var octalRoute = require("./routes/octal.route");
var decimalRoute = require("./routes/decimal.route");
var randomRoute = require("./routes/random.route");

app.use('/api', [binaryRoute, hexRoute, octalRoute, decimalRoute, randomRoute]);
app.use(express.static('public'))

app.get('/', (req, res) => {
   res.sendFile('public/index.html', { root: __dirname });
})

app.get('/api', (req, res) => {
   res.sendFile('public/api.html', { root: __dirname });
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})