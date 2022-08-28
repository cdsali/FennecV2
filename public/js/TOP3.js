$('#TOP3 input').on('change', function() {
    $('#TOP3').toggleClass('blue');
  });


  document.getElementById("ship").animate([
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
   
    duration: 1000,
    iterations: Infinity
  });