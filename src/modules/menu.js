// мобильное меню
const menuFixed = () => {
  // элементы со страницы
  const menu = document.querySelector('.top-menu'),
    mainSlider = document.querySelector('.head-slider'),
    mobileMenu = document.querySelector('.popup-menu'), 
    gift = document.querySelector('.fixed-gift');
  // фиксация меню при прокрутке до элемента
  const scrollMenu = () => {
    // если ширина экрана менее 768px, фиксируем меню 
    if (document.documentElement.offsetWidth <= 766) {
      // если высота до элемента меньше либо равна 0 (то есть мы проскролили до элемента и ниже него), то фиксирум меню
      if (menu.getBoundingClientRect().top <= 0) {
        menu.style.cssText = `
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
        `;
        if (gift) {
          gift.style.top = '70px';
        }
      } 
      // если высота до элемента больше 0 (то есть мы еще недоскролили до элемента или при скролле наверх страницы), то возвращаем меню в первоначальное положение
      if (mainSlider.getBoundingClientRect().top > 0) {
        menu.style.position = 'unset';
        if (gift) {
          gift.style.top = '15px';
        }
      }
    } else {
      menu.style.position = 'unset';
      if (gift) {
        gift.style.top = '15px';
      }
    }
  };
  window.addEventListener('scroll', scrollMenu);
  window.addEventListener('resize', scrollMenu);
  document.addEventListener('click', event => {
    const target = event.target;
    // при клике на "меню" - открыть мобильное меню
    if (target.matches('.menu-button img')) {
      mobileMenu.style.display = 'flex';
      // при клике на "закрыть" - закрыть мобильное меню
    } else if (target.matches('.close-menu-btn img')) {
      mobileMenu.style.display = 'none';
      // при клике на элемент меню - закрыть мобильное меню и плавный скролл до элемента на странице
    } else if (target.matches('.popup-menu ul li a')) {
      event.preventDefault();
      mobileMenu.style.display = 'none';
      // значение ссылки (href) по кликнутому элементу
      const id = target.getAttribute('href').substr(1),
        // элемент с id
        scrollTo = document.getElementById(id),
        // значение до верхней границы элемента, по которому происходит клик
        elemPosition = scrollTo.getBoundingClientRect().top;
      // плавная прокуратка на необходимое количество px до элемента
      window.scrollBy({
        top: elemPosition,
        behavior: 'smooth'
      });
    }
  });
};

// экспорт данных
export default menuFixed;