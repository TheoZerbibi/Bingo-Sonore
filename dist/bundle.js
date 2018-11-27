/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/engine.js":
/*!***********************!*\
  !*** ./src/engine.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Engine; });\nclass Engine {\r\n\tconstructor() {\r\n\t\tdocument.body.style.margin = \"0px\";\r\n\t\tdocument.body.style.overflow = \"hidden\";\r\n\t\tthis.canvas = document.createElement(\"canvas\");\r\n\t\tthis.canvas.width = window.innerWidth;\r\n\t\tthis.canvas.height = window.innerHeight;\r\n\t\tdocument.body.appendChild(this.canvas);\r\n\r\n\t\tthis.ctx = this.canvas.getContext(\"2d\");\r\n\r\n\t\tthis.lastTime = new Date().getTime();\r\n\r\n\t\twindow.requestAnimationFrame(this.loop.bind(this));\r\n\t}\r\n\r\n\tloop() {\r\n\t\tlet time = new Date().getTime();\r\n\t\tlet dt = (time - this.lastTime) / 1000;\r\n\r\n\t\tthis.ctx.fillStyle = \"#303030\";\r\n\t\tthis.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\r\n\r\n\t\tthis.lastTime = this.time;\r\n\t\twindow.requestAnimationFrame(this.loop.bind(this));\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/engine.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ \"./src/engine.js\");\n\r\n\r\nlet list = [\"poule.mp3\", \"chassedeau.mp3\"];\r\n\r\nlet engine = new _engine__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\r\n$(\"#randomStart\").click(function() {\r\n\tvar randomSong = list[Math.floor(Math.random() * list.length)];\r\n\tvar audio = new Audio(`./song/${randomSong}`);\r\n\t\r\n\taudio.play();\r\n\taudio.addEventListener(\"ended\", function(){\r\n\t\taudio.currentTime = 0;\r\n\t\tconsole.log(\"Ended\");\r\n\t\tlocation.reload();\r\n\t});\r\n\t$(\"#randomStart\").replaceWith('<button onclick=\"location.reload()\" class=\"button btn btn-danger\">Stop</button>');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });