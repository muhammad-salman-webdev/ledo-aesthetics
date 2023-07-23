var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: false,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",

  navigation: {
    nextEl: ".item-navigator.prev",
    prevEl: ".item-navigator.next",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    300: {
      slidesPerView: 2,
    },
    550: {
      slidesPerView: 3,
    },
    850: {
      slidesPerView: 4,
    },
  },
});

// ..
const serviceCards = document.querySelectorAll(
  ".services-swipper-container .slider-service-item"
);
serviceCards.forEach((card) => {
  card.addEventListener("click", () => {
    let link = card.getAttribute("href");
    window.open(link, "_self");
  });
});
