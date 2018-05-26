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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! canvas-dashed-arc */ \"./node_modules/canvas-dashed-arc/index.js\");\n\n// import '../bin/bundle';\nvar canvas = document.createElement('canvas');\ndocument.body.appendChild(canvas);\ncanvas.setAttribute('width', 800);\ncanvas.setAttribute('height', 600);\nvar ctx = canvas.getContext('2d');\nctx.beginPath();\nctx.dashedArc(400, 300, 200, 0, 2 * Math.PI, 150);\nctx.arc(400, 300, 100, 0, 2 * Math.PI, 150, true);\nctx.stroke();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/canvas-dashed-arc/index.js":
/*!*************************************************!*\
  !*** ./node_modules/canvas-dashed-arc/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/main */ \"./node_modules/canvas-dashed-arc/src/main.js\");\n\n\n\n//# sourceURL=webpack:///./node_modules/canvas-dashed-arc/index.js?");

/***/ }),

/***/ "./node_modules/canvas-dashed-arc/src/main.js":
/*!****************************************************!*\
  !*** ./node_modules/canvas-dashed-arc/src/main.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (world) {\n    console.log(`hello ${world}`);\n});\nCanvasRenderingContext2D.prototype.dashedArc = function (ox, oy, r, start, end, parts) {\n    const unitSegment = (end - start) / parts;\n    for (let i = 0; i < parts; i++) {\n        const curStart = start + unitSegment * i;\n        const curEnd = curStart + unitSegment;\n        if (i % 2 === 0) {\n            this.arc(ox, oy, r, curStart, curEnd);\n        } else {\n            this.moveTo(ox + r * Math.cos(curEnd), oy + r * Math.sin(curEnd));\n        }\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/canvas-dashed-arc/src/main.js?");

/***/ })

/******/ });