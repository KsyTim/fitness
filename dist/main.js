/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_chooseMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/chooseMenu */ \"./src/modules/chooseMenu.js\");\n/* harmony import */ var _modules_gift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gift */ \"./src/modules/gift.js\");\n/* harmony import */ var _modules_freeVisitForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/freeVisitForm */ \"./src/modules/freeVisitForm.js\");\n/* harmony import */ var _modules_callbackForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/callbackForm */ \"./src/modules/callbackForm.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_mainSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/mainSlider */ \"./src/modules/mainSlider.js\");\n/* harmony import */ var _modules_arrowTop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/arrowTop */ \"./src/modules/arrowTop.js\");\n // импорт данных\n\n\n\n\n\n\n\n // выпадающее меню \"выбрать клуб\"\n\n(0,_modules_chooseMenu__WEBPACK_IMPORTED_MODULE_0__.default)(); // подарок с промокодом \n\n(0,_modules_gift__WEBPACK_IMPORTED_MODULE_1__.default)(); // модальное окно \"бесплатный визит\"\n\n(0,_modules_freeVisitForm__WEBPACK_IMPORTED_MODULE_2__.default)(); // модальное окно \"перезвоните мне\"\n\n(0,_modules_callbackForm__WEBPACK_IMPORTED_MODULE_3__.default)(); // мобильное меню\n\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_4__.default)(); // слайдер в секции header\n\n(0,_modules_mainSlider__WEBPACK_IMPORTED_MODULE_5__.default)(); // стрелка вверх\n\n(0,_modules_arrowTop__WEBPACK_IMPORTED_MODULE_6__.default)();\n\n//# sourceURL=webpack://js-diploma/./src/index.js?");

/***/ }),

/***/ "./src/modules/arrowTop.js":
/*!*********************************!*\
  !*** ./src/modules/arrowTop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// стрелка вверх\nvar arrowTop = function arrowTop() {\n  // элементы со страницы\n  var result = document.querySelector('.header-main'),\n      toTopArrow = document.getElementById('totop');\n  window.addEventListener('scroll', function () {\n    // если высота до элемента меньше 0 (то есть мы проскролили ниже элемента), то появляется стрелка вверх\n    if (result.getBoundingClientRect().top < 0) {\n      toTopArrow.style.display = 'block';\n    } // если высота до элемента больше 0 (то есть мы доскролили до элемента или выше него), то стрелка вверх пропадает\n\n\n    if (result.getBoundingClientRect().top >= 0) {\n      toTopArrow.style.display = 'none';\n    }\n  }); // плавный скролл наверх\n\n  document.addEventListener('click', function (event) {\n    var target = event.target,\n        targetToTop = target.closest('[href=\"#top-arrow\"'); // при клике по стрелке вверх - скроллим плавно вверх\n\n    if (targetToTop !== null) {\n      event.preventDefault(); // значение ссылки (href) по кликнутому элементу\n\n      var id = document.querySelector('[href=\"#top-arrow\"').getAttribute('href').substr(1),\n          // элемент с id\n      scrollTo = document.getElementById(id),\n          // значение до ссылки элемента, по которому происходит клик\n      elemPosition = scrollTo.getBoundingClientRect().top; // плавная прокуратка на необходимое количество px до элемента\n\n      window.scrollBy({\n        top: elemPosition,\n        behavior: 'smooth'\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrowTop);\n\n//# sourceURL=webpack://js-diploma/./src/modules/arrowTop.js?");

/***/ }),

/***/ "./src/modules/callbackForm.js":
/*!*************************************!*\
  !*** ./src/modules/callbackForm.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// модальное окно \"перезвоните мне\"\nvar callbackForm = function callbackForm() {\n  // элементы со страницы\n  var callbackModal = document.getElementById('callback_form'); // при клике на кнопку \"перезвоните мне\" открыть модальное окно\n\n  document.addEventListener('click', function (event) {\n    var target = event.target; // открыть модальное окно\n\n    if (target.matches('[data-popup=\"#callback_form\"]')) {\n      callbackModal.style.display = 'block'; // при клике на \"закрыть\" - скрываем модальное окно\n    } else if (target.matches('.close_icon') && target.closest('.popup').getAttribute('id') === 'callback_form') {\n      callbackModal.style.display = 'none'; // при клике по подложке - скрываем модальное окно\n    } else if (target.matches('.overlay') && target.closest('.popup').getAttribute('id') === 'callback_form') {\n      callbackModal.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callbackForm);\n\n//# sourceURL=webpack://js-diploma/./src/modules/callbackForm.js?");

/***/ }),

