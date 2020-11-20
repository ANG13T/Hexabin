let language = window.location.pathname.split('/')[2];

let firstURL = "http://localhost:8081/api/binary";
let secondURL = "http://localhost:8081/api/binary/1010/convert/decimal";

let titleChunks = 
{
  "ruby": `
  <i class="fas fa-gem logo red"></i>
  <span>Getting Started with Ruby</span>
  `,
  "javascript": `
  <i class="fab fa-node-js logo green"></i>
  <span>Getting Started with Node.js</span>
  `,
  "swift": `
  <i class="fab fa-app-store-ios logo blue"></i>
  <span>Getting Started with Swift</span>
  `,
  "java": `
  <i class="fab fa-java logo tan"></i>
  <span>Getting Started with Java</span>
  `,
  "php": `
  <i class="fab fa-php logo blue"></i>
  <span>Getting Started with PHP</span>
  `,
  "python": `
  <i class="fab fa-python logo darkblue"></i>
  <span>Getting Started with Python</span>
  `,
  "curl": `
  <i class="fas fa-terminal logo gray"></i>
  <span>Getting Started with Curl</span>
  `,
  "golang": `
  <i class="fab fa-google logo tan"></i>
  <span>Getting Started with Golang</span>
  `,
  "perl": `
  <i class="fab fa-pushed logo blue"></i>
  <span>Getting Started with Perl</span>
  `
}

let firstCodeChunks = 
{
  "ruby": `
  require ‘net/http’ 
  require ‘uri’

  args = { :stat => stat_name, :email => account_email, :count => count } 
  resp = Net::HTTP.post_form(URI.parse("${firstURL}"), args)
  `,
  "javascript": `
  fetch('${firstURL}')
  .then(response => response.json())
  .then(data => console.log(data));
  `,
  "swift": `
  <i class="fab fa-app-store-ios logo blue"></i>
  <span>Getting Started with Swift</span>
  `,
  "java": `
  <i class="fab fa-java logo tan"></i>
  <span>Getting Started with Java</span>
  `,
  "php": `
  <i class="fab fa-php logo blue"></i>
  <span>Getting Started with PHP</span>
  `,
  "python": `
  import requests

  response = requests.get("${firstURL}")
  print(response.json())
  `,
  "curl": `
  <i class="fas fa-terminal logo gray"></i>
  <span>Getting Started with Curl</span>
  `,
  "golang": `
  <i class="fab fa-google logo tan"></i>
  <span>Getting Started with Golang</span>
  `,
  "perl": `
  <i class="fab fa-pushed logo blue"></i>
  <span>Getting Started with Perl</span>
  `
}

let secondCodeChunks = 
{
  "ruby": `
  require ‘net/http’ 
  require ‘uri’

  args = { :stat => stat_name, :email => account_email, :count => count } 
  resp = Net::HTTP.post_form(URI.parse("${secondURL}"), args)
  `,
  "javascript": `
  fetch('${secondURL}')
  .then(response => response.json())
  .then(data => console.log(data));
  `,
  "swift": `
  <i class="fab fa-app-store-ios logo blue"></i>
  <span>Getting Started with Swift</span>
  `,
  "java": `
  <i class="fab fa-java logo tan"></i>
  <span>Getting Started with Java</span>
  `,
  "php": `
  <i class="fab fa-php logo blue"></i>
  <span>Getting Started with PHP</span>
  `,
  "python": `
  import requests

  response = requests.get("${secondURL}")
  print(response.json())
  `,
  "curl": `
  <i class="fas fa-terminal logo gray"></i>
  <span>Getting Started with Curl</span>
  `,
  "golang": `
  <i class="fab fa-google logo tan"></i>
  <span>Getting Started with Golang</span>
  `,
  "perl": `
  <i class="fab fa-pushed logo blue"></i>
  <span>Getting Started with Perl</span>
  `
}

$(document).ready(function() {
    $('.content').append(titleChunks[language])
    $('#getCode').append(firstCodeChunks[language])
    $('#convertCode').append(secondCodeChunks[language])

    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
});


