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
              obj = [];
              if (docForm) {
                const cost = docForm.querySelectorAll('label .cost');
                cost.forEach((item, i ) => {
                  if(item.closest('label').getAttribute('for') !== 't4') {
                    obj[i] = +item.textContent.replace(/[a-z]/g, '');
                  }
                });
              }
            const newObj = obj.filter(elem => elem),
              getPriceValue = () => {
                const value = document.getElementById('price-total').textContent,
                  input = document.querySelector('.personal-data input[type="hidden"]');
                if (input) {
                  input.removeAttribute('value');
                  input.setAttribute('value', `${value}`);
                } 
              },
              getPromoSum = () => {
                if (promo.value === 'ТЕЛО2019') {
                  priceTotal.textContent = Math.ceil(+priceTotal.textContent * 0.7);
                  getPriceValue();
                }
              };
            if (promo.value === 'ТЕЛО2019') {
              if (+cardType.value === 1) {
                priceTotal.textContent = Math.ceil(+newObj[0] * 0.7);
                getPriceValue();
              } else if (+cardType.value === 6) {
                priceTotal.textContent = Math.ceil(+newObj[1] * 0.7);
                getPriceValue();
              } else if (+cardType.value === 9) {
                priceTotal.textContent = Math.ceil(+newObj[2] * 0.7);
                getPriceValue();
              } else if (+cardType.value === 12) {
                priceTotal.textContent = Math.ceil(+newObj[3] * 0.7);
                getPriceValue();
              }
            } else {
             if (+cardType.value === 1) {
                getPromoSum();
                priceTotal.textContent = newObj[0];
                getPriceValue();
              }
              if (+cardType.value === 6) {
                getPromoSum();               
                priceTotal.textContent = newObj[1];
                getPriceValue(); 
              }
              if (+cardType.value === 9) {
                getPromoSum();
                priceTotal.textContent = newObj[2];
                getPriceValue();
              }
              if (+cardType.value === 12) {
                getPromoSum();
                priceTotal.textContent = newObj[3];
                getPriceValue(); 
              } 
            }
        });
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