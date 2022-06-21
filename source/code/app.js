import * as flsFunction from './modules/function.js';

flsFunction.isWebp();

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: true,
  spaceBetween: 20,
  slidesPerView: 1,
  allowTouchMove: false,

  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },

  breakpoints: {
    1280: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    708: {
      slidesPerView: 2,
    },
  },
});
