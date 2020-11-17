function getBinaryNumber(length){
    let binary = "";
    for(let i = 0; i < length; i++){
        let digit = Math.round(Math.random());
        binary += digit
    }
    return binary;
}

function convertBinary(binary, conversion){
    if(conversion == "decimal"){

    }

    if(conversion == "octal"){

    }

    if(conversion == "hex"){

    }

    if(conversion == "decimal"){
        
    }
}


//Get multiple binary numbers
exports.getBinaryNumbers = function(req, res) {
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
    
    let binaryList = []
    for(let i = 0; i < amount; i++){
        let randomLength = Math.floor(Math.random() * 10) + 1;
        binaryList.push(getBinaryNumber(randomLength))
    }
    result.result = binaryList;

    res.send(result)
};

//Get binary numbers by length

exports.getBinaryNumbersByLength = function(req, res) {
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
    
    let binaryList = []
    for(let i = 0; i < amount; i++){
        binaryList.push(getBinaryNumber(length))
    }
    result.result = binaryList;

    res.send(result)
}

//Convert binary to another value
//value is not valid
exports.convertBinaryTo = function(req, res) {
    res.send('NOT IMPLEMENTED: Convert binary to another value');
};

//route not found