/***/ "./src/modules/chooseMenu.js":
/*!***********************************!*\
  !*** ./src/modules/chooseMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// выпадающее меню \"выбрать клуб\"\nvar chooseMenu = function chooseMenu() {\n  // элементы со страницы - контент выпадающего меню\n  var chooseClub = document.querySelector('.clubs-list ul'); // при клике на элемент открыть/скрыть меню \"выбрать клуб\"\n\n  document.addEventListener('click', function (event) {\n    var target = event.target; // если элемент открыт\n\n    if (target.matches('.clubs-list p') && chooseClub.hasAttribute('style')) {\n      // если родитель элемента по клику блок со списком клубов и он скрыт, то открыть его\n      if (target.matches('.clubs-list p') && chooseClub.getAttribute('style') === 'display: none;') {\n        chooseClub.style.display = 'block'; // иначе скрыть\n      } else if (target.matches('.clubs-list p') && chooseClub.getAttribute('style') === 'display: block;') {\n        chooseClub.style.display = 'none';\n      } // если элемент скрыт\n\n    } else if (target.matches('.clubs-list p') && !chooseClub.hasAttribute('style')) {\n      chooseClub.style.display = 'block';\n    }\n  });\n}; // экспорт данных\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chooseMenu);\n\n//# sourceURL=webpack://js-diploma/./src/modules/chooseMenu.js?");

/***/ }),

/***/ "./src/modules/freeVisitForm.js":
/*!**************************************!*\
  !*** ./src/modules/freeVisitForm.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// модальное окно \"бесплатный визит\"\nvar freeVisitForm = function freeVisitForm() {\n  // элементы со страницы\n  var freeVisitModal = document.getElementById('free_visit_form'); // при клике на фразу \"бесплатный визит\" открыть модальное окно\n\n  document.addEventListener('click', function (event) {\n    var target = event.target; // открыть модальное окно\n\n    if (target.matches('[data-popup=\"#free_visit_form\"]')) {\n      freeVisitModal.style.display = 'block'; // при клике на \"закрыть\" - скрываем модальное окно\n    } else if (target.matches('.close_icon') && target.closest('.popup').getAttribute('id') === 'free_visit_form') {\n      freeVisitModal.style.display = 'none'; // при клике по подложке - скрываем модальное окно\n    } else if (target.matches('.overlay') && target.closest('.popup').getAttribute('id') === 'free_visit_form') {\n      freeVisitModal.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (freeVisitForm);\n\n//# sourceURL=webpack://js-diploma/./src/modules/freeVisitForm.js?");

/***/ }),

/***/ "./src/modules/gift.js":
/*!*****************************!*\
  !*** ./src/modules/gift.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// подарок с промокодом \nvar gift = function gift() {\n  // элементы со страницы\n  var gift = document.querySelector('.fixed-gift img'),\n      giftModal = document.getElementById('gift'); // при клике на подарок открыть модальное окно с подарком/сам подарок скрыть\n\n  document.addEventListener('click', function (event) {\n    var target = event.target; // открыть моадблное окно/скрыть подарок\n\n    if (target.matches('.fixed-gift img')) {\n      gift.style.display = 'none';\n      giftModal.style.display = 'block'; // при клике на \"закрыть\" - скрываем моадльное окно\n    } else if (target.matches('.close_icon') && target.closest('.popup').getAttribute('id') === 'gift') {\n      giftModal.style.display = 'none'; // при клике по подложке - скрываем моадльное окно\n    } else if (target.matches('.overlay') && target.closest('.popup').getAttribute('id') === 'gift') {\n      giftModal.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gift);\n\n//# sourceURL=webpack://js-diploma/./src/modules/gift.js?");

/***/ }),

