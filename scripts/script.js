new Swiper('.slider', {
  spaceBetween: 50,
  loop: true,
  grabCursor: true,

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

  autoplay: {
    stopOnLastSlide: false,
    disableOnInteraction: true
  }
});

new Swiper('.slider-img', {
    loop: true,
    grabCursor: true,
  
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
  
    autoplay: {
      stopOnLastSlide: false,
      disableOnInteraction: true
    },
  
    
  
  });
