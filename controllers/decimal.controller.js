function getHexNumber(length){
    return '#'+Math.floor(16**5 + Math.random()*(16**6-16**5)).toString(16);;
}

function isValidHex(hex) {
    var a = parseInt(hex,16);
    return (a.toString(16) === h)
}

function isValidConversion(conversion){
    if(conversion == "binary" || conversion == "octal" || conversion == "decimal"){
        return true;
    }
    return false
}

function convertHex(hex, conversion){
    let binary = (parseInt(hex, 16).toString(2)).padStart(8, '0');

    if(conversion == "octal"){
        let octal = parseInt(binary, 2).toString(8);
        return octal;
    }

    if(conversion == "binary"){
        return binary;
    }

    if(conversion == "decimal"){
        let digit = parseInt(hex, 16);
        return digit
    }
}


//Get multiple decimal numbers
exports.getDecimalNumbers = function(req, res) {
    res.send('NOT IMPLEMENTED: Get multiple decimal numbers');
};

//Get multiple decimal numbers
exports.getDecimalNumbersByLength = function(req, res) {
    res.send('NOT IMPLEMENTED: Get multiple decimal numbers');
};

//Convert decimal to another value
exports.convertDecimalTo = function(req, res) {
    res.send('NOT IMPLEMENTED: Convert decimal to another value');
};