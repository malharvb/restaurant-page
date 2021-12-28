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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContact\": () => (/* binding */ createContact)\n/* harmony export */ });\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n\n\nfunction createContact()\n{\n    let content = document.querySelector('#content');\n    content.innerHTML = '';\n    let header = document.createElement('header');\n    header.textContent = 'Baratie';\n\n    \n    let navbar = document.createElement('div');\n    navbar.id = 'navbar';\n    let nav1 = document.createElement('span');\n    nav1.textContent = 'Home';\n    nav1.classList.add('nav-1')\n    navbar.appendChild(nav1);\n    let nav2 = document.createElement('span');\n    nav2.textContent = 'Menu';\n    nav2.classList.add('nav-2');\n    navbar.appendChild(nav2);\n    let nav3 = document.createElement('span');\n    nav3.textContent = 'Contact';\n    nav3.classList.add('nav-3');\n    navbar.appendChild(nav3);\n    \n    let text = document.createElement('div');\n    text.innerHTML = 'Contact Us <br> fakemail@fakemail.com';\n    text.id = 'text';\n\n    content.appendChild(header);\n    content.appendChild(navbar);\n    content.appendChild(text);\n\n    (0,_nav__WEBPACK_IMPORTED_MODULE_0__.eventLis)();\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page */ \"./src/main-page.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n\n\n\ninit();\n\nfunction init()\n{\n    (0,_main_page__WEBPACK_IMPORTED_MODULE_0__.createMain)();\n    (0,_nav__WEBPACK_IMPORTED_MODULE_1__.eventLis)();\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/main-page.js":
/*!**************************!*\
  !*** ./src/main-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMain\": () => (/* binding */ createMain)\n/* harmony export */ });\n/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/background.png */ \"./images/background.png\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n\n\n\nfunction createMain()\n{\n    let content = document.querySelector('#content');\n    content.innerHTML = ''\n    let header = document.createElement('header');\n    header.textContent = 'Baratie';\n\n    const newIcon = new Image();\n    newIcon.src = _images_background_png__WEBPACK_IMPORTED_MODULE_0__;\n    \n    let navbar = document.createElement('div');\n    navbar.id = 'navbar';\n    let nav1 = document.createElement('span');\n    nav1.textContent = 'Home';\n    nav1.classList.add('nav-1')\n    navbar.appendChild(nav1);\n    let nav2 = document.createElement('span');\n    nav2.textContent = 'Menu';\n    nav2.classList.add('nav-2');\n    navbar.appendChild(nav2);\n    let nav3 = document.createElement('span');\n    nav3.textContent = 'Contact';\n    nav3.classList.add('nav-3');\n    navbar.appendChild(nav3);\n    \n    let text = document.createElement('div');\n    text.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non rem corrupti cumque amet voluptatem laboriosam laborum iure voluptas rerum quidem! '\n    text.id = 'text'\n\n    content.appendChild(header);\n    content.appendChild(navbar);\n    content.appendChild(newIcon);\n    content.appendChild(text);\n\n    (0,_nav__WEBPACK_IMPORTED_MODULE_1__.eventLis)();\n}\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/main-page.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _images_menu_item_1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/menu-item-1.jpeg */ \"./images/menu-item-1.jpeg\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n\n\n\nfunction createMenu()\n{\n    let content = document.querySelector('#content');\n    content.innerHTML = '';\n    let header = document.createElement('header');\n    header.textContent = 'Baratie';\n\n    let navbar = document.createElement('div');\n    navbar.id = 'navbar';\n    let nav1 = document.createElement('span');\n    nav1.textContent = 'Home';\n    nav1.classList.add('nav-1')\n    navbar.appendChild(nav1);\n    let nav2 = document.createElement('span');\n    nav2.textContent = 'Menu';\n    nav2.classList.add('nav-2');\n    navbar.appendChild(nav2);\n    let nav3 = document.createElement('span');\n    nav3.textContent = 'Contact';\n    nav3.classList.add('nav-3');\n    navbar.appendChild(nav3);\n    \n\n    const item1 = new Image();\n    item1.src = _images_menu_item_1_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n        \n    let text = document.createElement('div');\n    text.textContent = 'The nostalgic dish';\n    text.id = 'text';\n\n    content.appendChild(header);\n    content.appendChild(navbar);\n    content.appendChild(item1);\n    content.appendChild(text);\n\n\n    (0,_nav__WEBPACK_IMPORTED_MODULE_1__.eventLis)();\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventLis\": () => (/* binding */ eventLis)\n/* harmony export */ });\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page */ \"./src/main-page.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nfunction eventLis()\n{\n    let nav1 = document.querySelector('.nav-1'); \n    let nav2 = document.querySelector('.nav-2');\n    let nav3 = document.querySelector('.nav-3');\n\n    nav1.addEventListener('click',_main_page__WEBPACK_IMPORTED_MODULE_1__.createMain);\n    nav2.addEventListener('click',_menu__WEBPACK_IMPORTED_MODULE_2__.createMenu);\n    nav3.addEventListener('click',_contact__WEBPACK_IMPORTED_MODULE_0__.createContact);\n      \n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/nav.js?");

/***/ }),

/***/ "./images/background.png":
/*!*******************************!*\
  !*** ./images/background.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"466bfd46bd8e27dd32a0.png\";\n\n//# sourceURL=webpack://restaurant-page/./images/background.png?");

/***/ }),

/***/ "./images/menu-item-1.jpeg":
/*!*********************************!*\
  !*** ./images/menu-item-1.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7e6631f3cdb5b14886e4.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./images/menu-item-1.jpeg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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