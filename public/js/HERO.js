
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


function enterphone()
{
 
  let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;

       // document.querySelector("#f2 img ").style.marginLeft = timePassed / 5 + 'px';

        if (timePassed > 2) {
         // document.getElementById("imgfen").style.display="none";
         //document.getElementById("b1").style.display="none";
         //document.getElementById("background").style.display="none";

        
       let elt= document.querySelector("#f2 img ");
      rotateFennec(elt);

      $('.zone #f2 img').css({
        'margin' :'auto',
        'top':'0',
        'left':'0',
        'right':'0',
        'bottom':'0'
    });

          $('.hero-section').css("background", "url('../img/speed3.gif') no-repeat center center fixed");
          $('.hero-section').css("background-size", "cover");
          clearInterval(timer);}

      }, 20);
}




function change(elt)
{
  elt.animate([
    
    { opacity:'0.8' },
    { opacity:'0.7' },
    { opacity:'0.6' },
    { opacity:'0.5' },
    { opacity:'0.4' },
    { opacity:'0.3' },
    { opacity:'0.2' },
    { opacity:'0.1' },
    { opacity:'0.0',display:'none' },

   


  
  ], {
    // temporisation
    duration: 2000,
    iterations:1
  });
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












function rotateFennec(elt)
{ 
 elt.animate([
    
    { transform: 'rotate(20deg)',width:'620px',height:'auto' },
    { transform: 'rotate(30deg)',width:'600px',height:'auto' },
    { transform: 'rotate(40deg)',width:'580px',height:'auto' },
    { transform: 'rotate(50deg)',width:'560px',height:'auto' },
    { transform: 'rotate(60deg)',width:'540px',height:'auto' },
    { transform: 'rotate(70deg)',width:'520px',height:'auto' },
    { transform: 'rotate(80deg)',width:'500px',height:'auto'},
    { transform: 'rotate(90deg)',width:'480px' ,height:'auto'},

    { transform: 'rotate(100deg)',width:'460px',height:'auto'},
    { transform: 'rotate(120deg)',width:'440px',height:'auto'},
    { transform: 'rotate(140deg)',width:'420px',height:'auto' },
    { transform: 'rotate(160deg)',width:'400px' ,height:'auto'},
    { transform: 'rotate(180deg)' ,width:'380px',height:'auto'},
    { transform: 'rotate(200deg)',width:'360px',height:'auto'},
    { transform: 'rotate(220deg)' ,width:'340px',height:'auto'},
    { transform: 'rotate(240deg)',width:'320px',height:'auto'},
    { transform: 'rotate(260deg)',width:'300px',height:'auto'},
    { transform: 'rotate(280deg)',width:'280px',height:'auto'},
    { transform: 'rotate(300deg)',width:'260px',height:'auto'},
    { transform: 'rotate(320deg)',width:'240px',height:'auto'},
    { transform: 'rotate(340deg)',width:'220px',height:'auto'},
    { transform: 'rotate(360deg)',width:'200px',height:'auto'},

    { transform: 'rotate(380deg)',width:'180px' ,height:'auto'},
    { transform: 'rotate(400deg)',width:'160px',height:'auto'},
    { transform: 'rotate(420deg)',width:'140px',height:'auto'},
    { transform: 'rotate(440deg)',width:'120px',height:'auto'},
    { transform: 'rotate(460deg)',width:'100px',height:'auto'},
    { transform: 'rotate(480deg)',width:'80px',height:'auto'},
    { transform: 'rotate(500deg)' ,width:'60px',height:'auto'},
    { transform: 'rotate(520deg)',width:'40px',height:'auto'},

    { transform: 'rotate(540deg)',width:'30px',height:'auto'},
    { transform: 'rotate(560deg)',width:'25px',height:'auto'},
    { transform: 'rotate(580deg)',width:'22px',height:'auto'},
    { transform: 'rotate(600deg)',width:'20px',height:'auto'},
    { transform: 'rotate(620deg)',width:'18px',height:'auto'},
    { transform: 'rotate(640deg)',width:'16px',height:'auto'},
    { transform: 'rotate(660deg)',width:'14px',height:'auto'},
    { transform: 'rotate(680deg)',width:'12px',height:'auto'},
    { transform: 'rotate(700deg)',width:'10px',height:'auto'},
    { transform: 'rotate(720deg)',width:'8px',height:'auto'},
    { transform: 'rotate(740deg)' ,width:'6px',height:'auto'},
    { transform: 'rotate(760deg)' ,width:'4px',height:'auto'},
    { transform: 'rotate(780deg)' ,width:'2px',height:'auto'},
    { transform: 'rotate(800deg)',width:'0px',height:'auto'},

  
  ], {
    // temporisation
    duration: 4000,
    iterations:1
  });

}



   





 /*

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

*/
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