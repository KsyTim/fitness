const servicesSlider = () => {
  const servicesSlider = document.querySelector('.services-slider'),
    track = servicesSlider.querySelector('.slider-track'),
    servicesSlide = track.querySelectorAll('.services-slider .slide'),
    slide = track.querySelector('.slide'),
    slideCount = servicesSlide.length;
  let slidesToShow,
    position = 0,
    itemWidth,
    slideMarginLeft,
    slideMarginRight;  
  servicesSlider.style.position = 'relative';
  const leftArrow = document.createElement('button');
  leftArrow.classList.add('slider-arrow');
  leftArrow.classList.add('prev');
  const bgcLeft = document.createElement('span');
  servicesSlider.appendChild(leftArrow);
  bgcLeft.classList.add('services-left');
  leftArrow.appendChild(bgcLeft);
  bgcLeft.insertAdjacentHTML('beforeend', '<img class="services-left-img" src="images/arrow-left.png" alt="Slider: prev"/>');
  const rightArrow = document.createElement('button');
  rightArrow.classList.add('slider-arrow');
  rightArrow.classList.add('next');
  const bgcRight = document.createElement('span');
  servicesSlider.appendChild(rightArrow);
  bgcRight.classList.add('services-right');
  rightArrow.appendChild(bgcRight);
  bgcRight.insertAdjacentHTML('beforeend', '<img class="services-right-img" src="images/arrow-right.png" alt="Slider: next"/>');
  track.style.display = 'flex';
  track.style.width = '100%';
  track.style.overflow = 'hidden';
  const handler = (slides, slidesLeft) => {
    const checkBtns = (slidesToShow) => {
      const btnPrev = document.querySelector('.slider-arrow.prev'),
        btnNext = document.querySelector('.slider-arrow.next');
      btnPrev.disabled = position === 0;
      btnNext.disabled = position === slidesToShow;
    };
    checkBtns(slides);
    servicesSlider.addEventListener('click', event => {
      const target = event.target,
        slideWidth = slide.clientWidth + slideMarginLeft + slideMarginRight;
      if (target.matches('.services-right, .services-right img')) {
        position++;
        for(let i of servicesSlide) {
          for (let j = 0; j <= ((slideCount/2) + slidesLeft); j++) {
            if (position == j) {
              i.style.transform = `translateX(-${j * slideWidth}px)`;
              checkBtns(slides);
            }
          }
        }
      } else if (target.matches('.services-left, .services-left img')) {
        position--;
        for(let i of servicesSlide) {
          for (let j = 0; j <= ((slideCount/2) + slidesLeft); j++) {
            if (position == j) {
              i.style.transform = `translateX(-${j * slideWidth}px)`;
              checkBtns(slides);
            }
          }
        }
      }
    });
  }; 
  const width280 = () => {
    console.log('ifffff280');
    slidesToShow = 1;
    itemWidth = track.clientWidth / slidesToShow;
    slideMarginLeft = parseInt(getComputedStyle(slide, true).marginLeft);
    slideMarginRight = parseInt(getComputedStyle(slide, true).marginRight); 
    servicesSlide.forEach(item => {
      item.style.minWidth = `${itemWidth - (slideMarginLeft + slideMarginRight)}px`;
    });
    handler(slidesToShow+8, 4);
  },
    width567 = () => {
      console.log('ifffff567');
      slidesToShow = 2;
      itemWidth = track.clientWidth / slidesToShow;
      slideMarginLeft = parseInt(getComputedStyle(slide, true).marginLeft);
      slideMarginRight = parseInt(getComputedStyle(slide, true).marginRight); 
      servicesSlide.forEach(item => {
        item.style.minWidth = `${itemWidth - (slideMarginLeft + slideMarginRight)}px`;
      });
      handler(slidesToShow+6, 3);
    }, 
    width768 = () => {
      console.log('iffff768');
      slidesToShow = 3;
      itemWidth = track.clientWidth / slidesToShow;
      slideMarginLeft = parseInt(getComputedStyle(slide, true).marginLeft);
      slideMarginRight = parseInt(getComputedStyle(slide, true).marginRight); 
      servicesSlide.forEach(item => {
        item.style.minWidth = `${itemWidth - (slideMarginLeft + slideMarginRight)}px`;
      });
      handler(slidesToShow+4, 2);
    },
    width992 = () => {      
      console.log('iffff992');
      slidesToShow = 4;
      itemWidth = track.clientWidth / slidesToShow;
      slideMarginLeft = parseInt(getComputedStyle(slide, true).marginLeft);
      slideMarginRight = parseInt(getComputedStyle(slide, true).marginRight); 
      servicesSlide.forEach(item => {
        item.style.minWidth = `${itemWidth - (slideMarginLeft + slideMarginRight)}px`;
      });
      handler(slidesToShow+2, 1);
    },
    width1200 = () => {
      console.log('ifffff12000');
      slidesToShow = 5;
      itemWidth = track.clientWidth / slidesToShow;
      slideMarginLeft = parseInt(getComputedStyle(slide, true).marginLeft);
      slideMarginRight = parseInt(getComputedStyle(slide, true).marginRight); 
      servicesSlide.forEach(item => {
        item.style.minWidth = `${itemWidth - (slideMarginLeft + slideMarginRight)}px`;
      });
      handler(slidesToShow+0, 0);
    };
  const mainFunc = () => {
    console.log('mainFunc');
    if (document.documentElement.clientWidth >= 1200) {
      width1200();
    }
    if (document.documentElement.clientWidth < 1200 && document.documentElement.clientWidth >= 992) {
      width992();
    }
    if (document.documentElement.clientWidth < 992 && document.documentElement.clientWidth >= 768) {
      width768();
    }
    if (document.documentElement.clientWidth < 768 && document.documentElement.clientWidth >= 567) {
      width567();
    }
    if (document.documentElement.clientWidth < 567 && document.documentElement.clientWidth >= 280) {
      width280();
    }
  };
  mainFunc();
  window.addEventListener('resize', () => {
    console.log('resize');
    const servicesSlideNew = track.querySelectorAll('.services-slider .slide');
    servicesSlideNew.forEach(item => {
      item.style.transform = 'translateX(0px)';
    });
    mainFunc();
  });
};

export default servicesSlider;