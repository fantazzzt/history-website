const star = document.querySelector('#mobile-menu');
const link = document.querySelector('.navbar__menu');
const nav = document.querySelector('.navbar');
let lastScrollY = window.scrollY;


star.addEventListener('click', function() {
  star.classList.toggle('is-active');
  link.classList.toggle('active');
});

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
  }else {
    nav.classList.remove("nav--hidden");
  }
  lastScrollY = window.scrollY;
});