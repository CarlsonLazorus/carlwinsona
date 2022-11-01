// function disableScroll() {
//   // Get the current page scroll position
//   scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
//     // if any scroll is attempted,
//     // set this to the previous value
//     (window.onscroll = function () {
//       window.scrollTo(scrollLeft, scrollTop);
//     });
// }

// function enableScroll() {
//   window.onscroll = function () {};
// }

//open invitation
window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".modal").style.display = "block";
    // disableScroll();
  }, 0);
});
document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".modal").style.display = "none";
  playAudio();
  // enableScroll();
});

//Mute Unmute Music Background
var audio = document.getElementById("music");

function playAudio() {
  audio.play();
  // document.getElementById("muteButton").style.display = "inline";
  // document.getElementById("unmuteButton").style.display = "none";
}

function pauseAudio() {
  audio.pause = true;
  // vid2.muted = true;
  // document.getElementById("muteButton").style.display = "none";
  // document.getElementById("unmuteButton").style.display = "inline";
}

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", this.window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//radio button
function radioAttend() {
  document.getElementById("totalGuest").style.display = "inline";
  document.getElementById("br1").style.display = "inline";
  document.getElementById("br2").style.display = "inline";
}

function radioNotAttend() {
  document.getElementById("totalGuest").style.display = "none";
  document.getElementById("br1").style.display = "none";
  document.getElementById("br2").style.display = "none";
}

function radio1() {
  document.getElementById("guest1").style = "display: inline; margin-top:10px";
  document.getElementById("guest2").style.display = "none";
  document.getElementById("guest3").style.display = "none";
  document.getElementById("guest4").style.display = "none";
  document.getElementById("guest5").style.display = "none";
}

function radio2() {
  document.getElementById("guest1").style = "display: inline; margin-top:10px";
  document.getElementById("guest2").style = "display: inline; margin-top:10px";
  document.getElementById("guest3").style.display = "none";
  document.getElementById("guest4").style.display = "none";
  document.getElementById("guest5").style.display = "none";
}

function radio3() {
  document.getElementById("guest1").style = "display: inline; margin-top:10px";
  document.getElementById("guest2").style = "display: inline; margin-top:10px";
  document.getElementById("guest3").style = "display: inline; margin-top:10px";
  document.getElementById("guest4").style.display = "none";
  document.getElementById("guest5").style.display = "none";
}

function radio4() {
  document.getElementById("guest1").style = "display: inline; margin-top:10px";
  document.getElementById("guest2").style = "display: inline; margin-top:10px";
  document.getElementById("guest3").style = "display: inline; margin-top:10px";
  document.getElementById("guest4").style = "display: inline; margin-top:10px";
  document.getElementById("guest5").style.display = "none";
}

function radio5() {
  document.getElementById("guest1").style = "display: inline; margin-top:10px";
  document.getElementById("guest2").style = "display: inline; margin-top:10px";
  document.getElementById("guest3").style = "display: inline; margin-top:10px";
  document.getElementById("guest4").style = "display: inline; margin-top:10px";
  document.getElementById("guest5").style = "display: inline; margin-top:10px";
}

// //Javascript for reveal transition
// //common reveal options to create reveal animations
// ScrollReveal({
//   reset: false,
//   distance: "60px",
//   duration: 2500,
//   delay: 400,
// });

// //target elements, and specify options to create reveal animations
// ScrollReveal().reveal("", { delay: 700, origin: "bottom", interval: 200 });
// ScrollReveal().reveal("", { delay: 600, origin: "left", interval: 200 });
// ScrollReveal().reveal(".shots", { delay: 600, origin: "right", interval: 200 });
// ScrollReveal().reveal(".locateEureka", { delay: 700, origin: "bottom" });
// ScrollReveal().reveal("", { delay: 500, origin: "bottom", interval: 200 });
// ScrollReveal().reveal(".gallery", { delay: 500, origin: "top", interval: 200 });

//Change image by window width
// let w = window.innerWidth;

// if (w < 1100) {
//   document.getElementById("desktop").style.display = "none";
//   document.getElementById("phone").style.display = "inline";
// } else if ((w) => 1100) {
//   document.getElementById("phone").style.display = "none";
//   document.getElementById("desktop").style.display = "inline";
// }

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
  document.getElementById("countdownDays").innerHTML = days;
  document.getElementById("countdownHours").innerHTML = hours;
  document.getElementById("countdownMinutes").innerHTML = minutes;
  document.getElementById("countdownSeconds").innerHTML = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

//show bank number
function showDiv() {
  document.getElementById("welcomeDiv").style.display = "block";
}

//copy bank number
function copyBank() {
  /* Copy text into clipboard */
  navigator.clipboard.writeText("165125317811");
}

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
