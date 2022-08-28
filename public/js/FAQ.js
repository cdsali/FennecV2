
const chaque = [0,0,0];
function verse(index)
{
   
    

  

  if(chaque[index]==0) { 
    const feat=document.querySelector("#FAQ #cont"+index.toString());
    
      feat.style = "-webkit-transform: rotateY(180deg);transform: rotateY(180deg)";
     
      chaque[index]=1;
}
  else
  { 
    const feat=document.querySelector("#FAQ #cont"+index.toString());
   
    feat.style = "-webkit-transform: rotateY(8deg);transform: rotateY(8deg)";
    
    chaque[index]=0;
}
     

}




const verse2=(props) =>{


let feat2=document.getElementById("#FAQ");


feat2.style="-webkit-transform: rotateY(75deg);transform: rotateZ(180deg)"



document.getElementById("props.value").animate([
    // étapes/keyframes
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-1px)' },
    { transform: 'translateY(-2px)' },
    { transform: 'translateY(-3px)' },
    { transform: 'translateY(-4px)' },
    { transform: 'translateY(-5px)' },
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