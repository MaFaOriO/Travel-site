const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navItems = document.getElementsByClassName("nav-items")[0];

toggleButton.addEventListener("click", () => {
  navItems.classList.toggle("active");
});

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider());

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("display-slide");
    intervalId = setInterval(nextSlide, 10000);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("display-slide");
  });

  slides[slideIndex].classList.add("display-slide");
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}
