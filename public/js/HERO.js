
"use strict";


$(window).on('load', function () {
    $('#loading').hide();
}) 

function animate (obj){
    document.getElementById(obj).animate([
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

}

animate("imgf");
animate('ship');





















   







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



if (window.matchMedia("(max-width: 767px)").matches) {

}

else {
   
    eventon('#text-path1', '#text-container1');
}


var isphone=window.matchMedia("(max-width: 767px)").matches;
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


 

    if (isphone) {
       
    }

    else {
        $('#ship').css({
            'margin-left': (scrollPos % 100) - 20 + '%'
        })



    }

})





$(function() {
  var $el = $('body');
  $(window).on('scroll', function () {
      var scroll = $(document).scrollTop();
      console.log('scroll=  ',scroll);
      $el.css({
          'background-position':'50% '+(-.4*scroll)+'px'+',0 10%,0 0'
      });
  });
});