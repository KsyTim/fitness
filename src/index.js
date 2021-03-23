'use strict'

// импорт данных
import chooseMenu from './modules/chooseMenu';
import gift from './modules/gift';
import freeVisitForm from './modules/freeVisitForm';
import callbackForm from './modules/callbackForm';
import menuFixed from './modules/menu';
import mainSlider from './modules/mainSlider';
import arrowTop from './modules/arrowTop';

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