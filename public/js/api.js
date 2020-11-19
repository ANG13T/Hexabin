var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activeBar");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


let retrieveValue = document.getElementById('retrieve-value');
let retrieveForm = document.getElementById('retrieve-form');

let convertValue = document.getElementById('convert-value');
let convertForm = document.getElementById('convert-form');

let sendRequestBtn = document.getElementById('send-request');
let resetFormBtn = document.getElementById('reset-form');
let codeValue = document.getElementById('code-value');
let url = document.getElementById('url');
let amount = document.getElementById('amount-value');
let length = document.getElementById('length-value');
let textArea = document.getElementById('resultTextArea');
let urlValue;


let convertSendRequestBtn = document.getElementById('send-request-2');
let convertResetFormBtn = document.getElementById('reset-form-2');
let convertURL = document.getElementById('convert-url');
let convertTextArea = document.getElementById('resultTextArea2');
let fromValue = document.getElementById('from-value');
let fromCodeValue = document.getElementById('from-code-value');
let toValue = document.getElementById('to-code-value');


let result = {format: "Binary", amount: 1, length: ""};
let convertResult = {from: "Binary", fromValue: "1010", to: "Decimal"}

document.addEventListener("load", function(){
  retrieveForm.style.display = "block";
  convertForm.style.display = "none"
});

resetFormBtn.addEventListener('click', function(){
  amount.value = "1";
  length.value = "";
  codeValue.value = "Binary";
  length.classList.remove("warning")
  amount.classList.remove("warning")
  result = {format: "Binary", amount: 1, length: ""};
  updateURL()
})

function validData(){
  let amountVal = parseInt(amount.value);
  let lengthVal = parseInt(length.value);

  if(!amountVal){
    return false;
  }

  if(!lengthVal){
    return (amountVal > 0 && amountVal < 21);
  }else{
    return (amountVal > 0 && amountVal < 21) && (lengthVal > 0);
  }
}

function updateURL(){
  urlValue = "http://localhost:8081/api/"
  urlValue += `${(result.format).toLowerCase()}`;
  console.log(result.format)
  if(result.amount > 1){
    urlValue += `?amount=${result.amount}`;
    
    if(result.length != ""){
      urlValue += `&length=${result.length}`;
    }
  }else{
    if(result.length != ""){
      urlValue += `?length=${result.length}`;
    }
  }
  url.innerText = "URL: " + urlValue
}

sendRequestBtn.addEventListener('click', function(){
  if(!validData()){
    alert("Invalid Parameters.")
    return;
  }
  updateURL()
  fetch(urlValue)
  .then(res => res.json())
  .then((out) => {
    let textedJSON = JSON.stringify(out);
    textArea.innerText = textedJSON;
  })
  .catch(err => { throw err });
})

codeValue.addEventListener('change', function(){
  result.format = codeValue.value
  updateURL();
})

amount.addEventListener('change', function(){
  let value = parseInt(amount.value);
  if(value < 1 || value > 20){
    amount.classList.add("warning")
  }else{
    amount.classList.remove("warning")
    result.amount = value
  }
  updateURL();
})

length.addEventListener('change', function(){
  let value = parseInt(length.value);
  if(value < 1){
    length.classList.add("warning")
  }else{
    length.classList.remove("warning")
    result.length = value
  }
  updateURL();
})

retrieveValue.addEventListener('click', function(){
  if (retrieveForm.style.display === "none") {
    retrieveForm.style.display = "block";
    convertForm.style.display = "none";
    retrieveValue.classList.add("active")
    convertValue.classList.remove("active")
  } else {
    retrieveForm.style.display = "none";
    convertForm.style.display = "block";
  }
})

// Convert form

function updateConvertURL(){
  urlValue = "http://localhost:8081/api/"
  urlValue += `${(convertResult.from).toLowerCase()}/${(convertResult.fromValue)}/convert/${(convertResult.to).toLowerCase()}`;
  convertURL.innerText = "URL: " + urlValue
}

// code validation

function isValidBinary(array) {
  for (var i of array) {
       if (i !== "0" && i !== "1") return false;
  }
  return true;
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

function isValidHex(hex) {
  var a = parseInt(hex,16);
  return (a.toString(16) === hex)
}

function isValidOctal(octal) {
  var a = parseInt(octal,8);
  return (a.toString(8) === octal)
}

function validateConvertFields(){
  let fromCode = convertResult.from.toLowerCase();
  let fromValue = convertResult.fromValue;

  if(fromCode == "binary"){
    isValidBinary(fromValue) ? fromCodeValue.classList.add("warning") : fromCodeValue.classList.remove("warning");
  }else if(fromCode == "hex"){
    isValidHex(fromValue) ? fromCodeValue.classList.add("warning") : fromCodeValue.classList.remove("warning");
  }else if(fromCode == "decimal"){
    isValidDecimal(fromValue) ? fromCodeValue.classList.add("warning") : fromCodeValue.classList.remove("warning");
  }else{ //octal
    isValidOctal(fromValue) ? fromCodeValue.classList.add("warning") : fromCodeValue.classList.remove("warning");
  }
}

convertValue.addEventListener('click', function(){
  if (convertForm.style.display === "none") {
    convertForm.style.display = "block";
    retrieveForm.style.display = "none";
    convertValue.classList.add("active")
    retrieveValue.classList.remove("active")
  } else {
    convertForm.style.display = "none";
    retrieveForm.style.display = "block";
  }
})


fromValue.addEventListener('change', function(){
  convertResult.from = fromValue.value
  validateConvertFields();
  updateConvertURL();
})

fromCodeValue.addEventListener('change', function(){
  convertResult.fromValue = fromCodeValue.value
  validateConvertFields()
})

toValue.addEventListener('change', function(){
  convertResult.to = toValue.value
  updateConvertURL();
})


convertSendRequestBtn.addEventListener('click', function(){

})


convertResetFormBtn.addEventListener('click', function(){
  
})

