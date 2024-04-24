$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".od-color-nav").css("background" , "black");
        }
  
        else{
            $(".od-color-nav").css("background" , "transparent");  	
        }
    })
  })