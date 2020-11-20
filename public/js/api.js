let base = window.location.origin + "/api";

let titles = {
  "getBinary": "Get a binary value",
  "convertBinary": "Convert a binary value", 
  "getOctal": "Get a octal value",
  "convertOctal": "Convert a octal value",
  "getDecimal": "Get a decimal value",
  "convertDecimal": "Convert a decimal value",
  "getHex": "Get a hexadecimal value", 
  "convertHex": "Convert a hexadecimal value",
  "getRandom": "Get a random value"
}

let valueType = {type: "value", description: "Value of the format to be converted"};
let conversionType = {type: "conversion", description: "Format to convert the value to"};
let pathTypes = [valueType, conversionType]

let amountType = {type: "amount", description: "Optional. The amount of values returned. Example: ?amount=3"};
let lengthType = {type: "length", description: "Optional. The length of the values returned. Example: ?length=5"};
let types = [amountType, lengthType]

let paths = {
  "getBinary": `${base}/binary`,
  "convertBinary": `${base}/binary/:value/convert/:conversion`, 
  "getOctal": `${base}/octal`,
  "convertOctal": `${base}/octal/:value/convert/:conversion`,
  "getDecimal": `${base}/decimal`,
  "convertDecimal": `${base}/decimal/:value/convert/:conversion`,
  "getHex": `${base}/hex`, 
  "convertHex": `${base}/hex/:value/convert/:conversion`,
  "getRandom": `${base}/random`
}


let about = $('#about');
let info = $('#info');

$('document').ready(function(){
  about.show();
  info.hide();
})

$('.ref').click(function(){
  about.hide();
  info.show();
  showDetails(this.id);
})

$('#copyButton').click(function(){
  var copyText = document.getElementById("urlInput")

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");
})


function showDetails(id){
  $('#query-params').children("div").remove()
  $('#path-params').children("div").remove()

  $('.refTitle').text(titles[id])
  $('#urlInput').val(paths[id])
  if(Object.keys(paths).indexOf(id) % 2 == 1){
    $("#path-params").show();
    $("#query-params").hide();
    pathTypes.forEach(path => {
      $('#path-params').append(`
      <div class="card error-card">
            <div class="card-body">
              <h3 class="status">${path.type}</h3>
              <p class="status-description">${path.description}</p>
            </div>
      </div>
      `)
    })
  }else{
    $("#path-params").hide();
    $("#query-params").show();
    types.forEach(query => {
      $('#query-params').append(`
      <div class="card error-card">
            <div class="card-body">
              <h3 class="status">${query.type}</h3>
              <p class="status-description">${query.description}</p>
            </div>
      </div>
    `)
    }) 
  }
}

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
let convertURLValue;


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
  urlValue = base + "/"
  urlValue += `${(result.format).toLowerCase()}`;
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
  fetch(urlValue, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  })
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
  convertURLValue = `${base}/`
  convertURLValue += `${(convertResult.from).toLowerCase()}/${(convertResult.fromValue)}/convert/${(convertResult.to).toLowerCase()}`;
  convertURL.innerText = "URL: " + convertURLValue
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
  let returnValue = true;
  let fromCode = convertResult.from.toLowerCase();
  let fromValue = convertResult.fromValue;
  let to = convertResult.to.toLowerCase();

  if(fromCode == to){
    toValue.classList.add("warning")
    returnValue = false;
  }else{
    toValue.classList.remove("warning")
  }


  if(fromCode == "binary"){
    if(isValidBinary(fromValue)){
      fromCodeValue.classList.remove("warning");
    }else{
      fromCodeValue.classList.add("warning"); 
      returnValue = false;
    }
  }else if(fromCode == "hex"){
    if(isValidHex(fromValue)){
      fromCodeValue.classList.remove("warning")
    }else{
      fromCodeValue.classList.add("warning"); 
      returnValue = false;
    }
  }else if(fromCode == "decimal"){
    if(isValidDecimal(fromValue)){
      fromCodeValue.classList.remove("warning")
    }else{
      fromCodeValue.classList.add("warning"); 
      returnValue = false;
    }
  }else{ //octal
    if(isValidOctal(fromValue)){
      fromCodeValue.classList.remove("warning")
    }else{
      fromCodeValue.classList.add("warning"); 
      returnValue = false;
    } 
  }

  return returnValue;
}

convertValue.addEventListener('click', function(){
  if (convertForm.style.display === "none" || convertForm.style.display === "") {
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
  validateConvertFields();
  updateConvertURL();
})


convertSendRequestBtn.addEventListener('click', function(){
  if(!validateConvertFields()){
    alert("Invalid Parameters")
    return;
  }
  updateConvertURL();
  fetch(convertURLValue, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  })
  .then(res => res.json())
  .then((out) => {
    let textedJSON = JSON.stringify(out);
    convertTextArea.innerText = textedJSON;
  })
  .catch(err => { throw err });
})


convertResetFormBtn.addEventListener('click', function(){
  convertResult = {from: "Binary", fromValue: "1010", to: "Decimal"}
  fromValue.value = convertResult.from;
  fromCodeValue.value = convertResult.fromValue;
  toValue.value = convertResult.to;
  updateConvertURL();
})

