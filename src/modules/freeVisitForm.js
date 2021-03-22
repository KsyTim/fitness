// модальное окно "бесплатный визит"
const freeVisitForm = () => {
  // элементы со страницы
  const freeVisitModal = document.getElementById('free_visit_form');
  // при клике на фразу "бесплатный визит" открыть модальное окно
  document.addEventListener('click', event => {
    const target = event.target;
    // открыть модальное окно
    if (target.matches('[data-popup="#free_visit_form"]')) {
      freeVisitModal.style.display = 'block';
      // при клике на "закрыть" - скрываем модальное окно
    } else if (target.matches('.close_icon') && target.closest('.popup').getAttribute('id') === 'free_visit_form'){
      freeVisitModal.style.display = 'none';
      // при клике по подложке - скрываем модальное окно
    } else if (target.matches('.overlay') && target.closest('.popup').getAttribute('id') === 'free_visit_form') {
      freeVisitModal.style.display = 'none';
    }
  });
};

export default freeVisitForm;