function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
    document.getElementsByClassName("maingirl")[0].style.marginLeft = "150px";
    document.getElementsByClassName("navflex")[0].style.width = "78.5%";
    document.getElementsByClassName("overlay")[0].style.display = "block";

};

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByClassName("maingirl")[0].style.marginLeft= "0";
    document.getElementsByClassName("navflex")[0].style.width = "96.5%";
    document.getElementsByClassName("overlay")[0].style.display = "none";
};

// Slide To Navigation Buttons
function about(){
$('html, body').animate({
  scrollTop: ($('#about').offset().top)
  },1000);
};
function contact(){
  $('html, body').animate({
  scrollTop: ($('#contact').offset().top)
  },1000,);
};


// // When the window browser reaches this height or onload...DO THIS. And only do it once please.
$(document).ready(function() {
$(window).scroll( function(){
$('.fadein').each( function(i){
  var bottomOfElem= $(this).offset().top + $(this).outerHeight();
  var bottomOfWind= $(window).scrollTop() + $(window).height();
  if( bottomOfWind > bottomOfElem ){
  $(this).animate({'opacity':'1'},300);
  }
});
  });
});
//
