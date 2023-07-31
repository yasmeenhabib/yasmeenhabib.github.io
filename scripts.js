// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// JavaScript to toggle the navigation menu for small screens
document.addEventListener("DOMContentLoaded", function() {
  const navbarToggler = document.getElementById("navbar-toggler");
  const navbarNav = document.getElementById("navbar-nav");

  navbarToggler.addEventListener("click", function() {
    navbarNav.classList.toggle("show");
  });
});
//type
const textElement = document.getElementById("text");
const words = ["HTML/CSS ", "JavaScript ", "MySQL ", "Laravel ", "SAP ABAP "];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    textElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    textElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (charIndex === currentWord.length) {
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex++;
    if (wordIndex === words.length) {
      wordIndex = 0;
    }
  }

  const typingSpeed = isDeleting ? 50 : 150; // type and erase 
  setTimeout(type, typingSpeed);
}

type();
