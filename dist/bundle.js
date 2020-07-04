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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const currencyOne = document.getElementById('currency-one');\nconst currencyTwo = document.getElementById('currency-two');\n\nconst amountOne = document.getElementById('amount-one')\nconst amountTwo = document.getElementById('amount-two')\n\nconst rate = document.getElementById('rate')\nconst swap = document.getElementById('swap')\n\n\n// Event listeners\ncurrencyOne.addEventListener('change', calculate)\namountOne.addEventListener('input', calculate)\n\ncurrencyTwo.addEventListener('change', calculate)\namountTwo.addEventListener('input', calculate)\n\nswap.addEventListener('click', () => {\n    const temp = currencyOne.value;\n    currencyOne.value = currencyTwo.value;\n    currencyTwo.value = temp;\n    calculate();\n})\n\n\n// convert function\nfunction calculate() {\n    const currency_one = currencyOne.value;\n    const currency_two = currencyTwo.value;\n\n\n    fetch(`https://free.currconv.com/api/v7/convert?q=${currency_one}_${currency_two}&compact=ultra&apiKey=f2bbba04efe1ef403567`)\n        .then(res => res.json())\n        .then(data => {\n\n            const ratevalue = data[`${currency_one}_${currency_two}`];\n\n\n            rate.innerHTML = `1 ${currency_one} = ${ratevalue} ${currency_two}`;\n\n            amountTwo.value = (amountOne.value * ratevalue).toFixed(2);\n        })\n\n}\n\ncalculate()\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjdXJyZW5jeU9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW5jeS1vbmUnKTtcbmNvbnN0IGN1cnJlbmN5VHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbmN5LXR3bycpO1xuXG5jb25zdCBhbW91bnRPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW1vdW50LW9uZScpXG5jb25zdCBhbW91bnRUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW1vdW50LXR3bycpXG5cbmNvbnN0IHJhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmF0ZScpXG5jb25zdCBzd2FwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3YXAnKVxuXG5cbi8vIEV2ZW50IGxpc3RlbmVyc1xuY3VycmVuY3lPbmUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2FsY3VsYXRlKVxuYW1vdW50T25lLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2FsY3VsYXRlKVxuXG5jdXJyZW5jeVR3by5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjYWxjdWxhdGUpXG5hbW91bnRUd28uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjYWxjdWxhdGUpXG5cbnN3YXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgdGVtcCA9IGN1cnJlbmN5T25lLnZhbHVlO1xuICAgIGN1cnJlbmN5T25lLnZhbHVlID0gY3VycmVuY3lUd28udmFsdWU7XG4gICAgY3VycmVuY3lUd28udmFsdWUgPSB0ZW1wO1xuICAgIGNhbGN1bGF0ZSgpO1xufSlcblxuXG4vLyBjb252ZXJ0IGZ1bmN0aW9uXG5mdW5jdGlvbiBjYWxjdWxhdGUoKSB7XG4gICAgY29uc3QgY3VycmVuY3lfb25lID0gY3VycmVuY3lPbmUudmFsdWU7XG4gICAgY29uc3QgY3VycmVuY3lfdHdvID0gY3VycmVuY3lUd28udmFsdWU7XG5cblxuICAgIGZldGNoKGBodHRwczovL2ZyZWUuY3VycmNvbnYuY29tL2FwaS92Ny9jb252ZXJ0P3E9JHtjdXJyZW5jeV9vbmV9XyR7Y3VycmVuY3lfdHdvfSZjb21wYWN0PXVsdHJhJmFwaUtleT1mMmJiYmEwNGVmZTFlZjQwMzU2N2ApXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcmF0ZXZhbHVlID0gZGF0YVtgJHtjdXJyZW5jeV9vbmV9XyR7Y3VycmVuY3lfdHdvfWBdO1xuXG5cbiAgICAgICAgICAgIHJhdGUuaW5uZXJIVE1MID0gYDEgJHtjdXJyZW5jeV9vbmV9ID0gJHtyYXRldmFsdWV9ICR7Y3VycmVuY3lfdHdvfWA7XG5cbiAgICAgICAgICAgIGFtb3VudFR3by52YWx1ZSA9IChhbW91bnRPbmUudmFsdWUgKiByYXRldmFsdWUpLnRvRml4ZWQoMik7XG4gICAgICAgIH0pXG5cbn1cblxuY2FsY3VsYXRlKClcblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });