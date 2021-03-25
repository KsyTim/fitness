// слайдер-фотогалерея
const gallery = () => {
	// элементы со страницы
	const slider = document.querySelector('.gallery-slider');
	let slide = document.querySelectorAll('.gallery-slider .slide');
  // скрываем все слайды кроме первого
  for(let i = 1; i < slide.length; i++) {
    slide[i].style.display = 'none';
  }
  // добавляем точки для управления слайдами в зависимости от количества слайдов на странице
  const leftArrow = document.createElement('button');
  leftArrow.classList.add('slider-arrow');
  leftArrow.classList.add('prev');
  const bgcLeft = document.createElement('span');
  slider.appendChild(leftArrow);
  bgcLeft.classList.add('gallery-left');
  leftArrow.appendChild(bgcLeft);
  bgcLeft.insertAdjacentHTML('beforeend', '<img class="gallery-left-img" src="images/arrow-left.png" alt="Slider: prev"/>');
  const rightArrow = document.createElement('button');
  rightArrow.classList.add('slider-arrow');
  rightArrow.classList.add('next');
  const bgcRight = document.createElement('span');
  slider.appendChild(rightArrow);
  bgcRight.classList.add('gallery-right');
  rightArrow.appendChild(bgcRight);
  bgcRight.insertAdjacentHTML('beforeend', '<img class="gallery-right-img" src="images/arrow-right.png" alt="Slider: next"/>');
  const dots = document.createElement('ul');
  dots.classList.add('slider-dots');
  slider.appendChild(dots);
	for (let i = 0; i < slide.length; i++) {
		dots.insertAdjacentHTML('beforeend', '<li><button></button></li>');
    // присваиваем активный класс первой точке 
		const firstDot = document.querySelectorAll('.gallery-slider .slider-dots li');
		firstDot[0].classList.add('slick-active');
    const dotBtn = document.querySelectorAll('.gallery-slider .slider-dots li button');
    dotBtn[0].classList.add('dot-btn');
	}

	let currentSlide = 0,
		interval;
	// к предыдущему слайду
	const prevSlide = (elem, index) => {
		elem[index].style.display = 'none';
	};
	// к следующему слайду
	const nextSlide = (elem, index) => {
		elem[index].style.display = 'block';
	};
  // к предыдущему слайду
	const prevDot = (elem, index, className) => {
		elem[index].classList.remove(className);
	};
	// к следующему слайду
	const nextDot = (elem, index, className) => {
		elem[index].classList.add(className);
	};
	// авто слайд-шоу
	const autoPlaySlide = () => {
		slide = document.querySelectorAll('.gallery-slider .slide');
		const dot =  document.querySelectorAll('.gallery-slider .slider-dots li'),
      dotBtn = document.querySelectorAll('.gallery-slider .slider-dots li button');
		prevSlide(slide, currentSlide);
		prevDot(dot, currentSlide, 'slick-active');
    prevDot(dotBtn, currentSlide, 'dot-btn');
		currentSlide++;
		if (currentSlide >= slide.length) {
			currentSlide = 0;
		}
		nextSlide(slide, currentSlide);
		nextDot(dot, currentSlide, 'slick-active');
    nextDot(dotBtn, currentSlide, 'dot-btn');
	};
	// воспроизвести слайд-шоу
	const startSlide = (time = 2000) => {
		interval = setInterval(autoPlaySlide, time);
	};
	// остановить слайд-шоу
	const stopSlide = () => {
		clearInterval(interval);
	};
	// клики по "точкам" (для активных слайдов добавляем класс активной) для управления сладами на странице
	slider.addEventListener('click', event => {
		event.preventDefault();
    slide = document.querySelectorAll('.gallery-slider .slide');
    const dot =  document.querySelectorAll('.gallery-slider .slider-dots li'),
      dotBtn = document.querySelectorAll('.gallery-slider .slider-dots li button'),
      target = event.target;
		if (target.matches('.gallery-slider .slider-dots li button')) {
      dotBtn.forEach((elem, index) => {
        if(elem === target) {
          prevSlide(slide, currentSlide);
          prevDot(dot, currentSlide, 'slick-active');
          prevDot(dotBtn, currentSlide, 'dot-btn');
          currentSlide = index;
          nextSlide(slide, currentSlide);
          nextDot(dot, currentSlide, 'slick-active');
          nextDot(dotBtn, currentSlide, 'dot-btn');
        }
      });
		} else if (target.matches('.gallery-left, .gallery-left img')) {
      prevSlide(slide, currentSlide);
      prevDot(dot, currentSlide, 'slick-active');
      prevDot(dotBtn, currentSlide, 'dot-btn');
      currentSlide--;
      //  условие, если дошли до последнего слайда (при перелистывании вправо), то вернуться к первому
      if (currentSlide >= document.querySelectorAll('.gallery-slider .slide').length) {
        currentSlide = 0;
        // иначе (при перелистывании влево), вернуться к крайнему
      } else if (currentSlide < 0) {
        currentSlide = document.querySelectorAll('.gallery-slider .slide').length - 1;
      } 
      nextSlide(slide, currentSlide);
      nextDot(dot, currentSlide, 'slick-active');
      nextDot(dotBtn, currentSlide, 'dot-btn');
    } else if (target.matches('.gallery-right, .gallery-right img')) {
      prevSlide(slide, currentSlide);
      prevDot(dot, currentSlide, 'slick-active');
      prevDot(dotBtn, currentSlide, 'dot-btn');
      currentSlide++;
      //  условие, если дошли до последнего слайда (при перелистывании вправо), то вернуться к первому
      if (currentSlide >= document.querySelectorAll('.gallery-slider .slide').length) {
        currentSlide = 0;
        // иначе (при перелистывании влево), вернуться к крайнему
      } else if (currentSlide < 0) {
        currentSlide = document.querySelectorAll('.gallery-slider .slide').length - 1;
      } 
      nextSlide(slide, currentSlide);
      nextDot(dot, currentSlide, 'slick-active');
      nextDot(dotBtn, currentSlide, 'dot-btn');
    }

	});
	// при наведении мыши на элементы управления слайдами останавливать слайд-шоу
	slider.addEventListener('mouseover', event => {
		if (event.target.matches('.gallery-slider .slider-dots li button') || event.target.matches('.gallery-right, .gallery-right img') || event.target.matches('.gallery-left, .gallery-left img')) {
			stopSlide();
		}
	});
	// воспроизводить обратно слайд-шоу, когда мышь убрана с элементов управления слайдами
	slider.addEventListener('mouseout', event => {
		if (event.target.matches('.gallery-slider .slider-dots li button') || event.target.matches('.gallery-right, .gallery-right img') || event.target.matches('.gallery-left, .gallery-left img')) {
			startSlide();
		}
	});
	startSlide(2000);
};

export default gallery;