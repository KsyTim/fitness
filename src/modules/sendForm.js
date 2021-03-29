import calculator from './mainCalculator.js';
// отправка формы при клике на "оставить заявку"
const sendForm = () => {
	// сообщения для отображения на странице при обработке запроса
	const errorMessage = 'Что-то пошло не так... Пожалуйста, заполните форму снова или свяжитесь с нами по номеру телефона, указанному в разделе "Контакты"',
		successMessage = 'Спасибо! Мы скоро свяжемся с Вами!';

	// создание элемента с информацией - статус обработки запроса
	const statusMessage = document.createElement('div');
	statusMessage.classList.add('status-message');
	statusMessage.style.cssText = 'font-size: 1.5rem; color: #ffd11a;';
	// событие отправки формы
	document.body.addEventListener('submit', event => {
		event.preventDefault();
		if (event.target.tagName.toLowerCase() === 'form') {
			event.target.appendChild(statusMessage);
			// анимация во время ожидания при запросе на сервер
			const animationLoading = `
      <div class="sk-wave">
        <div class="sk-rect sk-rect-1"></div>
        <div class="sk-rect sk-rect-2"></div>
        <div class="sk-rect sk-rect-3"></div>
        <div class="sk-rect sk-rect-4"></div>
        <div class="sk-rect sk-rect-5"></div>
      </div>
      `;
			statusMessage.insertAdjacentHTML('beforeend', animationLoading);
			const formData = new FormData(event.target);
			const body = {};
			formData.forEach((val, key) => {
				body[key] = val;
			});
			// функция-отправка POST-запроса с помощью fetch
			const postData = body => fetch('./server.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: JSON.stringify(body)
			});
			// закрытие модального окна при получении положительного статуса после отправки запроса на сервер
			const closePopup = () => {
				const timeout = setTimeout(closePopup, 2000),
					status = document.querySelector('.status-message'),
					statusParent = status.closest('form').parentElement.parentElement.parentElement;
				if (statusMessage.textContent === '' && statusParent.className === 'popup') {
					statusParent.style.display = 'none';
				}
				if (statusParent.style.display === 'none') {
					clearTimeout(timeout);
				}
			};
			// удаление положительного статуса после отправки запроса на сервер
			const clearOutputData = () => {
				const timeout = setTimeout(clearOutputData, 3000);
				if (statusMessage.textContent) {
					document.querySelectorAll('form').forEach(elem => {
						elem.reset();
					}); 
					statusMessage.textContent = '';
					calculator();
					if (event.target.closest('div') && event.target.closest('div').className === 'form-content') {
						document.querySelectorAll('.form-content form p, .form-content form button').forEach(elem => {
							elem.style.display = 'block';
						});
					}
					if (document.getElementById('price-total')) {
						document.querySelector('input[name="price_amount"]').value = document.getElementById('price-total').textContent; 
					}
					setTimeout(closePopup, 0);
				} else if (statusMessage.textContent === '') {
					clearTimeout(timeout);
				}
			};
			// удаление значений полей формы после отправки запроса на сервер
			const outputData = () => {
        document.querySelectorAll('input[type="checkbox"]').forEach(elem => {
          elem.removeAttribute('checked');
        }); 
        if (event.target.closest('div') && event.target.closest('div').className === 'form-content') {
          statusMessage.textContent = successMessage;
          document.querySelectorAll('.form-content form p, .form-content form button').forEach(elem => {
            elem.style.display = 'none';
          });
          event.target.querySelectorAll('input').forEach(item => {
            item.value = '';
          });
          setTimeout(clearOutputData, 3000);
        } else {
          statusMessage.textContent = successMessage;          
          setTimeout(clearOutputData, 3000);
        }
			};
			// обработка данных при POST-запросе
			postData(body)
				.then(response => {
					if (response.status !== 200) {
						throw new Error('status network is not 200');
					}
					outputData();
				})
				.catch(error => {
					statusMessage.textContent = errorMessage;
          document.querySelectorAll('.form-content form p, .form-content form button').forEach(elem => {
            elem.style.display = 'none';
          });
          event.target.querySelectorAll('input').forEach(item => {
            item.value = '';
          });
          document.querySelectorAll('input[type="checkbox"]').forEach(elem => {
            elem.removeAttribute('checked');
          }); 
          setTimeout(clearOutputData, 3000);
					console.error(error);
				});
		}
	});
};

// экспорт данных
export default sendForm;