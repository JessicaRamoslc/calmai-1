

var countDownDate = new Date("Jul 9, 2020 19:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = `
  <div id="divScript" style="display: flex; padding-left: 180px">
<div id="floatContainer" style="
  position: relative; margin-right:25px; padding-bottom: 30px;">
  <p">${days}</p>
  <p style="border: none;
  outline: 0; margin-top:  -20px">dia</p>
</div>
<div id="floatContainer" style="
  position: relative; margin-right:25px; padding-bottom: 30px;">
  <p>${hours}</p>
  
  <p style="border: none;
  outline: 0; margin-top:  -20px">h</p>
</div>
<div id="floatContainer" style="
  position: relative; margin-right:25px; padding-bottom: 30px;">
  <p>${minutes}</p>
  <p style="border: none;
  outline: 0; margin-top:  -20px"> m </p>
</div>
<div id="floatContainer" style="
  position: relative; margin-right:25px; padding-bottom: 30px; ">
  <p>${seconds}</p>
  <p style="border: none;
  outline: 0; margin-top:  -20px">s</p>
</div>
  </div>
  `;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Estamos no ar!!"+<a href="https://www.youtube.com/watch?v=tg6XWCtxuO0">Acesse nosso canal!<a/>;
  }
}, 1000);

//Exit Intent PopUp

var cont = 0;
var maxContador = 1;

document.addEventListener('mouseleave', function () {
  if (cont < maxContador) {
    $("#Modal").modal('show');
    cont += 1;
  }
})

