'use strict'

// импорт данных
import chooseMenu from './modules/chooseMenu';
import gift from './modules/gift';
import freeVisitForm from './modules/freeVisitForm';
import callbackForm from './modules/callbackForm';

// выпадающее меню "выбрать клуб"
chooseMenu();
// подарок с промокодом 
gift();
// модальное окно "бесплатный визит"
freeVisitForm();
// модальное окно "перезвоните мне"
callbackForm();