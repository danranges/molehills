/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/home.svg */ "./Assets/home.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/mono-svn-add.svg */ "./Assets/mono-svn-add.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/options.svg */ "./Assets/options.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  display: flex;\n  flex-direction: column;\n  /* align-content: center; */\n  align-items: center;\n  margin: 0px;\n  padding: 0px;\n}\n\nhtml {\n  width: 100vw;\n  height: 100%;\n}\nbody {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n}\n\n.header {\n  background-color: #fff;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0px;\n  padding: 1.75em 0 2em;\n  height: 3em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5em;\n  cursor: pointer;\n}\n\n.header-icon {\n  height: 2.75rem;\n}\n\n.header-text {\n  padding: 0px 0.25rem;\n  font-size: 1.5rem;\n  font-family: 'Pacifico', sans-serif;\n  background: -webkit-linear-gradient(#0bb1d4, #9f2fff);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.workspace {\n  position: relative;\n  height: calc(100vh - 9em);\n  width: 100%;\n  padding: 0 1em;\n  overflow: scroll;\n}\n\n.underlay {\n  position: absolute;\n  background-color: rgba(128, 128, 128, 0.219);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.button-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  width: 80%;\n  max-width: 400px;\n  height: 50%;\n}\n\nh3 {\n  margin: 2rem 2rem;\n  align-items: center;\n}\n\n.btn-add-type {\n  margin: 1rem 2rem;\n  height: 4rem;\n}\n\n.btn-dismiss {\n  height: 2rem;\n  max-resolution: 1rem 2rem;\n  color: transparent;\n  -webkit-text-fill-color: transparent;\n  background: -webkit-linear-gradient(#0bb1d4, #9f2fff);\n  background-clip: text;\n  -webkit-background-clip: text;\n  mask-size: 1em;\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-origin: content-box;\n  -webkit-mask-size: 1em;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-origin: content-box;\n}\n\n.btn-dismiss:active {\n  font-size: 1.125rem;\n}\n\n.nav {\n  display: flex;\n  /* position: fixed; */\n  max-width: 600px;\n  /* position: -webkit-sticky; */\n  width: 100%;\n  bottom: 0;\n  background-color: #fff;\n  padding: 0.5em;\n  height: 3em;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 0.5em;\n  margin: 2rem;\n}\n\nbutton:active {\n  mask-size: 2.25em;\n  -webkit-mask-size: 2.25em;\n}\n\n.btn-home,\n.btn-add-task,\n.btn-menu {\n  width: 30vw;\n  height: 2.75em;\n  background: -webkit-linear-gradient(#9f2fff, #0bb1d4);\n  mask-size: 2em;\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-origin: content-box;\n  -webkit-mask-size: 2em;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-origin: content-box;\n}\n\n.btn-home {\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.btn-add-task {\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.btn-menu {\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.new-task-overlay {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.new-task-card {\n  height: 100%;\n}\n\n.new-task-form {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n  width: 18rem;\n}\n\ntextarea {\n  resize: none;\n}\n\ninput,\nlabel,\ntextarea {\n  margin: 5px 0px;\n  font-family: sans-serif;\n  font-size: 0.75rem;\n}\n\n#task-status-checkbox {\n  margin: 0px 5px;\n}\n\n.task-status-label {\n  display: block;\n  justify-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;AACA;EACE,aAAa;EACb,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,wBAAwB;EACxB,QAAQ;EACR,qBAAqB;EACrB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,mCAAmC;EACnC,qDAAqD;EACrD,qBAAqB;EACrB,6BAA6B;EAC7B,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;EACX,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,4CAA4C;EAC5C,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,qBAAqB;EACrB,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,uBAAuB;EACvB,UAAU;EACV,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,oCAAoC;EACpC,qDAAqD;EACrD,qBAAqB;EACrB,6BAA6B;EAC7B,cAAc;EACd,sBAAsB;EACtB,qBAAqB;EACrB,wBAAwB;EACxB,sBAAsB;EACtB,8BAA8B;EAC9B,6BAA6B;EAC7B,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,gBAAgB;EAChB,8BAA8B;EAC9B,WAAW;EACX,SAAS;EACT,sBAAsB;EACtB,cAAc;EACd,WAAW;EACX,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;;;EAGE,WAAW;EACX,cAAc;EACd,qDAAqD;EACrD,cAAc;EACd,sBAAsB;EACtB,qBAAqB;EACrB,wBAAwB;EACxB,sBAAsB;EACtB,8BAA8B;EAC9B,6BAA6B;EAC7B,gCAAgC;AAClC;;AAEA;EACE,mDAAmC;EACnC,2DAA2C;AAC7C;;AAEA;EACE,mDAA2C;EAC3C,2DAAmD;AACrD;;AAEA;EACE,mDAAsC;EACtC,2DAA8C;AAChD;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;;;EAGE,eAAe;EACf,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB","sourcesContent":["*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  display: flex;\n  flex-direction: column;\n  /* align-content: center; */\n  align-items: center;\n  margin: 0px;\n  padding: 0px;\n}\n\nhtml {\n  width: 100vw;\n  height: 100%;\n}\nbody {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n}\n\n.header {\n  background-color: #fff;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0px;\n  padding: 1.75em 0 2em;\n  height: 3em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5em;\n  cursor: pointer;\n}\n\n.header-icon {\n  height: 2.75rem;\n}\n\n.header-text {\n  padding: 0px 0.25rem;\n  font-size: 1.5rem;\n  font-family: 'Pacifico', sans-serif;\n  background: -webkit-linear-gradient(#0bb1d4, #9f2fff);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.workspace {\n  position: relative;\n  height: calc(100vh - 9em);\n  width: 100%;\n  padding: 0 1em;\n  overflow: scroll;\n}\n\n.underlay {\n  position: absolute;\n  background-color: rgba(128, 128, 128, 0.219);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.button-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  width: 80%;\n  max-width: 400px;\n  height: 50%;\n}\n\nh3 {\n  margin: 2rem 2rem;\n  align-items: center;\n}\n\n.btn-add-type {\n  margin: 1rem 2rem;\n  height: 4rem;\n}\n\n.btn-dismiss {\n  height: 2rem;\n  max-resolution: 1rem 2rem;\n  color: transparent;\n  -webkit-text-fill-color: transparent;\n  background: -webkit-linear-gradient(#0bb1d4, #9f2fff);\n  background-clip: text;\n  -webkit-background-clip: text;\n  mask-size: 1em;\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-origin: content-box;\n  -webkit-mask-size: 1em;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-origin: content-box;\n}\n\n.btn-dismiss:active {\n  font-size: 1.125rem;\n}\n\n.nav {\n  display: flex;\n  /* position: fixed; */\n  max-width: 600px;\n  /* position: -webkit-sticky; */\n  width: 100%;\n  bottom: 0;\n  background-color: #fff;\n  padding: 0.5em;\n  height: 3em;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 0.5em;\n  margin: 2rem;\n}\n\nbutton:active {\n  mask-size: 2.25em;\n  -webkit-mask-size: 2.25em;\n}\n\n.btn-home,\n.btn-add-task,\n.btn-menu {\n  width: 30vw;\n  height: 2.75em;\n  background: -webkit-linear-gradient(#9f2fff, #0bb1d4);\n  mask-size: 2em;\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-origin: content-box;\n  -webkit-mask-size: 2em;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-origin: content-box;\n}\n\n.btn-home {\n  mask-image: url(../Assets/home.svg);\n  -webkit-mask-image: url(../Assets/home.svg);\n}\n\n.btn-add-task {\n  mask-image: url(../Assets/mono-svn-add.svg);\n  -webkit-mask-image: url(../Assets/mono-svn-add.svg);\n}\n\n.btn-menu {\n  mask-image: url(../Assets/options.svg);\n  -webkit-mask-image: url(../Assets/options.svg);\n}\n\n.new-task-overlay {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.new-task-card {\n  height: 100%;\n}\n\n.new-task-form {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n  width: 18rem;\n}\n\ntextarea {\n  resize: none;\n}\n\ninput,\nlabel,\ntextarea {\n  margin: 5px 0px;\n  font-family: sans-serif;\n  font-size: 0.75rem;\n}\n\n#task-status-checkbox {\n  margin: 0px 5px;\n}\n\n.task-status-label {\n  display: block;\n  justify-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _Assets_mole_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Assets/mole.svg */ "./Assets/mole.svg");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");



