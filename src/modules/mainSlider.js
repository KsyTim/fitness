// слайдер в секции header
const mainSlider = () => {
	// элементы со страницы
	const slider = document.querySelector('.main-slider');
	let slide = document.querySelectorAll('.main-slider .slide');
	// добавляем точки для управления слайдами в зависимости от количества слайдов на странице
  const dots = document.createElement('ul');
  dots.classList.add('slider-dots');
  slider.appendChild(dots);
	for (let i = 0; i < slide.length; i++) {
		dots.insertAdjacentHTML('beforeend', '<li><button></button></li>');
    // присваиваем активный класс первой точке 
		const firstDot = document.querySelectorAll('.main-slider .slider-dots li');
		firstDot[0].classList.add('slick-active');
    const dotBtn = document.querySelectorAll('.main-slider .slider-dots li button');
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
		slide = document.querySelectorAll('.main-slider .slide');
		const dot =  document.querySelectorAll('.main-slider .slider-dots li'),
      dotBtn = document.querySelectorAll('.main-slider .slider-dots li button');
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
    slide = document.querySelectorAll('.main-slider .slide');
    const dot =  document.querySelectorAll('.main-slider .slider-dots li'),
      dotBtn = document.querySelectorAll('.main-slider .slider-dots li button'),
      target = event.target;
		if (target.matches('.main-slider .slider-dots li button')) {
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
		}
	});
	// при наведении мыши на элементы управления слайдами останавливать слайд-шоу
	slider.addEventListener('mouseover', event => {
		if (event.target.matches('.main-slider .slider-dots li button')) {
			stopSlide();
		}
	});
	// воспроизводить обратно слайд-шоу, когда мышь убрана с элементов управления слайдами
	slider.addEventListener('mouseout', event => {
		if (event.target.matches('.main-slider .slider-dots li button')) {
			startSlide();
		}
	});
	startSlide(2000);
};

// экспорт данных
export default mainSlider;