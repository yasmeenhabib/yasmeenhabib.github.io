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
