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
    return (base == "hex" || base == "binary" || base == "decimal" || base == "octal");
}

//Get a random numbers of any base
exports.getRandomNumbers = function(req, res) {
    let result = {result: [], error: false}
    let amount;
    let length;
    let base;

    if(req.query.length){
        length = parseInt(req.query.length)

        if(!length){
            result.error = `Invalid argument for length in path: ${req.query.length}`
            res.send(result)
            return;
        }

    }

    if(req.query.base){
        base = req.query.base;

        if(!isValidBase(base)){
            result.error = `Invalid argument for base in path: ${base}`
            res.send(result)
            return;
        }

    }

    if(req.query.amount){
        amount = parseInt(req.query.amount)

        if(!amount){
            result.error = `Invalid argument in path: ${req.query.amount}`
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
        let randomBase = base ? base : generateRandomBase();
        let randomLength = length ? length : Math.floor(Math.random() * 6) + 1;
        randomList.push(generateRandomNumber(randomBase, randomLength))
    }
    result.result = randomList;

    res.send(result)
};