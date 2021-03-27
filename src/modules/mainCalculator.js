const calculator = () => {
  const priceTotal = document.getElementById('price-total'),
    clubName = document.querySelector('[name="club-name"]'),
    cardsType = document.querySelector('[name="card-type"]'),
    form = document.getElementById('card_order'),
    promo = document.querySelector('[placeholder="Промокод"]');
  if (priceTotal) {
    const getData = (clubPage, cardType) => {
      fetch(`./${clubPage}.html`)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser(),
              doc = parser.parseFromString(html, "text/html"),
              docForm = doc.getElementById('card_order'),
              cost = docForm.querySelectorAll('label .cost'),
              obj = [];
            cost.forEach((item, i ) => {
              if(item.closest('label').getAttribute('for') !== 't4') {
                obj[i] = +item.textContent.replace(/[a-z]/g, '');
              }
            });
            const newObj = obj.filter(elem => elem);
            if (promo.value === 'ТЕЛО2019') {
              priceTotal.textContent = Math.ceil(+priceTotal.textContent * 0.7);
            } else {
              if (+cardType.value === 1) {
                priceTotal.textContent = newObj[0];
              }
              if (+cardType.value === 6) {
                priceTotal.textContent = newObj[1];
              }
              if (+cardType.value === 9) {
                priceTotal.textContent = newObj[2];
              }
              if (+cardType.value === 12) {
                priceTotal.textContent = newObj[3];
              }
            }
        })
    };
    let clubPage = clubName.value,
      cardType = cardsType;
    getData(clubPage, cardType);  
    form.addEventListener('change', event => {
      const target = event.target;
      if (target.matches('[name="club-name"]')){
        clubPage = target.value;
        getData(clubPage, cardType);
      }
      if (target.matches('[name="card-type"]')) {
        cardType = target;
        getData(clubPage, cardType);
      }
      if (target.matches('[placeholder="Промокод"]')) {
        getData(clubPage, cardType);
      }
    })
  }
};  

      

export default calculator;