class UI {
  static render() {
    function createHeader() {
      const header = document.createElement('div');
      header.classList.add('header');

      const hdrLogo = new Image();
      hdrLogo.src = _Assets_mole_svg__WEBPACK_IMPORTED_MODULE_0__;
      hdrLogo.classList.add('header-icon');

      const hdrTxt = document.createElement('div');
      hdrTxt.innerHTML = 'Molehills';
      hdrTxt.classList.add('header-text');

      header.appendChild(hdrLogo);
      header.appendChild(hdrTxt);

      header.addEventListener('click', () => UI.renderHome());

      return header;
    }

    function createWorkspace() {
      const workspace = document.createElement('div');
      workspace.id = 'workspace';
      workspace.classList.add('workspace');

      return workspace;
    }

    function createNav() {
      const nav = document.createElement('div');
      nav.classList.add('nav');

      const btnHome = document.createElement('button');
      btnHome.classList.add('btn-home');
      btnHome.addEventListener('click', UI.renderHome);

      const btnAddTask = document.createElement('button');
      btnAddTask.classList.add('btn-add-task');
      btnAddTask.addEventListener('click', () => UI.initAddTypeButtons());

      const btnMenu = document.createElement('button');
      btnMenu.classList.add('btn-menu');
      btnMenu.addEventListener('click', UI.renderProjects);

      nav.appendChild(btnHome);
      nav.appendChild(btnAddTask);
      nav.appendChild(btnMenu);

      return nav;
    }

    document.body.appendChild(createHeader());
    document.body.appendChild(createWorkspace());
    document.body.appendChild(createNav());

    UI.renderHome();
  }

  static renderWorkspace(project = '*') {}

  static renderHome() {
    workspace.innerHTML = 'HOME';
  }

  static renderProjects() {
    workspace.innerHTML = 'PROJECTS';
  }

  static clearWorkspace() {
    workspace.innerHTML = '';
  }

