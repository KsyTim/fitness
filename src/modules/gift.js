// подарок с промокодом 
const gift = () => {
  // элементы со страницы
  const gift = document.querySelector('.fixed-gift img'),
    giftModal = document.getElementById('gift');
  // при клике на подарок открыть модальное окно с подарком/сам подарок скрыть
  document.addEventListener('click', event => {
    const target = event.target;
    // открыть моадблное окно/скрыть подарок
    if (target.matches('.fixed-gift img')) {
      gift.style.display = 'none';
      giftModal.style.display = 'block';
      // при клике на "закрыть" - скрываем моадльное окно
    } else if (target.matches('.close_icon') && target.closest('.popup').getAttribute('id') === 'gift'){
      giftModal.style.display = 'none';
      // при клике по подложке - скрываем моадльное окно
    } else if (target.matches('.overlay') && target.closest('.popup').getAttribute('id') === 'gift') {
      giftModal.style.display = 'none';
    } else if (target.matches('#gift .close-btn')) {
      giftModal.style.display = 'none';
    }
  });
};

export default gift;