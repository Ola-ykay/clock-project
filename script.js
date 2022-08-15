const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");

function runClock(){
var date = new Date();
let sec = date.getSeconds();
let min = date.getMinutes();
let hr = date.getHours();

console.log("Hour: "+hr+ "Minute: "+min + "Second: "+sec);

let secPosition = sec * 360/60;
let minPosition = (min * 360/60) + (sec * 360/60)/60;
let hrPosition = hr*360/12 + ((min * 360/60)/12);

second.style.transform = "rotate(" + secPosition + "deg)";
minute.style.transform = "rotate(" + minPosition + "deg)";
hour.style.transform = "rotate(" + hrPosition + "deg)";
}

var interval = setInterval(runClock, 1000);
