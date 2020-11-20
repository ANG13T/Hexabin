exports.getHexNumber = getHexNumber;

function getHexNumber(){
    return '#'+Math.floor(16**5 + Math.random()*(16**6-16**5)).toString(16).toUpperCase();
}

function isValidHex(hex) {
    var a = parseInt(hex,16);
    return (a.toString(16) === hex)
}

function isValidConversion(conversion){
    if(conversion == "binary" || conversion == "octal" || conversion == "decimal"){
        return true;
    }
    return false
}

function convertHex(hex, conversion){
    let binary = (parseInt(hex, 16).toString(2));

    if(conversion == "octal"){
        let octal = parseInt(binary, 2).toString(8);
        return octal;
    }

    if(conversion == "binary"){
        return binary;
    }

    if(conversion == "decimal"){
        let digit = parseInt(binary, 2);
        return digit
    }
}


//Get multiple HEX numbers
exports.getHexNumbers = function(req, res) {
    let result = {result: [], error: false}
    let amount;

    if(req.query.amount){
        amount = parseInt(req.query.amount)

        if(!amount){
            result.error = `Invalid argument in path: ${req.query.amount}`
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
    
    let hexList = []
    for(let i = 0; i < amount; i++){
        hexList.push(getHexNumber())
    }
    result.result = hexList;

    res.status(200).send(result)
};

//Convert HEX to another value
exports.convertHexTo = function(req, res) {
    let result = {result: "", error: false}

    if(req.params.hex){
        //check if binary is valid
        let hex = req.params.hex.toLowerCase()
        if(isValidHex(hex)){
            if(isValidConversion(req.params.value)){
                result.result = convertHex(hex, req.params.value)
                res.status(200).send(result);
                return;
            }else{
                result.error = `Conversion value in path: ${req.params.value} is not valid`
                res.status(400).send(result);
                return;
            }
        }else{
            result.error = `Hex value in path: ${hex} is not valid`
            res.status(400).send(result);
            return;
        }

    }else{
        result.error = "No value for hex in path"
        res.status(400).send(result);
        return;
    }
};

