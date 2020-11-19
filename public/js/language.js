let language = window.location.pathname.split('/')[2];

$(document).ready(function() {
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });

    if(language == "ruby"){
      $('.content').append(`
        <i class="fas fa-gem logo red"></i>
        <span>Getting Started with Ruby</span>
      `)
    }else if(language == "javascript"){
      $('.content').append(`
      <i class="fab fa-node-js logo green"></i>
      <span>Getting Started with Javascript</span>
    `)
    }else if(language == "objectivec"){
      $('.content').append(`
      <i class="fab fa-app-store-ios logo blue"></i>
      <span>Getting Started with Objective C</span>
    `)
    }else if(language == "java"){
      $('.content').append(`
      <i class="fab fa-java logo tan"></i>
      <span>Getting Started with Java</span>
    `)
    }else if(language == "php"){
      $('.content').append(`
      <i class="fab fa-php logo blue"></i>
      <span>Getting Started with PHP</span>
    `)
    }else if(language == "python"){
      $('.content').append(`
      <i class="fab fa-python logo darkblue"></i>
      <span>Getting Started with Python</span>
    `)
    }else if(language == "curl"){
      $('.content').append(`
      <i class="fas fa-terminal logo gray"></i>
      <span>Getting Started with Curl</span>
    `)
    }else if(language == "golang"){
      $('.content').append(`
      <i class="fab fa-google logo tan"></i>
      <span>Getting Started with Golang</span>
    `)
    }else if(language == "perl"){
      $('.content').append(`
      <i class="fab fa-pushed logo blue"></i>
      <span>Getting Started with Perl</span>
    `)
    }
  });


