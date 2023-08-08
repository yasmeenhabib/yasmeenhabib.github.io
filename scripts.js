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
// JavaScript to toggle dark mode

// document.addEventListener('DOMContentLoaded', () => {
//   const toggleSlider = document.getElementById('mode-toggle');
//   let isDarkMode = false;

//   toggleSlider.addEventListener('click', () => {
//     isDarkMode = !isDarkMode;
//     if (isDarkMode) {
//       document.getElementById('theme-style').setAttribute('href', 'dark.css');
//     } else {
//       document.getElementById('theme-style').setAttribute('href', 'styles.css');
//     }
//   });
// });
document.addEventListener('DOMContentLoaded', () => {
  const toggleSlider = document.getElementById('mode-toggle');
  let isDarkMode = false;

  toggleSlider.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
      document.getElementById('theme-style').setAttribute('href', 'dark.css');
      toggleSlider.classList.add('on');
    } else {
      document.getElementById('theme-style').setAttribute('href', 'styles.css');
      toggleSlider.classList.remove('on');
    }
  });
});
