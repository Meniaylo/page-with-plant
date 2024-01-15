const plantsName = document.querySelector('.plants__name');
const allPlantsNames = document.querySelectorAll('.plants__name');
const plantsDescriptionFontsize = parseFloat(window.getComputedStyle(document.querySelector('.plants__description'), null).getPropertyValue('font-size'));

let plantsNameFontsize = parseFloat(window.getComputedStyle(document.querySelector('.plants__name'), null).getPropertyValue('font-size'));
let plantsNameLineHeight = parseFloat(window.getComputedStyle(document.querySelector('.plants__name'), null).getPropertyValue('line-height'));

console.log(`Name font: ${plantsNameFontsize}`);
console.log(`Name LH: ${plantsNameLineHeight}`);
console.log(`Description font: ${plantsDescriptionFontsize}`);


const plantsNameResize = (arr) => {
  let offsetHeights = [];

  for (i=0; i < arr.length; i++) {
    offsetHeights.push(arr[i].offsetHeight);
  };
  console.log(`First array is ${offsetHeights}`);

  while ((Math.max(...offsetHeights) > plantsNameLineHeight * 2) && (plantsNameFontsize > plantsDescriptionFontsize + 8)) {
    console.log(Math.max(...offsetHeights), plantsNameLineHeight);
    console.log(plantsNameFontsize, plantsDescriptionFontsize);

    plantsNameFontsize = plantsNameFontsize - 1;
    plantsNameLineHeight = plantsNameLineHeight - 1;
    
    for (i=0; i < arr.length; i++) {
      arr[i].style.setProperty('font-size', `${plantsNameFontsize}px`);
      arr[i].style.setProperty('line-height', `${plantsNameLineHeight}px`);
      offsetHeights.splice(i, 1, arr[i].offsetHeight);
    };

    console.log(`New Name font: ${plantsNameFontsize}`);
    console.log(`New Name LH: ${plantsNameLineHeight}`);
    console.log(`New Description font: ${plantsDescriptionFontsize}`);
  };
    console.log(`New array is ${offsetHeights}`);
  };


plantsNameResize(allPlantsNames);




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