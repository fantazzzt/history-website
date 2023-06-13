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

let flag = true; // Declare flag as a global variable

function showInformation(region, event) {
  var information = "Battle of Adrianople 378, Where Emperor Valens suffered a disastrous defeat at the hands of the Goths.";
  var informationBox = document.getElementById("information");
  informationBox.innerHTML = information;

  // Position the information box near the click event coordinates
  var left = event.clientX + 10 + "px"; // Adjust the horizontal position as needed
  var top = event.clientY + 10 + "px"; // Adjust the vertical position as needed
  informationBox.style.left = left;
  informationBox.style.top = top;

  // Show or hide the information box
  if (flag & region !== "REMOVE") {
    flag = false;
    informationBox.style.display = "block"; // Or use "inline-block" or another appropriate value
  } else {
    informationBox.style.display = "none";
    flag = true;
  }
}



/*Debug*/
var svgImage = document.querySelector('img[src="images/pic1.svg"]');
var width = svgImage.naturalWidth;
var height = svgImage.naturalHeight;
console.log("Width: " + width + "px, Height: " + height + "px");
