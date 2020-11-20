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
  let session = URLSession.shared
  let url = URL(string: "${firstURL}")!
  let task = session.dataTask(with: url, completionHandler: { data, response, error in     
            print(error)             
            print(response)                                              
    })
  task.resume()
  `,
  "java": `
  HttpClient client = HttpClient.newHttpClient();
  HttpRequest request = HttpRequest.newBuilder()
          .uri(URI.create("${firstURL}"))
          .build();

  HttpResponse<String> response = client.send(request,
          HttpResponse.BodyHandlers.ofString());

  System.out.println(response.body());
  `,
  "php": `
  $curl = curl_init();
  curl_setopt_array($curl, array(
      CURLOPT_RETURNTRANSFER => 1,
      CURLOPT_URL => '${firstURL}'
  ));
  
  $resp = curl_exec($curl);
  echo $resp;
  
  curl_close($curl);
  `,
  "python": `
  import requests

  response = requests.get("${firstURL}")
  print(response.json())
  `,
  "curl": `
  curl ${firstURL}
  `,
  "golang": `
  package main

  import (
      "fmt"
      "io/ioutil"
      "log"
      "net/http"
      "os"
  )

  func main() {
      response, err := http.Get("${firstURL}")

      if err != nil {
          fmt.Print(err.Error())
          os.Exit(1)
      }

      responseData, err := ioutil.ReadAll(response.Body)
      if err != nil {
          log.Fatal(err)
      }
      fmt.Println(string(responseData))

  }
  `,
  "perl": `
  use REST::Client;
  my $client = REST::Client->new();
  $client->GET("${firstURL}");
  print $client->responseContent();
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
  let session = URLSession.shared
  let url = URL(string: "${secondURL}")!
  let task = session.dataTask(with: url, completionHandler: { data, response, error in      
            print(error)             
            print(response)                                              
    })
  task.resume()
  `,
  "java": `
  HttpClient client = HttpClient.newHttpClient();
  HttpRequest request = HttpRequest.newBuilder()
          .uri(URI.create("${secondURL}"))
          .build();

  HttpResponse<String> response = client.send(request,
          HttpResponse.BodyHandlers.ofString());

  System.out.println(response.body());
  `,
  "php": `
  $curl = curl_init();
  curl_setopt_array($curl, array(
      CURLOPT_RETURNTRANSFER => 1,
      CURLOPT_URL => '${secondURL}'
  ));
  
  $resp = curl_exec($curl);
  echo $resp;
  
  curl_close($curl);
  `,
  "python": `
  import requests

  response = requests.get("${secondURL}")
  print(response.json())
  `,
  "curl": `
  curl ${secondURL}
  `,
  "golang": `
  package main

  import (
      "fmt"
      "io/ioutil"
      "log"
      "net/http"
      "os"
  )

  func main() {
      response, err := http.Get("${secondURL}")

      if err != nil {
          fmt.Print(err.Error())
          os.Exit(1)
      }

      responseData, err := ioutil.ReadAll(response.Body)
      if err != nil {
          log.Fatal(err)
      }
      fmt.Println(string(responseData))

  }
  `,
  "perl": `
  use REST::Client;
  my $client = REST::Client->new();
  $client->GET("${secondURL}");
  print $client->responseContent();
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


