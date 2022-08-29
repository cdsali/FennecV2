
"use strict";


$(window).on('load', function () {
    $('#loading').hide();
}) 


document.getElementById("imgf").animate([
    // étapes/keyframes
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-1px)' },
    { transform: 'translateY(-2px)' },
    { transform: 'translateY(-3px)' },
    { transform: 'translateY(-4px)' },
    { transform: 'translateY(-5px)' },
    { transform: 'translateY(-6px)' },
    { transform: 'translateY(-7px)' },
    { transform: 'translateY(-8px)' },
    { transform: 'translateY(-7px)' },
    { transform: 'translateY(-6px)' },
    { transform: 'translateY(-5px)' },
    { transform: 'translateY(-4px)' },
    { transform: 'translateY(-3px)' },
    { transform: 'translateY(-2px)' },
    { transform: 'translateY(-1px)' },
    { transform: 'translateY(0px)' }
  ], {
    // temporisation
    duration: 1000,
    iterations: Infinity
  });



function enter()
{
 
  let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;

       // document.querySelector("#f1 img ").style.marginLeft = timePassed / 2 + 'px';

        if (timePassed > 20) {
         // document.getElementById("imgfen").style.display="none";
         document.getElementById("b1").style.display="none";
         document.getElementById("background").style.display="none";

        $('.zone').css({
          
          'top':'0',
          'left':'0',
          'right':'0',
          'bottom':'0',
          'margin' :'auto'
      });
       
      let elt= document.querySelector(".hero-section");
     // rotateFennec(elt);
      //change(elt);
      
      elt.style.display="none";
          //$('.hero-section').css("background", "url('../img/speed3.gif') no-repeat center center fixed");
          //$('.hero-section').css("background-size", "cover");

        //  $('.hero-section').css("display", "none");
          $('#hero2').css("display", "");

          clearInterval(timer);

          

          }

         


      }, 20);
}










function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}















   







function eventon(txtpath,txtcont)
{
//console.clear();


   
var textPath = document.querySelector(txtpath);

var textContainer = document.querySelector(txtcont);

var path = document.querySelector( textPath.getAttribute('href') );

var pathLength = path.getTotalLength();


function updateTextPathOffset(offset){
  textPath.setAttribute('startOffset', offset); 
}

updateTextPathOffset(pathLength);

function onScroll(){
 
  
  requestAnimationFrame(function(){
    var rect = textContainer.getBoundingClientRect();
    var scrollPercent = rect.y / window.innerHeight;
    
    updateTextPathOffset( scrollPercent * 1.2 * pathLength );
  });

}

window.addEventListener('scroll',onScroll);


}

eventon('#text-path1','#text-container1');


$(window).scroll(function() {

 
  var scrollPos = $(this).scrollTop() / 20;

   
 

 




    AOS.init({
        duration: 1200,
    })
/*
$('#fennec2').css({
  'width': 50+((scrollPos*50)/2500)+'%'
})
 */

/*
var myElement = document.querySelector('#testi img');
var bounding = myElement.getBoundingClientRect();
console.log("bound = ",bounding.top);
if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {

 
 

  
} else {

    is=0;
}

var myElement = document.querySelector('#testi img');
  //myElement.style.transform="translateX(-50"-bounding.top+"%)";
    myElement.style.opacity=0.1+Math.max(scrollPos%10,0)/10;
*/


 

    if (window.matchMedia("(max-width: 767px)").matches) {
     
    }

    else {
        $('#ship').css({
            'margin-left': (scrollPos % 100) - 20 + '%'
        }) }

})





$(function() {
  var $el = $('body');
  $(window).on('scroll', function () {
      var scroll = $(document).scrollTop();
      console.log('scroll=  ',scroll);
      $el.css({
          'background-position':'50% '+(-.5*scroll)+'px'+',0 10%,0 0'
      });
  });
});