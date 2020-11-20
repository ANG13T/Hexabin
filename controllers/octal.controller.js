exports.getOctalNumber = getOctalNumber;

function getOctalNumber(length){
    let octal = ""
    for(let i = 0; i < length; i++){
      octal += Math.floor((Math.random() * 8))  
    }
    return octal
}

function isValidOctal(octal) {
    var a = parseInt(octal,8);
    return (a.toString(8) === octal)
}

function convertOctal(octal, conversion){
    let binary = (parseInt(octal, 8).toString(2));

    if(conversion == "hex"){
        let hex = parseInt(binary, 2).toString(16).toUpperCase();
        return hex;
    }

    if(conversion == "binary"){
        return binary;
    }

    if(conversion == "decimal"){
        let digit = parseInt(binary, 2);
        return digit
    }
}

function isValidConversion(conversion){
    if(conversion == "binary" || conversion == "decimal" || conversion == "hex"){
        return true;
    }
    return false
}


//Get multiple octal numbers
exports.getOctalNumbers = function(req, res) {
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
    
    let octalList = []
    for(let i = 0; i < amount; i++){
        let octalLength = length ? length : Math.floor(Math.random() * 10) + 1;
        octalList.push(getOctalNumber(octalLength))
    }
    result.result = octalList;

    res.status(200).send(result)
};

//Convert octal to another value
exports.convertOctalTo = function(req, res) {
    let result = {result: "", error: false}

    if(req.params.octal){
        //check if octal is valid
        let octal = req.params.octal
        if(isValidOctal(octal)){
            if(isValidConversion(req.params.value)){
                result.result = convertOctal(req.params.octal, req.params.value)
                res.status(200).send(result);
                return;
            }else{
                result.error = `Conversion value in path: ${req.params.value} is not valid`
                res.status(400).send(result);
                return;
            }
        }else{
            result.error = `Octal value in path: ${req.params.octal} is not valid`
            res.status(400).send(result);
            return;
        }

    }else{
        result.error = "No value for octal in path"
        res.status(400).send(result);
        return;
    }
};
