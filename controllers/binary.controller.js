exports.getBinaryNumber = getBinaryNumber;
exports.isValidBinary = isValidBinary;

function getBinaryNumber(length){
    let binary = "";
    for(let i = 0; i < length; i++){
        let digit = Math.round(Math.random());
        binary += digit
    }
    return binary;
}

function isValidBinary(array) {
    for (var i of array) {
         if (i !== "0" && i !== "1") return false;
    }
    return true;
}

function isValidConversion(conversion){
    if(conversion == "hex" || conversion == "octal" || conversion == "decimal"){
        return true;
    }
    return false
}

function convertBinary(binary, conversion){
    if(conversion == "octal"){
        let octal = parseInt(binary, 2).toString(8);
        return octal;
    }

    if(conversion == "hex"){
        let hex = parseInt(binary, 2).toString(16).toUpperCase();
        return hex;
    }

    if(conversion == "decimal"){
        let digit = parseInt(binary, 2);
        return digit
    }
}


//Get multiple binary numbers
exports.getBinaryNumbers = function(req, res) {
    let result = {result: [], error: false}
    let amount;
    let length;

    if(req.query.length){
        length = parseInt(req.query.length)

        if(!length){
            result.error = `Invalid argument for length in path: ${req.query.length}`
            res.status(400).send(result)
            return;
        }

    }
    if(req.query.amount){
        amount = parseInt(req.query.amount)

        if(!amount){
            result.error = `Invalid argument for amount in path: ${req.query.amount}`
            res.status(400).send(result)
            return;
        }

        if(amount > 20){
            result.error = "MAX of 20 items"
            res.status(400).send(result)
            return;
        }
    }else{
        amount = 1
    }
    
    let binaryList = []
    for(let i = 0; i < amount; i++){
        let binaryLength = length ? length : Math.floor(Math.random() * 10) + 1;
        binaryList.push(getBinaryNumber(binaryLength))
    }
    result.result = binaryList;

    res.status(200).send(result)
};


//Convert binary to another value
exports.convertBinaryTo = function(req, res) {
    let result = {result: "", error: false}

    if(req.params.binary){
        //check if binary is valid
        let binary = req.params.binary.split("")
        if(isValidBinary(binary)){
            if(isValidConversion(req.params.value)){
                result.result = convertBinary(req.params.binary, req.params.value)
                res.status(200).send(result);
                return;
            }else{
                result.error = `Conversion value in path: ${req.params.value} is not valid`
                res.status(400).send(result);
                return;
            }
        }else{
            result.error = `Binary value in path: ${req.params.binary} is not valid`
            res.status(400).send(result);
            return;
        }

    }else{
        result.error = "No value for binary in path"
        res.status(400).send(result);
        return;
    }
};