  static initAddTypeButtons() {
    if (!document.getElementById('underlay')) {
      const workspace = document.getElementById('workspace');

      const underlay = document.createElement('div');
      underlay.classList.add('underlay');
      underlay.id = 'underlay';

      const buttonWrapper = document.createElement('div');
      buttonWrapper.classList.add('button-wrapper');
      buttonWrapper.id = 'button-wrapper';

      const addTypePrompt = document.createElement('h3');
      addTypePrompt.classList.add('add-type-prompt-text');
      addTypePrompt.innerHTML = 'What would you like to add?';

      const btnAddTypeProject = document.createElement('button');
      btnAddTypeProject.classList.add('btn-add-type');
      btnAddTypeProject.innerHTML = 'Project';

      const btnAddTypeTask = document.createElement('button');
      btnAddTypeTask.classList.add('btn-add-type');
      btnAddTypeTask.innerHTML = 'Task';

      const btnDismiss = document.createElement('button');
      btnDismiss.classList.add('btn-dismiss');
      btnDismiss.innerHTML = 'close';

      workspace.appendChild(underlay);
      workspace.appendChild(buttonWrapper);
      buttonWrapper.appendChild(addTypePrompt);
      buttonWrapper.appendChild(btnAddTypeProject);
      buttonWrapper.appendChild(btnAddTypeTask);
      buttonWrapper.appendChild(btnDismiss);

      underlay.addEventListener('click', () => UI.removeAddTypeButtons());
      btnDismiss.addEventListener('click', () => UI.removeAddTypeButtons());
    }
  }

  static removeAddTypeButtons() {
    const underlay = document.getElementById('underlay');
    const buttonWrapper = document.getElementById('button-wrapper');

    underlay.remove();
    buttonWrapper.remove();
  }

  static addEditTaskCard(
    name = 'Task',
    desc = 'Description',
    project = 'Project',
    status = false,
    addEdit = 'Add Task',
  ) {
    const workspace = document.getElementById('workspace');
    workspace.innerHTML = '';

    const overlay = document.createElement('div');
    overlay.classList.add('new-task-overlay');

    const card = document.createElement('div');
    card.classList.add('new-task-card');

    const cardForm = document.createElement('form');
    cardForm.id = 'new-task-form';
    cardForm.classList.add('new-task-form');

    const taskName = document.createElement('input');
    taskName.setAttribute('type', 'text');
    taskName.setAttribute('name', 'TaskName');
    taskName.setAttribute('placeholder', name);

    const taskDesc = document.createElement('textarea');
    taskDesc.setAttribute('type', 'text');
    taskDesc.setAttribute('name', 'TaskDescription');
    taskDesc.setAttribute('placeholder', desc);
    taskDesc.setAttribute('rows', 5);

    const taskProj = document.createElement('input');
    taskProj.setAttribute('type', 'text');
    taskProj.setAttribute('name', 'TaskProject');
    taskProj.setAttribute('placeholder', project);

    const taskStatus = document.createElement('input');
    taskStatus.setAttribute('type', 'checkbox');
    taskStatus.setAttribute('name', 'TaskStatus');
    taskStatus.checked = status;
    taskStatus.id = 'task-status-checkbox';

    const taskStatusLabel = document.createElement('label');
    taskStatusLabel.classList.add('task-status-label');
    taskStatusLabel.htmlFor = 'task-status-checkbox';
    taskStatusLabel.innerHTML = 'Completed?';
    taskStatusLabel.appendChild(taskStatus);

    const formSubmit = document.createElement('input');
    formSubmit.setAttribute('type', 'submit');
    formSubmit.setAttribute('value', addEdit);

    workspace.appendChild(overlay);
    overlay.appendChild(card);
    card.appendChild(cardForm);
    cardForm.appendChild(taskName);
    cardForm.appendChild(taskProj);
    cardForm.appendChild(taskDesc);
    cardForm.appendChild(taskStatusLabel);
    cardForm.appendChild(formSubmit);

    // cardForm.addEventListener('submit', Task.appendNewTask);
  }
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  getProject() {
    return this.name;
  }

  setProject(newName) {
    this.name = newName;
  }

  getTasks() {
    return this.tasks;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  addTask(task) {}

  deleteTask(task) {}

  sortTasks() {}
}


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Storage": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist */ "./src/todolist.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");




class Storage {
  static getTodoList() {}

  static setTodoList(todoList) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }
}


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(name, desc, status) {
    this.name = name;
    this.desc = desc;
    this.status = status;
  }
}


/***/ }),

/***/ "./src/todolist.js":
/*!*************************!*\
  !*** ./src/todolist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");



class TodoList {
  constructor() {
    this.projects = [];
  }

  getProjects() {
    return this.projects;
  }

  setProjects(projects) {
    this.projects = projects;
  }

  addProject(project) {}

  deleteProject(project) {}
}


/***/ }),

/***/ "./Assets/home.svg":
/*!*************************!*\
  !*** ./Assets/home.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2218ff3f6caa87decc4.svg";

/***/ }),

/***/ "./Assets/mole.svg":
/*!*************************!*\
  !*** ./Assets/mole.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de709a25a26261a25d0a.svg";

/***/ }),

/***/ "./Assets/mono-svn-add.svg":
/*!*********************************!*\
  !*** ./Assets/mono-svn-add.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5cd68e58ecd486bb4c6.svg";

/***/ }),

