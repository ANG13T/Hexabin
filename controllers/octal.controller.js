function getOctalNumber(length){
    let octal = ""
    for(let i = 0; i < length; i++){
      octal += (Math.random() * 8)  
    }
    return octal
}

function isValidOctal(octal) {
   
}

function isValidConversion(conversion){
    if(conversion == "binary" || conversion == "decimal" || conversion == "hex"){
        return true;
    }
    return false
}


//Get a octal number
exports.getOctalNumber = function(req, res) {
    res.send('NOT IMPLEMENTED: Get a binary number');
};

//Get multiple octal numbers
exports.getOctalNumbers = function(req, res) {
    res.send('NOT IMPLEMENTED: Get multiple octal numbers');
};

//Convert octal to another value
exports.convertOctalTo = function(req, res) {
    res.send('NOT IMPLEMENTED: Convert octal to another value');
};