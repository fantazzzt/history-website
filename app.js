const star = document.querySelector('#mobile-menu');
const link = document.querySelector('.navbar__menu');
const nav = document.querySelector('.navbar');
let lastScrollY = window.scrollY;


/*For mobile and small window */

star.addEventListener('click', function() {
  star.classList.toggle('is-active');
  link.classList.toggle('active');
});


/* Disappearing Scroll */
window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
  }else {
    nav.classList.remove("nav--hidden");
  }
  lastScrollY = window.scrollY;
});


/* Interactable Map */

// let flag = true; // Declare flag as a global variable

// function showInformation(region, event) {
//   let information = ''
//   if (region == "Adrianople"){
//     information = "Battle of Adrianople 378, Where Emperor Valens suffered a disastrous defeat at the hands of the Goths.";
// } else if (region =="Chalons"){
//     information = "Battle of Chalons 451 CE, Where the Roman and Foederati faces off against a confederation of Huns.";
// }
//   var informationBox = document.getElementById("information");
//   informationBox.innerHTML = information;

//   // Position the information box near the click event coordinates
//   var left = event.clientX + 10 + "px";
//   var top = event.clientY + 10 + "px"; 
//   informationBox.style.left = left;
//   informationBox.style.top = top;

//   // Show or hide the information box
//   if (flag & region !== "REMOVE") {
//     flag = false;
//     informationBox.style.display = "block"; // Or use "inline-block" or another appropriate value
//   } else {
//     informationBox.style.display = "none";
//     flag = true;
//   }
// }


document.addEventListener("DOMContentLoaded", function() {
  var overlay1 = document.querySelector(".overlayAdrian");
  var overlay2 = document.querySelector(".overlayChalons");
  var textBox = document.getElementById("textBox");

  overlay1.addEventListener("click", function() {
    textBox.value = "Battle of Adrianople 378, Where Emperor Valens suffered a disastrous defeat at the hands of the Goths.";
  });
  overlay2.addEventListener("click", function() {
    textBox.value = "Battle of Chalons 451 CE, Where the Roman and Foederati faces off against a confederation of Huns.";
  });
});


/*Debug*/
var svgImage = document.querySelector('img[src="images/pic1.svg"]');
var width = svgImage.naturalWidth;
var height = svgImage.naturalHeight;
console.log("Width: " + width + "px, Height: " + height + "px");
