exports.getDecimalNumber = getDecimalNumber;

function getDecimalNumber(length){
    let power = Math.pow(10, length);
    return Math.floor(Math.random() * power).toString();
}

function isValidDecimal(decimal) {
    let number;
    if(parseInt(decimal)){
        number = parseInt(decimal);
    }else{
        return false
    }
   return decimal % 1 == 0
}

function isValidConversion(conversion){
    if(conversion == "binary" || conversion == "octal" || conversion == "hex"){
        return true;
    }
    return false
}

function convertDecimal(decimal, value){
    if(value == "hex"){
        let hexString = decimal.toString(16).toUpperCase();
        return hexString
    }

    if(value == "binary"){
        let binary = decimal.toString(2);
        return binary
    }

    if(value == "octal"){
        let octal = decimal.toString(8);
        return octal
    }
}

exports.getDecimal = function(req, res) {
    let result = {result: [], error: false}
    let randomLength = Math.floor(Math.random() * 10) + 1;

    result.result = getDecimalNumber(randomLength)
    res.send(result)
}

//Get multiple decimal numbers
exports.getDecimalNumbers = function(req, res) {
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
    
    let decimalList = []
    for(let i = 0; i < amount; i++){
        let randomLength = Math.floor(Math.random() * 10) + 1;
        decimalList.push(getDecimalNumber(randomLength))
    }
    result.result = decimalList;

    res.send(result)
};

//Get decimal numbers by length
exports.getDecimalNumbersByLength = function(req, res) {
    let result = {result: [], error: false}
    let amount;
    let length;
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

    if(req.params.length){
        length = parseInt(req.params.length)

        if(!length){
            result.error = `Invalid argument for length in path: ${req.params.length}`
            res.send(result)
            return;
        }

    }else{
        result.error = "Argument for length of path is undefined"
        res.send(result)
        return;
    }
    
    let decimalList = []
    for(let i = 0; i < amount; i++){
        decimalList.push(getDecimalNumber(length))
    }
    result.result = decimalList;

    res.send(result)
};

//Convert decimal to another value
exports.convertDecimalTo = function(req, res) {
    let result = {result: "", error: false}

    if(req.params.decimal){
        //check if decimal is valid
        if(isValidDecimal(req.params.decimal)){
            if(isValidConversion(req.params.value)){
                let decimal = parseInt(req.params.decimal)
                result.result = convertDecimal(decimal, req.params.value)
                res.send(result);
                return;
            }else{
                result.error = `Conversion value in path: ${req.params.value} is not valid`
                res.send(result);
                return;
            }
        }else{
            result.error = `Decimal value in path: ${req.params.decimal} is not valid`
            res.send(result);
            return;
        }

    }else{
        result.error = "No value for decimal in path"
        res.send(result);
        return;
    }
};


