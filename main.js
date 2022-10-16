//Change image by window width
let w = window.innerWidth;

if (w < 1100) {
  document.getElementById("desktop").style.display = "none";
  document.getElementById("phone").style.display = "inline";
} else if ((w) => 1100) {
  document.getElementById("phone").style.display = "none";
  document.getElementById("desktop").style.display = "inline";
}

//Countdown text
// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="countdown"
  document.getElementById("countdown1").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

//Javascript for slide show desktop
const slider = document.querySelector(".slide-show1");
const slides = document.querySelectorAll(".slide");
const numOfSlides = slides.length;
var slideNumber = 0;

//image slide show autoplay
var playSlider;

var autoplay = () => {
  playSlider = setInterval(function () {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > numOfSlides - 1) {
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
  }, 5000);
};

autoplay();

//Javascript for slide show desktop
const slider2 = document.querySelector(".slide-show2");
const slides2 = document.querySelectorAll(".slide2");
const numOfSlides2 = slides2.length;
var slideNumber2 = 0;

//image slide show autoplay
var playSlider;

var autoplay = () => {
  playSlider = setInterval(function () {
    slides2.forEach((slide2) => {
      slide2.classList.remove("active");
    });

    slideNumber2++;

    if (slideNumber2 > numOfSlides2 - 1) {
      slideNumber2 = 0;
    }

    slides2[slideNumber2].classList.add("active");
  }, 5000);
};

autoplay();
