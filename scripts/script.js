const plantsName = document.querySelector('.plants__name');
const allPlantsNames = document.querySelectorAll('.plants__name');
// const allPlantsDescriptions = document.querySelectorAll('.plants__description');
const plantsDescriptionFontsize = parseFloat(window.getComputedStyle(document.querySelector('.plants__description'), null).getPropertyValue('font-size'));
let plantsNameFontsize = parseFloat(window.getComputedStyle(document.querySelector('.plants__name'), null).getPropertyValue('font-size'));
let plantsNameLineHeight = parseFloat(window.getComputedStyle(document.querySelector('.plants__name'), null).getPropertyValue('line-height'));
// let plantsDescriptionLineHeight = parseFloat(window.getComputedStyle(document.querySelector('.plants__description'), null).getPropertyValue('line-height'));


const titleFontResize = (elementsArr, titleLH, titleFS, contentFS, minDifference) => {
  let offsetHeights = Array.from(elementsArr).map(function (i) {
    return i.offsetHeight;
  });
  
  while ((Math.max(...offsetHeights) > titleLH * 2) && (titleFS > contentFS + minDifference)) {
    titleFS -= 1;
    titleLH -= 1;

    for (i=0; i < elementsArr.length; i++) {
      elementsArr[i].style.setProperty('font-size', `${titleFS}px`);
      elementsArr[i].style.setProperty('line-height', `${titleLH}px`);
      offsetHeights.splice(i, 1, elementsArr[i].offsetHeight);
    };
  };

  // На случай, если мне понадобятся эти данные:
  // return {
  //   offsetHeights,
  //   adjustedFS: titleFS,
  //   adjustedLH: titleLH
  // };
};

const textBlockResize = () => {
  document.querySelectorAll('.plants__description').forEach(function (element) {
    let fakeElem = element.cloneNode(false);
    fakeElem.style = `
      max-height: 100000px;
      width: 100%;
      position: absolute;
      visibility: hidden;
      z-index: -100;
      width: ` + getComputedStyle(element).width;

    document.body.appendChild(fakeElem);

    let elementHeight = parseFloat(window.getComputedStyle(element, null).getPropertyValue('max-height'));

    fakeElem.textContent = element.textContent;

    while (parseFloat(getComputedStyle(fakeElem).height) > elementHeight) {
      while (element.textContent.endsWith('.')) {
        element.textContent = element.textContent.slice(0, -1);
      };

      let dot;
      let lastDot;
      while (dot !== -1) {
        dot = element.textContent.indexOf('.', dot + 1);
        console.log(dot);

        if (dot !== -1) {
          lastDot = dot;
        };
      };
      element.textContent = element.textContent.slice(0, lastDot + 1);
      fakeElem.textContent = element.textContent;
    }
  })
};

document.addEventListener('DOMContentLoaded', function () {
  titleFontResize(allPlantsNames, plantsNameLineHeight, plantsNameFontsize, plantsDescriptionFontsize, 8);
  textBlockResize();
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