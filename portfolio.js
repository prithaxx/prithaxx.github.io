var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: false,
  slidesPerGroupSkip: 0,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});