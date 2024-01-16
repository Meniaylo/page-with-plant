const plantsName = document.querySelector('.plants__name');
const allPlantsNames = document.querySelectorAll('.plants__name');
const plantsDescriptionFontsize = parseFloat(window.getComputedStyle(document.querySelector('.plants__description'), null).getPropertyValue('font-size'));
const maxPlantsNameFontsize = '81';
const maxPlantsNameLineHeight = '100';
let plantsNameFontsize = parseFloat(window.getComputedStyle(document.querySelector('.plants__name'), null).getPropertyValue('font-size'));
let plantsNameLineHeight = parseFloat(window.getComputedStyle(document.querySelector('.plants__name'), null).getPropertyValue('line-height'));


// Все нахуй переписать в реакте на хуках иначе что ни пробуй выходит всратая хуйня господи почему я такая тупая дай мне сил

const findOffsetHeights = (arr) => {
  let offsetHeights = [];
  for (i=0; i < arr.length; i++) {
    offsetHeights.push(arr[i].offsetHeight);
  };
  return offsetHeights;
};


const plantsNameResize = (elements, plantsNameFS, plantsNameLH) => {
  let offsetHeights = findOffsetHeights(elements);

  while ((Math.max(...offsetHeights) > plantsNameLH * 2) && (plantsNameFS > plantsDescriptionFontsize + 8)) {
    plantsNameFS -= 1;
    plantsNameLH -= 1;
    
    for (i=0; i < elements.length; i++) {
      elements[i].style.setProperty('font-size', `${plantsNameFS}px`);
      elements[i].style.setProperty('line-height', `${plantsNameLH}px`);
      offsetHeights.splice(i, 1, elements[i].offsetHeight);
    };
  };
  
  return {
    currentOffsetHeights: offsetHeights,
    currentPlantsNameFS: plantsNameFS,
    currentPlantsNameLH: plantsNameLH
  };
};

const { currentOffsetHeights, currentPlantsNameFS, currentPlantsNameLH } = plantsNameResize(allPlantsNames, plantsNameFontsize, plantsNameLineHeight);
console.log(`OH OUTSIDE: ${currentOffsetHeights}`);
console.log(`FS OUTSIDE: ${currentPlantsNameFS}`);
console.log(`LH OUTSIDE: ${currentPlantsNameLH}`);


const handleWindowResize = (currentOffsetHeights, currentPlantsNameFS, currentPlantsNameLH, HTMLelements) => {

  console.log(`OH INSIDE: ${currentOffsetHeights}`);
  console.log(`FS INSIDE: ${currentPlantsNameFS}`);
  console.log(`LH INSIDE: ${currentPlantsNameLH}`);

  if (Math.max(...currentOffsetHeights) <= currentPlantsNameLH * 2) {
    currentPlantsNameFS = maxPlantsNameFontsize;
    currentPlantsNameLH = maxPlantsNameLineHeight;

    for (i=0; i < HTMLelements.length; i++) {
      HTMLelements[i].style.setProperty('font-size', `${currentPlantsNameFS}px`);
      HTMLelements[i].style.setProperty('line-height', `${currentPlantsNameLH}px`);
      currentOffsetHeights.splice(i, 1, HTMLelements[i].offsetHeight);
    };
  };

  plantsNameResize(allPlantsNames, currentPlantsNameFS, currentPlantsNameLH);
};


window.addEventListener('resize', function () {
  handleWindowResize(currentOffsetHeights, currentPlantsNameFS, currentPlantsNameLH, allPlantsNames);
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