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

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageSetup)\n/* harmony export */ });\nfunction pageSetup() {\r\n\r\nconst div = document.createElement('div');\r\ndiv.classList.add('content-div')\r\n\r\nconst header = document.createElement('h1')\r\nheader.textContent = 'Restaurant Header!'\r\ndiv.appendChild(header);\r\n\r\nconst image = document.createElement('img')\r\nimage.src = './ramen.png'\r\ndiv.appendChild(image);\r\n\r\nconst paragraph = document.createElement('p');\r\nparagraph.textContent = `This Restaurant is just amazing, I could eat here everyday! But, then I'd be broke... not to say it's expensive! It's just, you know, eating out everyday is not great for the bank LOL. Eat here.`;\r\ndiv.appendChild(paragraph);\r\n\r\nconst tabDiv = document.createElement('div')\r\ntabDiv.classList.add('tab-div');\r\n\r\nconst homeNavTab = document.createElement('div')\r\nhomeNavTab.classList.add('tab');\r\nhomeNavTab.textContent = 'Home'\r\nhomeNavTab.addEventListener('click', () => console.log('clicked'))\r\ntabDiv.appendChild(homeNavTab)\r\n\r\nconst menuNavTab = document.createElement('div')\r\nmenuNavTab.classList.add('tab');\r\nmenuNavTab.textContent = 'Menu'\r\nmenuNavTab.addEventListener('click', () => console.log('clicked'))\r\ntabDiv.appendChild(menuNavTab)\r\n\r\nconst contactNavTab = document.createElement('div')\r\ncontactNavTab.classList.add('tab');\r\ncontactNavTab.textContent = 'Contact'\r\ncontactNavTab.addEventListener('click', () => console.log('clicked'))\r\ntabDiv.appendChild(contactNavTab)\r\n\r\ndiv.appendChild(tabDiv)\r\n\r\nreturn div;\r\n}\n\n//# sourceURL=webpack://restaurant/./src/setup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/setup.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;