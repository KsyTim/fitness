// модальное окно "перезвоните мне"
const callbackForm = () => {
  // элементы со страницы
  const callbackModal = document.getElementById('callback_form');
  // при клике на кнопку "перезвоните мне" открыть модальное окно
  document.addEventListener('click', event => {
    const target = event.target;
    // открыть модальное окно
    if (target.matches('[data-popup="#callback_form"]')) {
      callbackModal.style.display = 'block';
      // при клике на "закрыть" - скрываем модальное окно
    } else if (target.matches('.close_icon') && target.closest('.popup').getAttribute('id') === 'callback_form'){
      callbackModal.style.display = 'none';
      // при клике по подложке - скрываем модальное окно
    } else if (target.matches('.overlay') && target.closest('.popup').getAttribute('id') === 'callback_form') {
      callbackModal.style.display = 'none';
    }
  });
};

export default callbackForm;