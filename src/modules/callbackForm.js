// модальное окно "перезвоните мне"
const callbackForm = () => {
  // элементы со страницы
  const callbackModal = document.getElementById('callback_form');
  // при клике на кнопку "перезвоните мне" открыть модальное окно
  document.addEventListener('click', event => {
    const target = event.target;
    // открыть модальное окно
    if (target.matches('#footer .callback-btn')) {
      callbackModal.style.display = 'none';
      if (!document.querySelector('.choose-club [checked="checked"]')) {
        event.preventDefault();
        const mes = document.getElementById('privacy');
        mes.style.display = 'block';
        mes.querySelector('p').textContent = 'Пожалуйста выберите клуб, поставив рядом галочку';
        mes.addEventListener('click', event => {
          const target = event.target;
          if (target.matches('.close_icon') && target.closest('.popup').getAttribute('id') === 'privacy'){
            mes.style.display = 'none';
            mes.querySelector('p').textContent = 'Для продолжения Вы должны дать согласие на обработку персональных данных';
            return false;
            // при клике по подложке - скрываем модальное окно
          } else if (target.matches('.overlay') && target.closest('.popup').getAttribute('id') === 'privacy') {
            mes.style.display = 'none';
            mes.querySelector('p').textContent = 'Для продолжения Вы должны дать согласие на обработку персональных данных';
            return false;
          } else if (target.matches('#privacy .close-btn') && target.closest('.popup').getAttribute('id') === 'privacy') {
            mes.style.display = 'none';
            mes.querySelector('p').textContent = 'Для продолжения Вы должны дать согласие на обработку персональных данных';
            return false;
          }
        })
      } else {
        document.querySelectorAll('.choose-club [type="radio"]').forEach(elem => {
          elem.removeAttribute('checked');
        });
        return true;
      }
    } else if (target.matches('[data-popup="#callback_form"]')) {
      callbackModal.style.display = 'block';
      // при клике на "закрыть" - скрываем модальное окно
    } else if (target.matches('.close_icon') && target.closest('.popup').getAttribute('id') === 'callback_form'){
      callbackModal.style.display = 'none';
      // при клике по подложке - скрываем модальное окно
    } else if (target.matches('.overlay') && target.closest('.popup').getAttribute('id') === 'callback_form') {
      callbackModal.style.display = 'none';
    }
    document.querySelectorAll('#footer_form input[type="radio"]').forEach(elem => {
      if (target.id === elem.id) {
        elem.setAttribute('checked', 'checked');
        if (elem.checked) {
          elem.setAttribute('checked', 'checked');
        } 
      } else if (!elem.checked){
        elem.removeAttribute('checked');
      }
    });
  });
};

export default callbackForm;

