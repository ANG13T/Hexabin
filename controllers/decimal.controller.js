function getDecimalNumber(length){
    let number = ""
    for(let i = 0; i < length; i++){
        number += (Math.random() * 10) + 1;
    }
    return parseInt(number);
}

function isValidDecimal(decimal) {
   return decimal % 1 == 0
}

function isValidConversion(conversion){
    if(conversion == "binary" || conversion == "octal" || conversion == "hex"){
        return true;
    }
    return false
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