// выпадающее меню "выбрать клуб"
const chooseMenu = () => {
  // элементы со страницы - контент выпадающего меню
  const chooseClub = document.querySelector('.clubs-list ul');
  // при клике на элемент открыть/скрыть меню "выбрать клуб"
  document.addEventListener('click',  event => {
    const target = event.target;
    // если элемент открыт
    if (target.matches('.clubs-list p') && chooseClub.hasAttribute('style')) {
      // если родитель элемента по клику блок со списком клубов и он скрыт, то открыть его
      if (target.matches('.clubs-list p') && chooseClub.getAttribute('style') === 'display: none;') {
        chooseClub.style.display = 'block';
        // иначе скрыть
      } else if (target.matches('.clubs-list p') && chooseClub.getAttribute('style') === 'display: block;') {
        chooseClub.style.display = 'none';
      }
      // если элемент скрыт
    } else if (target.matches('.clubs-list p') && !chooseClub.hasAttribute('style')) {
      chooseClub.style.display = 'block';
    } else if (!target.matches('.club-list ul[style="display: block"]')) {
      chooseClub.style.display = 'none';
    }
  });
};

// экспорт данных
export default chooseMenu;