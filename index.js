

var nav = document.querySelector("#sideBar")

function openNav() {
  nav.style.width = "230px"; 
}

function closeNav() {
    nav.style.width = "0px";
}

var countDownDate = new Date("july 20, 2022 00:01:00").getTime();

var x = setInterval(function(){

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60  *60 * 24));
  var hours = Math.floor((distance % (1000 * 60 *60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / (1000));

  document.getElementById("demo").style.fontSize = "25px"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTMl = "MINTING HAS STARTED";
  }
}, 1000);

