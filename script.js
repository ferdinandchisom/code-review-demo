// Carousel Script
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;

document.querySelector(".next").addEventListener("click", function () {
  moveToNextSlide();
});

document.querySelector(".prev").addEventListener("click", function () {
  moveToPrevSlide();
});

function updateCarousel() {
  const carousel = document.querySelector(".carousel");
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveToNextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function moveToPrevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

// Automatic slide
let autoSlide = setInterval(moveToNextSlide, 3000);

// Pause slide on hover
const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.addEventListener("mouseover", function () {
  clearInterval(autoSlide);
});

carouselContainer.addEventListener("mouseout", function () {
  autoSlide = setInterval(moveToNextSlide, 3000);
});
