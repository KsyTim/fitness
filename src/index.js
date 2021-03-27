'use strict'

// импорт данных
import chooseMenu from './modules/chooseMenu';
import gift from './modules/gift';
import freeVisitForm from './modules/freeVisitForm';
import callbackForm from './modules/callbackForm';
import menuFixed from './modules/menu';
import mainSlider from './modules/mainSlider';
import arrowTop from './modules/arrowTop';
import services from './modules/servicesSlider';
import gallery from './modules/gallery';
import calculator from './modules/mainCalculator';
import validator from './modules/validator';

// выпадающее меню "выбрать клуб"
chooseMenu();
// подарок с промокодом 
gift();
// модальное окно "бесплатный визит"
freeVisitForm();
// модальное окно "перезвоните мне"
callbackForm();
// мобильное меню
menuFixed();
// слайдер в секции header
mainSlider();
// стрелка вверх
arrowTop();
// слайдер "услуги"
services();
// слайдер-фотогалерея
gallery();
// калькулятор клубные карты
calculator();
// валидатор полей форм на странице
validator();