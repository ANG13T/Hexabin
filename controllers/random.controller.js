let binaryController = require('./binary.controller');
let decimalController = require('./decimal.controller');
let hexController = require('./hex.controller');
let octalController = require('./octal.controller');

function generateRandomBase(){
    let number = Math.floor((Math.random() * 4));
    if(number == 0){
        return "hex";
    }else if(number == 1){
        return "binary"
    }else if(number == 2){
        return "octal"
    }else{
        return "decimal"
    }
}

//Get a random number of any base
exports.getRandomNumber = function(req, res) {
    // res.send('NOT IMPLEMENTED: Get a random number of any base');
    let result = {error: false, result: []}
    let base = generateRandomBase();
    let length = Math.floor(Math.random() * 6) + 1;

    if(base == "hex"){
        result.result = hexController.getHexNumber();
    }

    if(base == "octal"){
        result.result = octalController.getOctalNumber(length);
    }

    if(base == "decimal"){
        result.result = decimalController.getDecimalNumber(length)
        
    }

    if(base == "binary"){
        result.result = binaryController.getBinaryNumber(length)
    }

    res.send(result)
};

//Get a random numbers of any base
exports.getRandomNumbers = function(req, res) {
    res.send('NOT IMPLEMENTED: Get a random numbers of any base');
};

//Get a random number of a specific base
exports.getRandomNumberOfBase = function(req, res) {
    res.send('NOT IMPLEMENTED: Get a random number of a specific base');
};

//Get a random numbers of a specific base
exports.getRandomNumbersOfBase = function(req, res) {
    res.send('NOT IMPLEMENTED: Get a random numbers of a specific base');
};