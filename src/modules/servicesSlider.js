class ServicesSlider {
  constructor({
    main,
    wrap,
    slide,
    next,
    prev,
    infinity = false,
    position = 0, 
    slidesToShow = 5, 
    responsive = []
    }) {
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.slide = document.querySelector(slide);
    this.slideMarginLeft = parseInt(getComputedStyle(this.slide, true).marginLeft);
    this.slideMarginRight = parseInt(getComputedStyle(this.slide, true).marginRight);
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.slidesToShow = slidesToShow;
    this.options = {
      position, 
      infinity,
      slidesWidth: Math.floor((this.main.clientWidth / this.slidesToShow) - (this.slideMarginLeft + this.slideMarginRight))
    };
    this.responsive = responsive;
  }
  addClass() {
    this.main.classList.add('add-services');
    this.wrap.classList.add('add-services__wrap');
    for (const item of this.slides) {
      item.classList.add('add-services__item');
    }
  }

  addStyle() {
    let style = document.getElementById('add-services-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'add-services-style';
    }
    style.textContent = `
      .add-services{
        overflow: hidden !important;
        position: relative;
      }
      .add-services__wrap{
        display: flex !important;
        transition: transform .3s;
        will-change: transform;
      }
      .add-services__item{
        min-width: ${this.options.slidesWidth}px !important;
      }
    `;
    document.head.appendChild(style);
  }

  prevSlider() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;
      if (this.options.position < 0) {
        this.options.position = this.slides.length - this.slidesToShow;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * (this.options.slidesWidth + (this.slideMarginLeft + this.slideMarginRight))}px)`;
    }
  }

  nextSlider() {
    if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
      ++this.options.position;
      if (this.options.position > this.slides.length - this.slidesToShow) {
        this.options.position = 0;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * (this.options.slidesWidth + (this.slideMarginLeft + this.slideMarginRight))}px)`;
    }
  }

  controlSlider() {
    this.prev.addEventListener('click', this.prevSlider.bind(this));
    this.next.addEventListener('click', this.nextSlider.bind(this));
  }

  addArrow() {
    this.prev = document.createElement('button');
    this.prev.classList.add('slider-arrow');
    this.prev.classList.add('prev');
    this.bgcLeft = document.createElement('span');
    this.main.appendChild(this.prev);
    this.bgcLeft.classList.add('services-left');
    this.prev.appendChild(this.bgcLeft);
    this.bgcLeft.insertAdjacentHTML('beforeend', '<img class="services-left-img" src="images/arrow-left.png" alt="Slider: prev"/>');
    this.next = document.createElement('button');
    this.next.classList.add('slider-arrow');
    this.next.classList.add('next');
    this.bgcRight = document.createElement('span');
    this.main.appendChild(this.next);
    this.bgcRight.classList.add('services-right');
    this.next.appendChild(this.bgcRight);
    this.bgcRight.insertAdjacentHTML('beforeend', '<img class="services-right-img" src="images/arrow-right.png" alt="Slider: next"/>');
  }

  responsiveInit() {
    const slidesToShowDefault = this.slidesToShow,
      allResponse = this.responsive.map(item => item.breakpoint), 
      maxResponse = Math.max(...allResponse),
      checkResponse = () => {
        if (document.documentElement.clientWidth < maxResponse) {
          for (let i = 0; i < allResponse.length; i++) {
            if (document.documentElement.clientWidth < allResponse[i]) {
              this.slidesToShow = this.responsive[i].slideToShow;
              this.options.slidesWidth = Math.floor((this.main.clientWidth / this.slidesToShow) - (this.slideMarginLeft + this.slideMarginRight));
              this.addStyle();
            }
          }
        } else {
          this.slidesToShow = slidesToShowDefault;
          this.options.slidesWidth = Math.floor((this.main.clientWidth / this.slidesToShow) - (this.slideMarginLeft + this.slideMarginRight));
          this.addStyle();
        }
      };
    checkResponse();
    window.addEventListener('resize', checkResponse);
  }

  init() {
    this.addClass();
    this.addStyle();
    if (this.prev && this.next) {
      this.controlSlider();
    } else {
      this.addArrow();
      this.controlSlider();
    }
    if (this.responsive) {
      this.responsiveInit();
    }
  }
};

const services = () => {
  const slider = new ServicesSlider({
    main: '.services-slider',
    wrap: '.slider-track',
    slide: '.services-slider .slide',
    slidesToShow: 5, 
    infinity: false,
    responsive: [
      {
        breakpoint: 1200,
        slideToShow: 4,
      },
      {
        breakpoint: 992,
        slideToShow: 3,
      },
      {
        breakpoint: 768,
        slideToShow: 2,
      },
      {
        breakpoint: 576,
        slideToShow: 1,
      }
    ]
  });
  slider.init();
};

export default services;

