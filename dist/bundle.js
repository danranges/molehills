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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  display: flex;\n  flex-direction: column;\n  /* align-content: center; */\n  align-items: center;\n  margin: 0px;\n  padding: 0px;\n}\n\nhtml {\n  width: 100vw;\n  height: 100%;\n}\nbody {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n}\n\n.header {\n  background-color: #fff;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0px;\n  padding: 1.75em 0 2em;\n  height: 3em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5em;\n}\n\n.header-icon {\n  height: 2.75rem;\n}\n\n.header-text {\n  padding: 0px 0.25rem;\n  font-size: 1.5rem;\n  font-family: 'Pacifico', sans-serif;\n  background: -webkit-linear-gradient(#0bb1d4, #9f2fff);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.workspace {\n  position: relative;\n  height: calc(100vh - 9em);\n  width: 100%;\n  padding: 0 1em;\n  overflow: scroll;\n}\n\n.underlay {\n  position: absolute;\n  background-color: rgba(128, 128, 128, 0.219);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.button-wrapper {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  width: 80%;\n  max-width: 400px;\n  height: 50%;\n}\n\n.nav {\n  display: flex;\n  /* position: fixed; */\n  max-width: 600px;\n  /* position: -webkit-sticky; */\n  width: 100%;\n  bottom: 0;\n  background-color: #fff;\n  padding: 0.5em;\n  height: 3em;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 0.5em;\n  margin: 2rem;\n}\n\nbutton:active {\n  mask-size: 2.25em;\n  -webkit-mask-size: 2.25em;\n}\n\n.btn-home,\n.btn-add-task,\n.btn-menu {\n  width: 30vw;\n  height: 2.75em;\n  background: -webkit-linear-gradient(#9f2fff, #0bb1d4);\n  mask-size: 2em;\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-origin: content-box;\n  -webkit-mask-size: 2em;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-origin: content-box;\n}\n\n.btn-home {\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.btn-add-task {\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.btn-menu {\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.new-task-overlay {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.new-task-card {\n  height: 100%;\n}\n\n.new-task-form {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n  width: 18rem;\n}\n\ntextarea {\n  resize: none;\n}\n\ninput,\nlabel,\ntextarea {\n  margin: 5px 0px;\n  font-family: sans-serif;\n  font-size: 0.75rem;\n}\n\n#task-status-checkbox {\n  margin: 0px 5px;\n}\n\n.task-status-label {\n  display: block;\n  justify-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;AACA;EACE,aAAa;EACb,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,wBAAwB;EACxB,QAAQ;EACR,qBAAqB;EACrB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,mCAAmC;EACnC,qDAAqD;EACrD,qBAAqB;EACrB,6BAA6B;EAC7B,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;EACX,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,4CAA4C;EAC5C,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,uBAAuB;EACvB,UAAU;EACV,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,gBAAgB;EAChB,8BAA8B;EAC9B,WAAW;EACX,SAAS;EACT,sBAAsB;EACtB,cAAc;EACd,WAAW;EACX,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;;;EAGE,WAAW;EACX,cAAc;EACd,qDAAqD;EACrD,cAAc;EACd,sBAAsB;EACtB,qBAAqB;EACrB,wBAAwB;EACxB,sBAAsB;EACtB,8BAA8B;EAC9B,6BAA6B;EAC7B,gCAAgC;AAClC;;AAEA;EACE,mDAAmC;EACnC,2DAA2C;AAC7C;;AAEA;EACE,mDAA2C;EAC3C,2DAAmD;AACrD;;AAEA;EACE,mDAAsC;EACtC,2DAA8C;AAChD;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;;;EAGE,eAAe;EACf,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB","sourcesContent":["*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  display: flex;\n  flex-direction: column;\n  /* align-content: center; */\n  align-items: center;\n  margin: 0px;\n  padding: 0px;\n}\n\nhtml {\n  width: 100vw;\n  height: 100%;\n}\nbody {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n}\n\n.header {\n  background-color: #fff;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0px;\n  padding: 1.75em 0 2em;\n  height: 3em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5em;\n}\n\n.header-icon {\n  height: 2.75rem;\n}\n\n.header-text {\n  padding: 0px 0.25rem;\n  font-size: 1.5rem;\n  font-family: 'Pacifico', sans-serif;\n  background: -webkit-linear-gradient(#0bb1d4, #9f2fff);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.workspace {\n  position: relative;\n  height: calc(100vh - 9em);\n  width: 100%;\n  padding: 0 1em;\n  overflow: scroll;\n}\n\n.underlay {\n  position: absolute;\n  background-color: rgba(128, 128, 128, 0.219);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.button-wrapper {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  width: 80%;\n  max-width: 400px;\n  height: 50%;\n}\n\n.nav {\n  display: flex;\n  /* position: fixed; */\n  max-width: 600px;\n  /* position: -webkit-sticky; */\n  width: 100%;\n  bottom: 0;\n  background-color: #fff;\n  padding: 0.5em;\n  height: 3em;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 0.5em;\n  margin: 2rem;\n}\n\nbutton:active {\n  mask-size: 2.25em;\n  -webkit-mask-size: 2.25em;\n}\n\n.btn-home,\n.btn-add-task,\n.btn-menu {\n  width: 30vw;\n  height: 2.75em;\n  background: -webkit-linear-gradient(#9f2fff, #0bb1d4);\n  mask-size: 2em;\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-origin: content-box;\n  -webkit-mask-size: 2em;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-origin: content-box;\n}\n\n.btn-home {\n  mask-image: url(../Assets/home.svg);\n  -webkit-mask-image: url(../Assets/home.svg);\n}\n\n.btn-add-task {\n  mask-image: url(../Assets/mono-svn-add.svg);\n  -webkit-mask-image: url(../Assets/mono-svn-add.svg);\n}\n\n.btn-menu {\n  mask-image: url(../Assets/options.svg);\n  -webkit-mask-image: url(../Assets/options.svg);\n}\n\n.new-task-overlay {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.new-task-card {\n  height: 100%;\n}\n\n.new-task-form {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n  width: 18rem;\n}\n\ntextarea {\n  resize: none;\n}\n\ninput,\nlabel,\ntextarea {\n  margin: 5px 0px;\n  font-family: sans-serif;\n  font-size: 0.75rem;\n}\n\n#task-status-checkbox {\n  margin: 0px 5px;\n}\n\n.task-status-label {\n  display: block;\n  justify-items: center;\n}\n"],"sourceRoot":""}]);
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

      const btnAddType = document.createElement('button');
      btnAddType.classList.add('btn-add-type');
      btnAddType.innerHTML = 'Project';

      workspace.appendChild(underlay);
      workspace.appendChild(buttonWrapper);
      buttonWrapper.appendChild(btnAddType);

      underlay.addEventListener('click', () => UI.removeAddTypeButtons());
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4S2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JrQztBQUNGO0FBQ047O0FBRW5CO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05nQztBQUNOOztBQUVYO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7QUNyQnNCO0FBQ0E7O0FBRXRCLGtEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL21vbGVoaWxscy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21vbGVoaWxscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21vbGVoaWxscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vc3JjL3RvZG9saXN0LmpzIiwid2VicGFjazovL21vbGVoaWxscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL21vbGVoaWxscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vQXNzZXRzL2hvbWUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vQXNzZXRzL21vbm8tc3ZuLWFkZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9Bc3NldHMvb3B0aW9ucy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAvKiBhbGlnbi1jb250ZW50OiBjZW50ZXI7ICovXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbmh0bWwge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XFxuICB0b3A6IDBweDtcXG4gIHBhZGRpbmc6IDEuNzVlbSAwIDJlbTtcXG4gIGhlaWdodDogM2VtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi5oZWFkZXItaWNvbiB7XFxuICBoZWlnaHQ6IDIuNzVyZW07XFxufVxcblxcbi5oZWFkZXItdGV4dCB7XFxuICBwYWRkaW5nOiAwcHggMC4yNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdQYWNpZmljbycsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjMGJiMWQ0LCAjOWYyZmZmKTtcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ud29ya3NwYWNlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDllbSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMWVtO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLnVuZGVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yMTkpO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYnV0dG9uLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDUwJTtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIC8qIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgaGVpZ2h0OiAzZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgbWFyZ2luOiAycmVtO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIG1hc2stc2l6ZTogMi4yNWVtO1xcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDIuMjVlbTtcXG59XFxuXFxuLmJ0bi1ob21lLFxcbi5idG4tYWRkLXRhc2ssXFxuLmJ0bi1tZW51IHtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgaGVpZ2h0OiAyLjc1ZW07XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjOWYyZmZmLCAjMGJiMWQ0KTtcXG4gIG1hc2stc2l6ZTogMmVtO1xcbiAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIG1hc2stcG9zaXRpb246IGNlbnRlcjtcXG4gIG1hc2stb3JpZ2luOiBjb250ZW50LWJveDtcXG4gIC13ZWJraXQtbWFzay1zaXplOiAyZW07XFxuICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAtd2Via2l0LW1hc2stcG9zaXRpb246IGNlbnRlcjtcXG4gIC13ZWJraXQtbWFzay1vcmlnaW46IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4uYnRuLWhvbWUge1xcbiAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuLmJ0bi1hZGQtdGFzayB7XFxuICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4uYnRuLW1lbnUge1xcbiAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuLm5ldy10YXNrLW92ZXJsYXkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5uZXctdGFzay1jYXJkIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5ldy10YXNrLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMThyZW07XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuaW5wdXQsXFxubGFiZWwsXFxudGV4dGFyZWEge1xcbiAgbWFyZ2luOiA1cHggMHB4O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxufVxcblxcbiN0YXNrLXN0YXR1cy1jaGVja2JveCB7XFxuICBtYXJnaW46IDBweCA1cHg7XFxufVxcblxcbi50YXNrLXN0YXR1cy1sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsUUFBUTtFQUNSLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLHFEQUFxRDtFQUNyRCxxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBOzs7RUFHRSxXQUFXO0VBQ1gsY0FBYztFQUNkLHFEQUFxRDtFQUNyRCxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbURBQW1DO0VBQ25DLDJEQUEyQztBQUM3Qzs7QUFFQTtFQUNFLG1EQUEyQztFQUMzQywyREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxtREFBc0M7RUFDdEMsMkRBQThDO0FBQ2hEOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuaHRtbCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gIHRvcDogMHB4O1xcbiAgcGFkZGluZzogMS43NWVtIDAgMmVtO1xcbiAgaGVpZ2h0OiAzZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLmhlYWRlci1pY29uIHtcXG4gIGhlaWdodDogMi43NXJlbTtcXG59XFxuXFxuLmhlYWRlci10ZXh0IHtcXG4gIHBhZGRpbmc6IDBweCAwLjI1cmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCMwYmIxZDQsICM5ZjJmZmYpO1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi53b3Jrc3BhY2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOWVtKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAxZW07XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4udW5kZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIxOSk7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5idXR0b24td3JhcHBlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogODAlO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNTAlO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgLyogcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBoZWlnaHQ6IDNlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICBtYXJnaW46IDJyZW07XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgbWFzay1zaXplOiAyLjI1ZW07XFxuICAtd2Via2l0LW1hc2stc2l6ZTogMi4yNWVtO1xcbn1cXG5cXG4uYnRuLWhvbWUsXFxuLmJ0bi1hZGQtdGFzayxcXG4uYnRuLW1lbnUge1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDIuNzVlbTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCM5ZjJmZmYsICMwYmIxZDQpO1xcbiAgbWFzay1zaXplOiAyZW07XFxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgbWFzay1vcmlnaW46IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDJlbTtcXG4gIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgLXdlYmtpdC1tYXNrLW9yaWdpbjogY29udGVudC1ib3g7XFxufVxcblxcbi5idG4taG9tZSB7XFxuICBtYXNrLWltYWdlOiB1cmwoLi4vQXNzZXRzL2hvbWUuc3ZnKTtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKC4uL0Fzc2V0cy9ob21lLnN2Zyk7XFxufVxcblxcbi5idG4tYWRkLXRhc2sge1xcbiAgbWFzay1pbWFnZTogdXJsKC4uL0Fzc2V0cy9tb25vLXN2bi1hZGQuc3ZnKTtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKC4uL0Fzc2V0cy9tb25vLXN2bi1hZGQuc3ZnKTtcXG59XFxuXFxuLmJ0bi1tZW51IHtcXG4gIG1hc2staW1hZ2U6IHVybCguLi9Bc3NldHMvb3B0aW9ucy5zdmcpO1xcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoLi4vQXNzZXRzL29wdGlvbnMuc3ZnKTtcXG59XFxuXFxuLm5ldy10YXNrLW92ZXJsYXkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5uZXctdGFzay1jYXJkIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5ldy10YXNrLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMThyZW07XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuaW5wdXQsXFxubGFiZWwsXFxudGV4dGFyZWEge1xcbiAgbWFyZ2luOiA1cHggMHB4O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxufVxcblxcbiN0YXNrLXN0YXR1cy1jaGVja2JveCB7XFxuICBtYXJnaW46IDBweCA1cHg7XFxufVxcblxcbi50YXNrLXN0YXR1cy1sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IExvZ28gZnJvbSAnLi4vQXNzZXRzL21vbGUuc3ZnJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgc3RhdGljIHJlbmRlcigpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgICAgY29uc3QgaGRyTG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgICAgaGRyTG9nby5zcmMgPSBMb2dvO1xuICAgICAgaGRyTG9nby5jbGFzc0xpc3QuYWRkKCdoZWFkZXItaWNvbicpO1xuXG4gICAgICBjb25zdCBoZHJUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGhkclR4dC5pbm5lckhUTUwgPSAnTW9sZWhpbGxzJztcbiAgICAgIGhkclR4dC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItdGV4dCcpO1xuXG4gICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGRyTG9nbyk7XG4gICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGRyVHh0KTtcblxuICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVXb3Jrc3BhY2UoKSB7XG4gICAgICBjb25zdCB3b3Jrc3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHdvcmtzcGFjZS5pZCA9ICd3b3Jrc3BhY2UnO1xuICAgICAgd29ya3NwYWNlLmNsYXNzTGlzdC5hZGQoJ3dvcmtzcGFjZScpO1xuXG4gICAgICByZXR1cm4gd29ya3NwYWNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuXG4gICAgICBjb25zdCBidG5Ib21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBidG5Ib21lLmNsYXNzTGlzdC5hZGQoJ2J0bi1ob21lJyk7XG4gICAgICBidG5Ib21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkucmVuZGVySG9tZSk7XG5cbiAgICAgIGNvbnN0IGJ0bkFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ0bkFkZFRhc2suY2xhc3NMaXN0LmFkZCgnYnRuLWFkZC10YXNrJyk7XG4gICAgICBidG5BZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkuaW5pdEFkZFR5cGVCdXR0b25zKCkpO1xuXG4gICAgICBjb25zdCBidG5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBidG5NZW51LmNsYXNzTGlzdC5hZGQoJ2J0bi1tZW51Jyk7XG4gICAgICBidG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkucmVuZGVyUHJvamVjdHMpO1xuXG4gICAgICBuYXYuYXBwZW5kQ2hpbGQoYnRuSG9tZSk7XG4gICAgICBuYXYuYXBwZW5kQ2hpbGQoYnRuQWRkVGFzayk7XG4gICAgICBuYXYuYXBwZW5kQ2hpbGQoYnRuTWVudSk7XG5cbiAgICAgIHJldHVybiBuYXY7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVXb3Jrc3BhY2UoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gIH1cblxuICBzdGF0aWMgcmVuZGVyV29ya3NwYWNlKHByb2plY3QgPSAnKicpIHt9XG5cbiAgc3RhdGljIHJlbmRlckhvbWUoKSB7XG4gICAgd29ya3NwYWNlLmlubmVySFRNTCA9ICdIT01FJztcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJQcm9qZWN0cygpIHtcbiAgICB3b3Jrc3BhY2UuaW5uZXJIVE1MID0gJ1BST0pFQ1RTJztcbiAgfVxuXG4gIHN0YXRpYyBjbGVhcldvcmtzcGFjZSgpIHtcbiAgICB3b3Jrc3BhY2UuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBzdGF0aWMgaW5pdEFkZFR5cGVCdXR0b25zKCkge1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuZGVybGF5JykpIHtcbiAgICAgIGNvbnN0IHdvcmtzcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3Jrc3BhY2UnKTtcblxuICAgICAgY29uc3QgdW5kZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHVuZGVybGF5LmNsYXNzTGlzdC5hZGQoJ3VuZGVybGF5Jyk7XG4gICAgICB1bmRlcmxheS5pZCA9ICd1bmRlcmxheSc7XG5cbiAgICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGJ1dHRvbldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXdyYXBwZXInKTtcbiAgICAgIGJ1dHRvbldyYXBwZXIuaWQgPSAnYnV0dG9uLXdyYXBwZXInO1xuXG4gICAgICBjb25zdCBidG5BZGRUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBidG5BZGRUeXBlLmNsYXNzTGlzdC5hZGQoJ2J0bi1hZGQtdHlwZScpO1xuICAgICAgYnRuQWRkVHlwZS5pbm5lckhUTUwgPSAnUHJvamVjdCc7XG5cbiAgICAgIHdvcmtzcGFjZS5hcHBlbmRDaGlsZCh1bmRlcmxheSk7XG4gICAgICB3b3Jrc3BhY2UuYXBwZW5kQ2hpbGQoYnV0dG9uV3JhcHBlcik7XG4gICAgICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGJ0bkFkZFR5cGUpO1xuXG4gICAgICB1bmRlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLnJlbW92ZUFkZFR5cGVCdXR0b25zKCkpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVBZGRUeXBlQnV0dG9ucygpIHtcbiAgICBjb25zdCB1bmRlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bmRlcmxheScpO1xuICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLXdyYXBwZXInKTtcblxuICAgIHVuZGVybGF5LnJlbW92ZSgpO1xuICAgIGJ1dHRvbldyYXBwZXIucmVtb3ZlKCk7XG4gIH1cblxuICBzdGF0aWMgYWRkRWRpdFRhc2tDYXJkKFxuICAgIG5hbWUgPSAnVGFzaycsXG4gICAgZGVzYyA9ICdEZXNjcmlwdGlvbicsXG4gICAgcHJvamVjdCA9ICdQcm9qZWN0JyxcbiAgICBzdGF0dXMgPSBmYWxzZSxcbiAgICBhZGRFZGl0ID0gJ0FkZCBUYXNrJyxcbiAgKSB7XG4gICAgY29uc3Qgd29ya3NwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmtzcGFjZScpO1xuICAgIHdvcmtzcGFjZS5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLW92ZXJsYXknKTtcblxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWNhcmQnKTtcblxuICAgIGNvbnN0IGNhcmRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNhcmRGb3JtLmlkID0gJ25ldy10YXNrLWZvcm0nO1xuICAgIGNhcmRGb3JtLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWZvcm0nKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRhc2tOYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICdUYXNrTmFtZScpO1xuICAgIHRhc2tOYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBuYW1lKTtcblxuICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0YXNrRGVzYy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRhc2tEZXNjLnNldEF0dHJpYnV0ZSgnbmFtZScsICdUYXNrRGVzY3JpcHRpb24nKTtcbiAgICB0YXNrRGVzYy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgZGVzYyk7XG4gICAgdGFza0Rlc2Muc2V0QXR0cmlidXRlKCdyb3dzJywgNSk7XG5cbiAgICBjb25zdCB0YXNrUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza1Byb2ouc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICB0YXNrUHJvai5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnVGFza1Byb2plY3QnKTtcbiAgICB0YXNrUHJvai5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcHJvamVjdCk7XG5cbiAgICBjb25zdCB0YXNrU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrU3RhdHVzLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIHRhc2tTdGF0dXMuc2V0QXR0cmlidXRlKCduYW1lJywgJ1Rhc2tTdGF0dXMnKTtcbiAgICB0YXNrU3RhdHVzLmNoZWNrZWQgPSBzdGF0dXM7XG4gICAgdGFza1N0YXR1cy5pZCA9ICd0YXNrLXN0YXR1cy1jaGVja2JveCc7XG5cbiAgICBjb25zdCB0YXNrU3RhdHVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRhc2tTdGF0dXNMYWJlbC5jbGFzc0xpc3QuYWRkKCd0YXNrLXN0YXR1cy1sYWJlbCcpO1xuICAgIHRhc2tTdGF0dXNMYWJlbC5odG1sRm9yID0gJ3Rhc2stc3RhdHVzLWNoZWNrYm94JztcbiAgICB0YXNrU3RhdHVzTGFiZWwuaW5uZXJIVE1MID0gJ0NvbXBsZXRlZD8nO1xuICAgIHRhc2tTdGF0dXNMYWJlbC5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzKTtcblxuICAgIGNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGZvcm1TdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGZvcm1TdWJtaXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGFkZEVkaXQpO1xuXG4gICAgd29ya3NwYWNlLmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRm9ybSk7XG4gICAgY2FyZEZvcm0uYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICAgIGNhcmRGb3JtLmFwcGVuZENoaWxkKHRhc2tQcm9qKTtcbiAgICBjYXJkRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGVzYyk7XG4gICAgY2FyZEZvcm0uYXBwZW5kQ2hpbGQodGFza1N0YXR1c0xhYmVsKTtcbiAgICBjYXJkRm9ybS5hcHBlbmRDaGlsZChmb3JtU3VibWl0KTtcblxuICAgIC8vIGNhcmRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIFRhc2suYXBwZW5kTmV3VGFzayk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cblxuICBnZXRQcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXRQcm9qZWN0KG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9XG5cbiAgZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3M7XG4gIH1cblxuICBzZXRUYXNrcyh0YXNrcykge1xuICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgfVxuXG4gIGFkZFRhc2sodGFzaykge31cblxuICBkZWxldGVUYXNrKHRhc2spIHt9XG5cbiAgc29ydFRhc2tzKCkge31cbn1cbiIsImltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG9saXN0JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuXG5leHBvcnQgY2xhc3MgU3RvcmFnZSB7XG4gIHN0YXRpYyBnZXRUb2RvTGlzdCgpIHt9XG5cbiAgc3RhdGljIHNldFRvZG9MaXN0KHRvZG9MaXN0KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2MsIHN0YXR1cykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgfVxufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICB9XG5cbiAgZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gIH1cblxuICBzZXRQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge31cblxuICBkZWxldGVQcm9qZWN0KHByb2plY3QpIHt9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBVSSBmcm9tICcuL1VJJztcblxuVUkucmVuZGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=