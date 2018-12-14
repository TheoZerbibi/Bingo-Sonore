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

/***/ "./src/bingo.js":
/*!**********************!*\
  !*** ./src/bingo.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bingo; });\nclass Bingo {\r\n\tconstructor() {\r\n\t\tthis.list = {\"poule\":0,\"chassedeau\":0};\r\n\t\tthis.CountSong = 0;\r\n\r\n\t\tfunction Count(obj) {\r\n\t\t\tvar nbr = 0;\r\n\t\t\tfor (var property in obj) {\r\n\t\t\t\tif (Object.prototype.hasOwnProperty.call(obj, property)) {\r\n\t\t\t\t\t\tnbr++;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\treturn (nbr);\r\n\t\t}\r\n\t\tthis.listSize = Count(this.list);\r\n\t\tconsole.log(\"List Size : \" + this.listSize);\r\n\t\tthis.audio = {};\r\n\t}\r\n\r\n\tbingo(nbr) {\r\n\t\tif (nbr <= 0) {\r\n\t\t\tif (this.CountSong >= this.listSize) \r\n\t\t\t\treturn alert('Tous les song ont était jouez !');\r\n\t\t\tthis.buttonStart = document.getElementById(\"randomStart\").style.display = 'none';\r\n\t\t\tthis.buttonStop = document.getElementById(\"randomStop\").style.display = 'block';\t\r\n\t\t\tconst randomSong = Object.keys(this.list)[Math.floor(Math.random() * this.listSize)];\r\n\t\t\tconsole.log(randomSong);\r\n\t\t\tif (randomSong === 'poule') {\r\n\t\t\t\tif (this.list.poule > 0) {\r\n\t\t\t\t\tthis.bingo();\r\n\t\t\t\t} else {\r\n\t\t\t\t\tthis.list.poule += 1;\r\n\t\t\t\t\tthis.CountSong += 1;\r\n\t\t\t\t\tconsole.log(this.CountSong);\r\n\t\t\t\t}\r\n\t\t\t} else if (randomSong === 'chassedeau') {\r\n\t\t\t\tif (this.list.chassedeau > 0) {\r\n\t\t\t\t\tthis.bingo();\r\n\t\t\t\t} else {\r\n\t\t\t\t\tthis.list.chassedeau += 1;\r\n\t\t\t\t\tthis.CountSong += 1;\r\n\t\t\t\t\tconsole.log(this.CountSong);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tthis.audio = new Audio(`./song/${randomSong}.mp3`);\r\n\t\t\tthis.audio.play();\r\n\t\t}\r\n\t\t\tthis.audio.addEventListener(\"ended\", function() {\r\n\t\t\t\tthis.audio.currentTime = 0.0;\r\n\t\t\t\tthis.buttonWait = document.getElementById(\"wait\").style.display = 'block';\r\n\t\t\t\tsetTimeout(() => {\r\n\t\t\t\t\tthis.buttonStart = document.getElementById(\"randomStart\").style.display = 'block';\r\n\t\t\t\t\tthis.buttonStop = document.getElementById(\"randomStop\").style.display = 'none';\r\n\t\t\t\t}, 10000);\r\n\t\t\t});\r\n\t\t\tif (nbr >= 1) {\r\n\t\t\tthis.audio.pause();\r\n\t\t\tthis.audio.currentTime = 0.0;\r\n\t\t\tthis.buttonWait = document.getElementById(\"wait\").style.display = 'block';\r\n\t\t\tthis.buttonStop = document.getElementById(\"randomStop\").style.display = 'none';\r\n\t\t\tsetTimeout(() => {\r\n\t\t\t\tthis.buttonStart = document.getElementById(\"randomStart\").style.display = 'block';\r\n\t\t\t\tthis.buttonWait = document.getElementById(\"wait\").style.display = 'none';\r\n\t\t\t}, 10000);\r\n\t\t\t\tconsole.log(\"Ended\");\r\n\t\t\t\tnbr = 0;\r\n\t\t\t}\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/bingo.js?");

/***/ }),

/***/ "./src/engine.js":
/*!***********************!*\
  !*** ./src/engine.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Engine; });\nclass Engine {\r\n\tconstructor() {\r\n\t\tdocument.body.style.margin = \"0px\";\r\n\t\tdocument.body.style.overflow = \"hidden\";\r\n\t\tthis.canvas = document.createElement(\"canvas\");\r\n\t\tthis.canvas.width = window.innerWidth;\r\n\t\tthis.canvas.height = window.innerHeight;\r\n\t\tdocument.body.appendChild(this.canvas);\r\n\r\n\t\tthis.ctx = this.canvas.getContext(\"2d\");\r\n\r\n\t\tthis.lastTime = new Date().getTime();\r\n\t\tthis.backgroundImage = new Image(); \r\n\t\tthis.backgroundImage.src = 'https://s3.envato.com/files/250447808/preview.jpg';\r\n\r\n\t\twindow.requestAnimationFrame(this.loop.bind(this));\r\n\t}\r\n\r\n\tloop() {\r\n\t\tlet time = new Date().getTime();\r\n\t\tlet dt = (time - this.lastTime) / 1000;\r\n\r\n\t\tthis.ctx.drawImage(this.backgroundImage, 0, 0, this.canvas.width, this.canvas.height);\r\n\t\tthis.ctx.style.backgroundImage = 'url(this.backgroundImage) no-repeat center center fixed';\r\n\t\tthis.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\r\n\r\n\t\tthis.lastTime = this.time;\r\n\t\twindow.requestAnimationFrame(this.loop.bind(this));\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/engine.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ \"./src/engine.js\");\n/* harmony import */ var _bingo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bingo */ \"./src/bingo.js\");\n\r\n\r\n\r\nlet bingo = new _bingo__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\nlet engine = new _engine__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\nlet nbr = 0;\r\n\r\n$(\"#randomStart\").click(function() {\r\n\tbingo.bingo(nbr);\r\n});\r\n\r\n$(\"#randomStop\").click(function() {\r\n\tnbr += 1;\r\n\tbingo.bingo(nbr);\r\n\tnbr = 0;\r\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });