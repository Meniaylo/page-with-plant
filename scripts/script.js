const plantsName = document.querySelector('.plants__name');
const allPlantsNames = document.querySelectorAll('.plants__name');
const plantsDescriptionFontsize = parseFloat(window.getComputedStyle(document.querySelector('.plants__description'), null).getPropertyValue('font-size'));
let plantsNameFontsize = parseFloat(window.getComputedStyle(document.querySelector('.plants__name'), null).getPropertyValue('font-size'));
let plantsNameLineHeight = parseFloat(window.getComputedStyle(document.querySelector('.plants__name'), null).getPropertyValue('line-height'));


const titleFontResize = (elementsArr, titleLH, titleFS, contentFS, minDifference) => {
  let offsetHeights = Array.from(elementsArr).map(function (i) {
    return i.offsetHeight;
  });
  
  console.log('offsetHeights', offsetHeights);

  while ((Math.max(...offsetHeights) > titleLH * 2) && (titleFS > contentFS + minDifference)) {
    titleFS -= 1;
    titleLH -= 1;

    for (i=0; i < elementsArr.length; i++) {
      elementsArr[i].style.setProperty('font-size', `${titleFS}px`);
      elementsArr[i].style.setProperty('line-height', `${titleLH}px`);
      offsetHeights.splice(i, 1, elementsArr[i].offsetHeight);
    };
  };

  // return {
  //   offsetHeights,
  //   adjustedFS: titleFS,
  //   adjustedLH: titleLH
  // };
};

document.addEventListener('DOMContentLoaded', function () {
  titleFontResize(allPlantsNames, plantsNameLineHeight, plantsNameFontsize, plantsDescriptionFontsize, 8);
});


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

scrollbar: {
  el: '.swiper-scrollbar',
  draggable: false
}
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