/***/ "./src/modules/mainSlider.js":
/*!***********************************!*\
  !*** ./src/modules/mainSlider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// слайдер в секции header\nvar mainSlider = function mainSlider() {\n  // элементы со страницы\n  var slider = document.querySelector('.main-slider');\n  var slide = document.querySelectorAll('.main-slider .slide'); // добавляем точки для управления слайдами в зависимости от количества слайдов на странице\n\n  var dots = document.createElement('ul');\n  dots.classList.add('slider-dots');\n  slider.appendChild(dots);\n\n  for (var i = 0; i < slide.length; i++) {\n    dots.insertAdjacentHTML('beforeend', '<li><button></button></li>'); // присваиваем активный класс первой точке \n\n    var firstDot = document.querySelectorAll('.main-slider .slider-dots li');\n    firstDot[0].classList.add('slick-active');\n    var dotBtn = document.querySelectorAll('.main-slider .slider-dots li button');\n    dotBtn[0].classList.add('dot-btn');\n  }\n\n  var currentSlide = 0,\n      interval; // к предыдущему слайду\n\n  var prevSlide = function prevSlide(elem, index) {\n    elem[index].style.display = 'none';\n  }; // к следующему слайду\n\n\n  var nextSlide = function nextSlide(elem, index) {\n    elem[index].style.display = 'block';\n  }; // к предыдущему слайду\n\n\n  var prevDot = function prevDot(elem, index, className) {\n    elem[index].classList.remove(className);\n  }; // к следующему слайду\n\n\n  var nextDot = function nextDot(elem, index, className) {\n    elem[index].classList.add(className);\n  }; // авто слайд-шоу\n\n\n  var autoPlaySlide = function autoPlaySlide() {\n    slide = document.querySelectorAll('.main-slider .slide');\n    var dot = document.querySelectorAll('.main-slider .slider-dots li'),\n        dotBtn = document.querySelectorAll('.main-slider .slider-dots li button');\n    prevSlide(slide, currentSlide);\n    prevDot(dot, currentSlide, 'slick-active');\n    prevDot(dotBtn, currentSlide, 'dot-btn');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide);\n    nextDot(dot, currentSlide, 'slick-active');\n    nextDot(dotBtn, currentSlide, 'dot-btn');\n  }; // воспроизвести слайд-шоу\n\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;\n    interval = setInterval(autoPlaySlide, time);\n  }; // остановить слайд-шоу\n\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  }; // клики по \"точкам\" (для активных слайдов добавляем класс активной) для управления сладами на странице\n\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    slide = document.querySelectorAll('.main-slider .slide');\n    var dot = document.querySelectorAll('.main-slider .slider-dots li'),\n        dotBtn = document.querySelectorAll('.main-slider .slider-dots li button'),\n        target = event.target;\n\n    if (target.matches('.main-slider .slider-dots li button')) {\n      dotBtn.forEach(function (elem, index) {\n        if (elem === target) {\n          prevSlide(slide, currentSlide);\n          prevDot(dot, currentSlide, 'slick-active');\n          prevDot(dotBtn, currentSlide, 'dot-btn');\n          currentSlide = index;\n          nextSlide(slide, currentSlide);\n          nextDot(dot, currentSlide, 'slick-active');\n          nextDot(dotBtn, currentSlide, 'dot-btn');\n        }\n      });\n    }\n  }); // при наведении мыши на элементы управления слайдами останавливать слайд-шоу\n\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.main-slider .slider-dots li button')) {\n      stopSlide();\n    }\n  }); // воспроизводить обратно слайд-шоу, когда мышь убрана с элементов управления слайдами\n\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.main-slider .slider-dots li button')) {\n      startSlide();\n    }\n  });\n  startSlide(2000);\n}; // экспорт данных\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainSlider);\n\n//# sourceURL=webpack://js-diploma/./src/modules/mainSlider.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// мобильное меню\nvar menuFixed = function menuFixed() {\n  // элементы со страницы\n  var menu = document.querySelector('.top-menu'),\n      mainSlider = document.querySelector('.head-slider'),\n      mobileMenu = document.querySelector('.popup-menu'),\n      gift = document.querySelector('.fixed-gift'); // фиксация меню при прокрутке до элемента\n\n  window.addEventListener('scroll', function () {\n    // если ширина экрана менее 768px, фиксируем меню \n    if (document.documentElement.offsetWidth <= 766) {\n      // если высота до элемента меньше либо равна 0 (то есть мы проскролили до элемента и ниже него), то фиксирум меню\n      if (menu.getBoundingClientRect().top <= 0) {\n        menu.style.cssText = \"\\n          position: fixed;\\n          top: 0;\\n          right: 0;\\n          left: 0;\\n        \";\n        gift.style.top = '70px';\n      } // если высота до элемента больше 0 (то есть мы еще недоскролили до элемента или при скролле наверх страницы), то возвращаем меню в первоначальное положение\n\n\n      if (mainSlider.getBoundingClientRect().top > 0) {\n        menu.style.position = 'unset';\n        gift.style.top = '15px';\n      }\n    }\n  });\n  document.addEventListener('click', function (event) {\n    var target = event.target; // при клике на \"меню\" - открыть мобильное меню\n\n    if (target.matches('.menu-button img')) {\n      mobileMenu.style.display = 'flex'; // при клике на \"закрыть\" - закрыть мобильное меню\n    } else if (target.matches('.close-menu-btn img')) {\n      mobileMenu.style.display = 'none'; // при клике на элемент меню - закрыть мобильное меню и плавный скролл до элемента на странице\n    } else if (target.matches('.popup-menu ul li a')) {\n      event.preventDefault();\n      mobileMenu.style.display = 'none'; // значение ссылки (href) по кликнутому элементу\n\n      var id = target.getAttribute('href').substr(1),\n          // элемент с id\n      scrollTo = document.getElementById(id),\n          // значение до верхней границы элемента, по которому происходит клик\n      elemPosition = scrollTo.getBoundingClientRect().top; // плавная прокуратка на необходимое количество px до элемента\n\n      window.scrollBy({\n        top: elemPosition,\n        behavior: 'smooth'\n      });\n    }\n  });\n}; // экспорт данных\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuFixed);\n\n//# sourceURL=webpack://js-diploma/./src/modules/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;