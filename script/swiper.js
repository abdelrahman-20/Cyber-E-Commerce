// Initialize Side-Bar Slider
var swiper = new Swiper(".slide-swp", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullests: true,
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  loop: true,
});

// Initialize Sales-Products Slider
var swiper = new Swiper(".sales-section", {
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});