/***/ "./Assets/options.svg":
/*!****************************!*\
  !*** ./Assets/options.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39e96cf4eec2c37e3fde.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/UI.js");



_UI__WEBPACK_IMPORTED_MODULE_1__["default"].render();
_UI__WEBPACK_IMPORTED_MODULE_1__["default"].initAddTypeButtons();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDTztBQUNoRyw0Q0FBNEMsNEdBQXFDO0FBQ2pGLDRDQUE0Qyw0SEFBNkM7QUFDekYsNENBQTRDLGtIQUF3QztBQUNwRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0Esa0VBQWtFLDJCQUEyQixHQUFHLGlCQUFpQixrQkFBa0IsMkJBQTJCLDhCQUE4QiwwQkFBMEIsZ0JBQWdCLGlCQUFpQixHQUFHLFVBQVUsaUJBQWlCLGlCQUFpQixHQUFHLFFBQVEsa0JBQWtCLGdCQUFnQixxQkFBcUIsR0FBRyxhQUFhLDJCQUEyQixxQkFBcUIsNkJBQTZCLGFBQWEsMEJBQTBCLGdCQUFnQixrQkFBa0Isd0JBQXdCLDRCQUE0QixxQkFBcUIsb0JBQW9CLEdBQUcsa0JBQWtCLG9CQUFvQixHQUFHLGtCQUFrQix5QkFBeUIsc0JBQXNCLHdDQUF3QywwREFBMEQsMEJBQTBCLGtDQUFrQyx5Q0FBeUMsR0FBRyxnQkFBZ0IsdUJBQXVCLDhCQUE4QixnQkFBZ0IsbUJBQW1CLHFCQUFxQixHQUFHLGVBQWUsdUJBQXVCLGlEQUFpRCxXQUFXLFlBQVksZ0JBQWdCLGlCQUFpQixHQUFHLHFCQUFxQixrQkFBa0IsMkJBQTJCLDRCQUE0QiwwQkFBMEIsb0JBQW9CLGFBQWEsY0FBYyxxQ0FBcUMsNEJBQTRCLGVBQWUscUJBQXFCLGdCQUFnQixHQUFHLFFBQVEsc0JBQXNCLHdCQUF3QixHQUFHLG1CQUFtQixzQkFBc0IsaUJBQWlCLEdBQUcsa0JBQWtCLGlCQUFpQiw4QkFBOEIsdUJBQXVCLHlDQUF5QywwREFBMEQsMEJBQTBCLGtDQUFrQyxtQkFBbUIsMkJBQTJCLDBCQUEwQiw2QkFBNkIsMkJBQTJCLG1DQUFtQyxrQ0FBa0MscUNBQXFDLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLFVBQVUsa0JBQWtCLHdCQUF3Qix1QkFBdUIsaUNBQWlDLGtCQUFrQixjQUFjLDJCQUEyQixtQkFBbUIsZ0JBQWdCLDRCQUE0Qix3QkFBd0IsR0FBRyxZQUFZLHlCQUF5Qiw0QkFBNEIsd0JBQXdCLGlCQUFpQix5QkFBeUIsaUJBQWlCLEdBQUcsbUJBQW1CLHNCQUFzQiw4QkFBOEIsR0FBRywyQ0FBMkMsZ0JBQWdCLG1CQUFtQiwwREFBMEQsbUJBQW1CLDJCQUEyQiwwQkFBMEIsNkJBQTZCLDJCQUEyQixtQ0FBbUMsa0NBQWtDLHFDQUFxQyxHQUFHLGVBQWUsZ0VBQWdFLHdFQUF3RSxHQUFHLG1CQUFtQixnRUFBZ0Usd0VBQXdFLEdBQUcsZUFBZSxnRUFBZ0Usd0VBQXdFLEdBQUcsdUJBQXVCLGdCQUFnQixrQkFBa0IsNEJBQTRCLEdBQUcsb0JBQW9CLGlCQUFpQixHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLGlCQUFpQixpQkFBaUIsR0FBRyxjQUFjLGlCQUFpQixHQUFHLDhCQUE4QixvQkFBb0IsNEJBQTRCLHVCQUF1QixHQUFHLDJCQUEyQixvQkFBb0IsR0FBRyx3QkFBd0IsbUJBQW1CLDBCQUEwQixHQUFHLFNBQVMsbUZBQW1GLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxrREFBa0QsMkJBQTJCLEdBQUcsaUJBQWlCLGtCQUFrQiwyQkFBMkIsOEJBQThCLDBCQUEwQixnQkFBZ0IsaUJBQWlCLEdBQUcsVUFBVSxpQkFBaUIsaUJBQWlCLEdBQUcsUUFBUSxrQkFBa0IsZ0JBQWdCLHFCQUFxQixHQUFHLGFBQWEsMkJBQTJCLHFCQUFxQiw2QkFBNkIsYUFBYSwwQkFBMEIsZ0JBQWdCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHFCQUFxQixvQkFBb0IsR0FBRyxrQkFBa0Isb0JBQW9CLEdBQUcsa0JBQWtCLHlCQUF5QixzQkFBc0Isd0NBQXdDLDBEQUEwRCwwQkFBMEIsa0NBQWtDLHlDQUF5QyxHQUFHLGdCQUFnQix1QkFBdUIsOEJBQThCLGdCQUFnQixtQkFBbUIscUJBQXFCLEdBQUcsZUFBZSx1QkFBdUIsaURBQWlELFdBQVcsWUFBWSxnQkFBZ0IsaUJBQWlCLEdBQUcscUJBQXFCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLDBCQUEwQixvQkFBb0IsYUFBYSxjQUFjLHFDQUFxQyw0QkFBNEIsZUFBZSxxQkFBcUIsZ0JBQWdCLEdBQUcsUUFBUSxzQkFBc0Isd0JBQXdCLEdBQUcsbUJBQW1CLHNCQUFzQixpQkFBaUIsR0FBRyxrQkFBa0IsaUJBQWlCLDhCQUE4Qix1QkFBdUIseUNBQXlDLDBEQUEwRCwwQkFBMEIsa0NBQWtDLG1CQUFtQiwyQkFBMkIsMEJBQTBCLDZCQUE2QiwyQkFBMkIsbUNBQW1DLGtDQUFrQyxxQ0FBcUMsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsVUFBVSxrQkFBa0Isd0JBQXdCLHVCQUF1QixpQ0FBaUMsa0JBQWtCLGNBQWMsMkJBQTJCLG1CQUFtQixnQkFBZ0IsNEJBQTRCLHdCQUF3QixHQUFHLFlBQVkseUJBQXlCLDRCQUE0Qix3QkFBd0IsaUJBQWlCLHlCQUF5QixpQkFBaUIsR0FBRyxtQkFBbUIsc0JBQXNCLDhCQUE4QixHQUFHLDJDQUEyQyxnQkFBZ0IsbUJBQW1CLDBEQUEwRCxtQkFBbUIsMkJBQTJCLDBCQUEwQiw2QkFBNkIsMkJBQTJCLG1DQUFtQyxrQ0FBa0MscUNBQXFDLEdBQUcsZUFBZSx3Q0FBd0MsZ0RBQWdELEdBQUcsbUJBQW1CLGdEQUFnRCx3REFBd0QsR0FBRyxlQUFlLDJDQUEyQyxtREFBbUQsR0FBRyx1QkFBdUIsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsR0FBRyxvQkFBb0IsaUJBQWlCLEdBQUcsb0JBQW9CLGtCQUFrQiwyQkFBMkIsaUJBQWlCLGlCQUFpQixHQUFHLGNBQWMsaUJBQWlCLEdBQUcsOEJBQThCLG9CQUFvQiw0QkFBNEIsdUJBQXVCLEdBQUcsMkJBQTJCLG9CQUFvQixHQUFHLHdCQUF3QixtQkFBbUIsMEJBQTBCLEdBQUcscUJBQXFCO0FBQzE4UztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2QxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsa0NBQWtDOztBQUVsQyw4QkFBOEI7O0FBRTlCLGtEQUFrRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNEOztBQUU3Uyx1Q0FBdUMsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sb0JBQW9COztBQUV6Syx5Q0FBeUMsMEdBQTBHLHdCQUF3QixlQUFlLGVBQWUsZ0JBQWdCLFlBQVksTUFBTSx3QkFBd0IsK0JBQStCLGFBQWEscUJBQXFCLHVDQUF1QyxjQUFjLFdBQVcsWUFBWSxVQUFVLE1BQU0sbURBQW1ELFVBQVUsc0JBQXNCOztBQUVuZixnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDbkNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNoR2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQy9DYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZnNDO0FBQ047O0FBRWpCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsNkNBQUk7QUFDeEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1TGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JrQztBQUNGO0FBQ047O0FBRW5CO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05nQztBQUNOOztBQUVYO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7QUNyQnNCO0FBQ0E7O0FBRXRCLGtEQUFTO0FBQ1QsOERBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL21vbGVoaWxscy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21vbGVoaWxscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21vbGVoaWxscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vc3JjL3RvZG9saXN0LmpzIiwid2VicGFjazovL21vbGVoaWxscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL21vbGVoaWxscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vQXNzZXRzL2hvbWUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vQXNzZXRzL21vbm8tc3ZuLWFkZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9Bc3NldHMvb3B0aW9ucy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAvKiBhbGlnbi1jb250ZW50OiBjZW50ZXI7ICovXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbmh0bWwge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XFxuICB0b3A6IDBweDtcXG4gIHBhZGRpbmc6IDEuNzVlbSAwIDJlbTtcXG4gIGhlaWdodDogM2VtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXItaWNvbiB7XFxuICBoZWlnaHQ6IDIuNzVyZW07XFxufVxcblxcbi5oZWFkZXItdGV4dCB7XFxuICBwYWRkaW5nOiAwcHggMC4yNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdQYWNpZmljbycsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjMGJiMWQ0LCAjOWYyZmZmKTtcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ud29ya3NwYWNlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDllbSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMWVtO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLnVuZGVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yMTkpO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYnV0dG9uLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxufVxcblxcbmgzIHtcXG4gIG1hcmdpbjogMnJlbSAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJ0bi1hZGQtdHlwZSB7XFxuICBtYXJnaW46IDFyZW0gMnJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuLmJ0bi1kaXNtaXNzIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIG1heC1yZXNvbHV0aW9uOiAxcmVtIDJyZW07XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjMGJiMWQ0LCAjOWYyZmZmKTtcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgbWFzay1zaXplOiAxZW07XFxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgbWFzay1vcmlnaW46IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDFlbTtcXG4gIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgLXdlYmtpdC1tYXNrLW9yaWdpbjogY29udGVudC1ib3g7XFxufVxcblxcbi5idG4tZGlzbWlzczphY3RpdmUge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIC8qIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgaGVpZ2h0OiAzZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgbWFyZ2luOiAycmVtO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIG1hc2stc2l6ZTogMi4yNWVtO1xcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDIuMjVlbTtcXG59XFxuXFxuLmJ0bi1ob21lLFxcbi5idG4tYWRkLXRhc2ssXFxuLmJ0bi1tZW51IHtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgaGVpZ2h0OiAyLjc1ZW07XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjOWYyZmZmLCAjMGJiMWQ0KTtcXG4gIG1hc2stc2l6ZTogMmVtO1xcbiAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIG1hc2stcG9zaXRpb246IGNlbnRlcjtcXG4gIG1hc2stb3JpZ2luOiBjb250ZW50LWJveDtcXG4gIC13ZWJraXQtbWFzay1zaXplOiAyZW07XFxuICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAtd2Via2l0LW1hc2stcG9zaXRpb246IGNlbnRlcjtcXG4gIC13ZWJraXQtbWFzay1vcmlnaW46IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4uYnRuLWhvbWUge1xcbiAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuLmJ0bi1hZGQtdGFzayB7XFxuICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4uYnRuLW1lbnUge1xcbiAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuLm5ldy10YXNrLW92ZXJsYXkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5uZXctdGFzay1jYXJkIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5ldy10YXNrLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMThyZW07XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuaW5wdXQsXFxubGFiZWwsXFxudGV4dGFyZWEge1xcbiAgbWFyZ2luOiA1cHggMHB4O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxufVxcblxcbiN0YXNrLXN0YXR1cy1jaGVja2JveCB7XFxuICBtYXJnaW46IDBweCA1cHg7XFxufVxcblxcbi50YXNrLXN0YXR1cy1sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsUUFBUTtFQUNSLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMscURBQXFEO0VBQ3JELHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxxREFBcUQ7RUFDckQscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLGNBQWM7RUFDZCxxREFBcUQ7RUFDckQsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG1EQUFtQztFQUNuQywyREFBMkM7QUFDN0M7O0FBRUE7RUFDRSxtREFBMkM7RUFDM0MsMkRBQW1EO0FBQ3JEOztBQUVBO0VBQ0UsbURBQXNDO0VBQ3RDLDJEQUE4QztBQUNoRDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOzs7RUFHRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAvKiBhbGlnbi1jb250ZW50OiBjZW50ZXI7ICovXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbmh0bWwge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XFxuICB0b3A6IDBweDtcXG4gIHBhZGRpbmc6IDEuNzVlbSAwIDJlbTtcXG4gIGhlaWdodDogM2VtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXItaWNvbiB7XFxuICBoZWlnaHQ6IDIuNzVyZW07XFxufVxcblxcbi5oZWFkZXItdGV4dCB7XFxuICBwYWRkaW5nOiAwcHggMC4yNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdQYWNpZmljbycsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjMGJiMWQ0LCAjOWYyZmZmKTtcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ud29ya3NwYWNlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDllbSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMWVtO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLnVuZGVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yMTkpO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYnV0dG9uLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxufVxcblxcbmgzIHtcXG4gIG1hcmdpbjogMnJlbSAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJ0bi1hZGQtdHlwZSB7XFxuICBtYXJnaW46IDFyZW0gMnJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuLmJ0bi1kaXNtaXNzIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIG1heC1yZXNvbHV0aW9uOiAxcmVtIDJyZW07XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjMGJiMWQ0LCAjOWYyZmZmKTtcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgbWFzay1zaXplOiAxZW07XFxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgbWFzay1vcmlnaW46IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDFlbTtcXG4gIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgLXdlYmtpdC1tYXNrLW9yaWdpbjogY29udGVudC1ib3g7XFxufVxcblxcbi5idG4tZGlzbWlzczphY3RpdmUge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIC8qIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgaGVpZ2h0OiAzZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgbWFyZ2luOiAycmVtO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIG1hc2stc2l6ZTogMi4yNWVtO1xcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDIuMjVlbTtcXG59XFxuXFxuLmJ0bi1ob21lLFxcbi5idG4tYWRkLXRhc2ssXFxuLmJ0bi1tZW51IHtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgaGVpZ2h0OiAyLjc1ZW07XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjOWYyZmZmLCAjMGJiMWQ0KTtcXG4gIG1hc2stc2l6ZTogMmVtO1xcbiAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIG1hc2stcG9zaXRpb246IGNlbnRlcjtcXG4gIG1hc2stb3JpZ2luOiBjb250ZW50LWJveDtcXG4gIC13ZWJraXQtbWFzay1zaXplOiAyZW07XFxuICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAtd2Via2l0LW1hc2stcG9zaXRpb246IGNlbnRlcjtcXG4gIC13ZWJraXQtbWFzay1vcmlnaW46IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4uYnRuLWhvbWUge1xcbiAgbWFzay1pbWFnZTogdXJsKC4uL0Fzc2V0cy9ob21lLnN2Zyk7XFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCguLi9Bc3NldHMvaG9tZS5zdmcpO1xcbn1cXG5cXG4uYnRuLWFkZC10YXNrIHtcXG4gIG1hc2staW1hZ2U6IHVybCguLi9Bc3NldHMvbW9uby1zdm4tYWRkLnN2Zyk7XFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCguLi9Bc3NldHMvbW9uby1zdm4tYWRkLnN2Zyk7XFxufVxcblxcbi5idG4tbWVudSB7XFxuICBtYXNrLWltYWdlOiB1cmwoLi4vQXNzZXRzL29wdGlvbnMuc3ZnKTtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKC4uL0Fzc2V0cy9vcHRpb25zLnN2Zyk7XFxufVxcblxcbi5uZXctdGFzay1vdmVybGF5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmV3LXRhc2stY2FyZCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5uZXctdGFzay1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDE4cmVtO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbmlucHV0LFxcbmxhYmVsLFxcbnRleHRhcmVhIHtcXG4gIG1hcmdpbjogNXB4IDBweDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbn1cXG5cXG4jdGFzay1zdGF0dXMtY2hlY2tib3gge1xcbiAgbWFyZ2luOiAwcHggNXB4O1xcbn1cXG5cXG4udGFzay1zdGF0dXMtbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBMb2dvIGZyb20gJy4uL0Fzc2V0cy9tb2xlLnN2Zyc7XG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG4gIHN0YXRpYyByZW5kZXIoKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICAgIGNvbnN0IGhkckxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGhkckxvZ28uc3JjID0gTG9nbztcbiAgICAgIGhkckxvZ28uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWljb24nKTtcblxuICAgICAgY29uc3QgaGRyVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBoZHJUeHQuaW5uZXJIVE1MID0gJ01vbGVoaWxscyc7XG4gICAgICBoZHJUeHQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXRleHQnKTtcblxuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhkckxvZ28pO1xuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhkclR4dCk7XG5cbiAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLnJlbmRlckhvbWUoKSk7XG5cbiAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlV29ya3NwYWNlKCkge1xuICAgICAgY29uc3Qgd29ya3NwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB3b3Jrc3BhY2UuaWQgPSAnd29ya3NwYWNlJztcbiAgICAgIHdvcmtzcGFjZS5jbGFzc0xpc3QuYWRkKCd3b3Jrc3BhY2UnKTtcblxuICAgICAgcmV0dXJuIHdvcmtzcGFjZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcblxuICAgICAgY29uc3QgYnRuSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnRuSG9tZS5jbGFzc0xpc3QuYWRkKCdidG4taG9tZScpO1xuICAgICAgYnRuSG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLnJlbmRlckhvbWUpO1xuXG4gICAgICBjb25zdCBidG5BZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBidG5BZGRUYXNrLmNsYXNzTGlzdC5hZGQoJ2J0bi1hZGQtdGFzaycpO1xuICAgICAgYnRuQWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLmluaXRBZGRUeXBlQnV0dG9ucygpKTtcblxuICAgICAgY29uc3QgYnRuTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnRuTWVudS5jbGFzc0xpc3QuYWRkKCdidG4tbWVudScpO1xuICAgICAgYnRuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLnJlbmRlclByb2plY3RzKTtcblxuICAgICAgbmF2LmFwcGVuZENoaWxkKGJ0bkhvbWUpO1xuICAgICAgbmF2LmFwcGVuZENoaWxkKGJ0bkFkZFRhc2spO1xuICAgICAgbmF2LmFwcGVuZENoaWxkKGJ0bk1lbnUpO1xuXG4gICAgICByZXR1cm4gbmF2O1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlV29ya3NwYWNlKCkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuXG4gICAgVUkucmVuZGVySG9tZSgpO1xuICB9XG5cbiAgc3RhdGljIHJlbmRlcldvcmtzcGFjZShwcm9qZWN0ID0gJyonKSB7fVxuXG4gIHN0YXRpYyByZW5kZXJIb21lKCkge1xuICAgIHdvcmtzcGFjZS5pbm5lckhUTUwgPSAnSE9NRSc7XG4gIH1cblxuICBzdGF0aWMgcmVuZGVyUHJvamVjdHMoKSB7XG4gICAgd29ya3NwYWNlLmlubmVySFRNTCA9ICdQUk9KRUNUUyc7XG4gIH1cblxuICBzdGF0aWMgY2xlYXJXb3Jrc3BhY2UoKSB7XG4gICAgd29ya3NwYWNlLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgc3RhdGljIGluaXRBZGRUeXBlQnV0dG9ucygpIHtcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bmRlcmxheScpKSB7XG4gICAgICBjb25zdCB3b3Jrc3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya3NwYWNlJyk7XG5cbiAgICAgIGNvbnN0IHVuZGVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB1bmRlcmxheS5jbGFzc0xpc3QuYWRkKCd1bmRlcmxheScpO1xuICAgICAgdW5kZXJsYXkuaWQgPSAndW5kZXJsYXknO1xuXG4gICAgICBjb25zdCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBidXR0b25XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi13cmFwcGVyJyk7XG4gICAgICBidXR0b25XcmFwcGVyLmlkID0gJ2J1dHRvbi13cmFwcGVyJztcblxuICAgICAgY29uc3QgYWRkVHlwZVByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICBhZGRUeXBlUHJvbXB0LmNsYXNzTGlzdC5hZGQoJ2FkZC10eXBlLXByb21wdC10ZXh0Jyk7XG4gICAgICBhZGRUeXBlUHJvbXB0LmlubmVySFRNTCA9ICdXaGF0IHdvdWxkIHlvdSBsaWtlIHRvIGFkZD8nO1xuXG4gICAgICBjb25zdCBidG5BZGRUeXBlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnRuQWRkVHlwZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnYnRuLWFkZC10eXBlJyk7XG4gICAgICBidG5BZGRUeXBlUHJvamVjdC5pbm5lckhUTUwgPSAnUHJvamVjdCc7XG5cbiAgICAgIGNvbnN0IGJ0bkFkZFR5cGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBidG5BZGRUeXBlVGFzay5jbGFzc0xpc3QuYWRkKCdidG4tYWRkLXR5cGUnKTtcbiAgICAgIGJ0bkFkZFR5cGVUYXNrLmlubmVySFRNTCA9ICdUYXNrJztcblxuICAgICAgY29uc3QgYnRuRGlzbWlzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnRuRGlzbWlzcy5jbGFzc0xpc3QuYWRkKCdidG4tZGlzbWlzcycpO1xuICAgICAgYnRuRGlzbWlzcy5pbm5lckhUTUwgPSAnY2xvc2UnO1xuXG4gICAgICB3b3Jrc3BhY2UuYXBwZW5kQ2hpbGQodW5kZXJsYXkpO1xuICAgICAgd29ya3NwYWNlLmFwcGVuZENoaWxkKGJ1dHRvbldyYXBwZXIpO1xuICAgICAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChhZGRUeXBlUHJvbXB0KTtcbiAgICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoYnRuQWRkVHlwZVByb2plY3QpO1xuICAgICAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChidG5BZGRUeXBlVGFzayk7XG4gICAgICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGJ0bkRpc21pc3MpO1xuXG4gICAgICB1bmRlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLnJlbW92ZUFkZFR5cGVCdXR0b25zKCkpO1xuICAgICAgYnRuRGlzbWlzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLnJlbW92ZUFkZFR5cGVCdXR0b25zKCkpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVBZGRUeXBlQnV0dG9ucygpIHtcbiAgICBjb25zdCB1bmRlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bmRlcmxheScpO1xuICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLXdyYXBwZXInKTtcblxuICAgIHVuZGVybGF5LnJlbW92ZSgpO1xuICAgIGJ1dHRvbldyYXBwZXIucmVtb3ZlKCk7XG4gIH1cblxuICBzdGF0aWMgYWRkRWRpdFRhc2tDYXJkKFxuICAgIG5hbWUgPSAnVGFzaycsXG4gICAgZGVzYyA9ICdEZXNjcmlwdGlvbicsXG4gICAgcHJvamVjdCA9ICdQcm9qZWN0JyxcbiAgICBzdGF0dXMgPSBmYWxzZSxcbiAgICBhZGRFZGl0ID0gJ0FkZCBUYXNrJyxcbiAgKSB7XG4gICAgY29uc3Qgd29ya3NwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmtzcGFjZScpO1xuICAgIHdvcmtzcGFjZS5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLW92ZXJsYXknKTtcblxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWNhcmQnKTtcblxuICAgIGNvbnN0IGNhcmRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNhcmRGb3JtLmlkID0gJ25ldy10YXNrLWZvcm0nO1xuICAgIGNhcmRGb3JtLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWZvcm0nKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRhc2tOYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICdUYXNrTmFtZScpO1xuICAgIHRhc2tOYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBuYW1lKTtcblxuICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0YXNrRGVzYy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRhc2tEZXNjLnNldEF0dHJpYnV0ZSgnbmFtZScsICdUYXNrRGVzY3JpcHRpb24nKTtcbiAgICB0YXNrRGVzYy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgZGVzYyk7XG4gICAgdGFza0Rlc2Muc2V0QXR0cmlidXRlKCdyb3dzJywgNSk7XG5cbiAgICBjb25zdCB0YXNrUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza1Byb2ouc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICB0YXNrUHJvai5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnVGFza1Byb2plY3QnKTtcbiAgICB0YXNrUHJvai5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcHJvamVjdCk7XG5cbiAgICBjb25zdCB0YXNrU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrU3RhdHVzLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIHRhc2tTdGF0dXMuc2V0QXR0cmlidXRlKCduYW1lJywgJ1Rhc2tTdGF0dXMnKTtcbiAgICB0YXNrU3RhdHVzLmNoZWNrZWQgPSBzdGF0dXM7XG4gICAgdGFza1N0YXR1cy5pZCA9ICd0YXNrLXN0YXR1cy1jaGVja2JveCc7XG5cbiAgICBjb25zdCB0YXNrU3RhdHVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRhc2tTdGF0dXNMYWJlbC5jbGFzc0xpc3QuYWRkKCd0YXNrLXN0YXR1cy1sYWJlbCcpO1xuICAgIHRhc2tTdGF0dXNMYWJlbC5odG1sRm9yID0gJ3Rhc2stc3RhdHVzLWNoZWNrYm94JztcbiAgICB0YXNrU3RhdHVzTGFiZWwuaW5uZXJIVE1MID0gJ0NvbXBsZXRlZD8nO1xuICAgIHRhc2tTdGF0dXNMYWJlbC5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzKTtcblxuICAgIGNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGZvcm1TdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGZvcm1TdWJtaXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGFkZEVkaXQpO1xuXG4gICAgd29ya3NwYWNlLmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRm9ybSk7XG4gICAgY2FyZEZvcm0uYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICAgIGNhcmRGb3JtLmFwcGVuZENoaWxkKHRhc2tQcm9qKTtcbiAgICBjYXJkRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGVzYyk7XG4gICAgY2FyZEZvcm0uYXBwZW5kQ2hpbGQodGFza1N0YXR1c0xhYmVsKTtcbiAgICBjYXJkRm9ybS5hcHBlbmRDaGlsZChmb3JtU3VibWl0KTtcblxuICAgIC8vIGNhcmRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIFRhc2suYXBwZW5kTmV3VGFzayk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cblxuICBnZXRQcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXRQcm9qZWN0KG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9XG5cbiAgZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3M7XG4gIH1cblxuICBzZXRUYXNrcyh0YXNrcykge1xuICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgfVxuXG4gIGFkZFRhc2sodGFzaykge31cblxuICBkZWxldGVUYXNrKHRhc2spIHt9XG5cbiAgc29ydFRhc2tzKCkge31cbn1cbiIsImltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG9saXN0JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuXG5leHBvcnQgY2xhc3MgU3RvcmFnZSB7XG4gIHN0YXRpYyBnZXRUb2RvTGlzdCgpIHt9XG5cbiAgc3RhdGljIHNldFRvZG9MaXN0KHRvZG9MaXN0KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2MsIHN0YXR1cykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgfVxufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICB9XG5cbiAgZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gIH1cblxuICBzZXRQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge31cblxuICBkZWxldGVQcm9qZWN0KHByb2plY3QpIHt9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBVSSBmcm9tICcuL1VJJztcblxuVUkucmVuZGVyKCk7XG5VSS5pbml0QWRkVHlwZUJ1dHRvbnMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==