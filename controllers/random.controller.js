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

function generateRandomNumber(base, length){
    if(base == "hex"){
        return hexController.getHexNumber();
    }

    if(base == "octal"){
        return octalController.getOctalNumber(length);
    }

    if(base == "decimal"){
        return decimalController.getDecimalNumber(length)
        
    }

    if(base == "binary"){
        return binaryController.getBinaryNumber(length)
    }
}

function isValidBase(base){
    return (base == "hex" || base == "binary" || hex == "decimal" || base == "octal");
}

//Get a random number of any base
exports.getRandomNumber = function(req, res) {
    // res.send('NOT IMPLEMENTED: Get a random number of any base');
    let result = {error: false, result: []}
    let base = generateRandomBase();
    let length = Math.floor(Math.random() * 6) + 1;

    result.result = generateRandomNumber(base, length)
    res.send(result)
};

//Get a random numbers of any base
exports.getRandomNumbers = function(req, res) {
    let result = {result: [], error: false}
    let amount;
    if(req.params.amount){
        amount = parseInt(req.params.amount)

        if(!amount){
            result.error = `Invalid argument in path: ${req.params.amount}`
            res.send(result)
            return;
        }

        if(amount > 20){
            result.error = "MAX of 20 items"
            res.send(result)
            return;
        }
    }else{
        amount = 1
    }

    let randomList = []
    for(let i = 0; i < amount; i++){
        let base = generateRandomBase();
        let length = Math.floor(Math.random() * 6) + 1;
        randomList.push(generateRandomNumber(base, length))
    }
    result.result = randomList;

    res.send(result)
};

//Get a random number of a specific base
exports.getRandomNumberOfBase = function(req, res) {
    let result = {result: [], error: false}
    let base;
    if(req.params.base){
        base = req.params.base;

        if(!isValidBase(base)){
            result.error = `Invalid argument for base in path: ${base}`
            res.send(result)
            return;
        }

        let length = Math.floor(Math.random() * 6) + 1;
        result.result = generateRandomNumber(base, length)
        res.send(result);
        return;

    }else{
        result.error = "Argument for base of path is undefined"
        res.send(result)
        return;
    }
};

//Get a random numbers of a specific base
exports.getRandomNumbersOfBase = function(req, res) {
    let result = {result: [], error: false}
    let amount;
    let base;
    if(req.params.amount){
        amount = parseInt(req.params.amount)

        if(!amount){
            result.error = `Invalid argument in path: ${req.params.amount}`
            res.send(result)
            return;
        }

        if(amount > 20){
            result.error = "MAX of 20 items"
            res.send(result)
            return;
        }
    }else{
        amount = 1
    }

    if(req.params.base){
        base = req.params.base;

        if(!isValidBase(base)){
            result.error = `Invalid argument for base in path: ${base}`
            res.send(result)
            return;
        }
        
        let values = []

        for(let i = 0; i < amount; i++){
            let length = Math.floor(Math.random() * 6) + 1;
            values.push(generateRandomNumber(base, length))
        }

        result.result = values;
        res.send(result);
        return;

    }else{
        result.error = "Argument for base of path is undefined"
        res.send(result)
        return;
    }
};