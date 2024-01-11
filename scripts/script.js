const textSlider = new Swiper('.slider', {
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  speed: 500,

  navigation: {
    nextEl: '.plants__next-btn'
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
  },

  mousewheel: {
    eventsTarget: ".plants__info"
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
});

const imageSlider = new Swiper('.slider-img', {
    loop: true,
    grabCursor: true,
    effect: 'fade',
    speed: 800,

    fadeEffect: {
      crossFade: true,
    },
  
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },
  
    mousewheel: {
      eventsTarget: ".slider-img"
    },
  });

  textSlider.controller.control = imageSlider;
  imageSlider.controller.control = textSlider;