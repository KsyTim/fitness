// стрелка вверх
const arrowTop = () => {
  // элементы со страницы
  const result = document.querySelector('.header-main'),
    toTopArrow = document.getElementById('totop');
  window.addEventListener('scroll', () => {
    // если высота до элемента меньше 0 (то есть мы проскролили ниже элемента), то появляется стрелка вверх
    if (result.getBoundingClientRect().top < 0) {
      toTopArrow.style.display = 'block';
    } 
    // если высота до элемента больше 0 (то есть мы доскролили до элемента или выше него), то стрелка вверх пропадает
    if (result.getBoundingClientRect().top >= 0) {
      toTopArrow.style.display = 'none';
    }
  });
  // плавный скролл наверх
  document.addEventListener('click', event => {
    const target = event.target,
      targetToTop = target.closest('[href="#top-arrow"');
      // при клике по стрелке вверх - скроллим плавно вверх
    if (targetToTop !== null) {
					event.preventDefault();
					// значение ссылки (href) по кликнутому элементу
					const id = document.querySelector('[href="#top-arrow"').getAttribute('href').substr(1),
						// элемент с id
						scrollTo = document.getElementById(id),
						// значение до ссылки элемента, по которому происходит клик
						elemPosition = scrollTo.getBoundingClientRect().top;
					// плавная прокуратка на необходимое количество px до элемента
					window.scrollBy({
						top: elemPosition,
						behavior: 'smooth'
					});
				}
  });
};

export default arrowTop;