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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  /* background-color: rgb(37, 40, 46);  dark mode? */\n  display: flex;\n  flex-direction: column;\n  font-family: 'Roboto', sans-serif;\n  /* align-content: center; */\n  align-items: center;\n  margin: 0px;\n  padding: 0px;\n}\n\nhtml {\n  width: 100vw;\n  height: 100%;\n}\nbody {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n}\n\n.header {\n  background-color: #fff;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0px;\n  padding: 1.75em 0 2em;\n  height: 3em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5em;\n  cursor: pointer;\n}\n\n.header-icon {\n  height: 2.75rem;\n}\n\n.header-text {\n  padding: 0px 0.25rem;\n  font-size: 1.5rem;\n  font-family: 'Pacifico', sans-serif;\n  background: -webkit-linear-gradient(#0bb1d4, #9f2fff);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.workspace {\n  position: relative;\n  height: calc(100vh - 9.75em);\n  width: 100%;\n  padding: 0 1em;\n  overflow: scroll;\n}\n\n.underlay {\n  position: absolute;\n  background-color: rgba(128, 128, 128, 0.219);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.button-wrapper {\n  border: 1px solid red;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  width: 80%;\n  max-width: 400px;\n  height: 50%;\n}\n\nh4 {\n  margin: 2rem 2rem;\n  text-align: center;\n  align-items: center;\n  color: rgb(85, 85, 85);\n}\n\n.cancel-create-container {\n  display: flex;\n  align-content: center;\n}\n\n.btn-add-type {\n  border-radius: 1000px;\n  margin: 1rem 2rem;\n  width: 80%;\n  height: 5rem;\n  border: solid 2.5px;\n}\n\n.btn-dismiss-submit {\n  display: inline-flex;\n  width: 50%;\n  justify-items: center;\n  align-items: center;\n  text-align: center;\n  vertical-align: text-bottom;\n  border: none;\n  height: 2rem;\n  padding: 1rem;\n  margin: 1rem 1rem;\n  font-size: 0.75rem;\n  color: transparent;\n  -webkit-text-fill-color: transparent;\n  background: -webkit-linear-gradient(#0bb1d4, #9f2fff);\n  background-clip: text;\n  -webkit-background-clip: text;\n}\n\n.btn-dismiss-submit:active {\n  font-size: 0.9rem;\n}\n\n.nav {\n  display: flex;\n  /* position: fixed; */\n  max-width: 600px;\n  /* position: -webkit-sticky; */\n  width: 100%;\n  bottom: 0;\n  background-color: #fff;\n  margin-top: 0.5em;\n  padding: 0.5em;\n  height: 3em;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 0.5em;\n  padding: 2rem;\n}\n\nbutton:active {\n  mask-size: 2.25em;\n  -webkit-mask-size: 2.25em;\n}\n\n.btn-home,\n.btn-add-task,\n.btn-menu {\n  width: 30vw;\n  height: 2.75em;\n  background: -webkit-linear-gradient(#9f2fff, #0bb1d4);\n  mask-size: 2em;\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-origin: content-box;\n  -webkit-mask-size: 2em;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-origin: content-box;\n}\n\n.btn-home {\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.btn-add-task {\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.btn-menu {\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.new-project-form {\n  display: flex;\n  margin: 3rem;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.new-task-card {\n  height: 100%;\n}\n\n.new-task-form {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n  width: 18rem;\n}\n\ntextarea {\n  resize: none;\n}\n\ninput,\nlabel,\ntextarea {\n  margin: 5px 0px;\n  font-family: sans-serif;\n  font-size: 0.75rem;\n}\n\n#task-status-checkbox {\n  margin: 0px 5px;\n}\n\n.task-status-label {\n  display: block;\n  justify-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;;AAEA;;EAEE,mDAAmD;EACnD,aAAa;EACb,sBAAsB;EACtB,iCAAiC;EACjC,2BAA2B;EAC3B,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;AACA;EACE,aAAa;EACb,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,wBAAwB;EACxB,QAAQ;EACR,qBAAqB;EACrB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,mCAAmC;EACnC,qDAAqD;EACrD,qBAAqB;EACrB,6BAA6B;EAC7B,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,4BAA4B;EAC5B,WAAW;EACX,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,4CAA4C;EAC5C,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,qBAAqB;EACrB,mBAAmB;EACnB,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,uBAAuB;EACvB,UAAU;EACV,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,UAAU;EACV,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,UAAU;EACV,qBAAqB;EACrB,mBAAmB;EACnB,kBAAkB;EAClB,2BAA2B;EAC3B,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,oCAAoC;EACpC,qDAAqD;EACrD,qBAAqB;EACrB,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,gBAAgB;EAChB,8BAA8B;EAC9B,WAAW;EACX,SAAS;EACT,sBAAsB;EACtB,iBAAiB;EACjB,cAAc;EACd,WAAW;EACX,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,oBAAoB;EACpB,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;;;EAGE,WAAW;EACX,cAAc;EACd,qDAAqD;EACrD,cAAc;EACd,sBAAsB;EACtB,qBAAqB;EACrB,wBAAwB;EACxB,sBAAsB;EACtB,8BAA8B;EAC9B,6BAA6B;EAC7B,gCAAgC;AAClC;;AAEA;EACE,mDAAmC;EACnC,2DAA2C;AAC7C;;AAEA;EACE,mDAA2C;EAC3C,2DAAmD;AACrD;;AAEA;EACE,mDAAsC;EACtC,2DAA8C;AAChD;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;;;EAGE,eAAe;EACf,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB","sourcesContent":["*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  /* background-color: rgb(37, 40, 46);  dark mode? */\n  display: flex;\n  flex-direction: column;\n  font-family: 'Roboto', sans-serif;\n  /* align-content: center; */\n  align-items: center;\n  margin: 0px;\n  padding: 0px;\n}\n\nhtml {\n  width: 100vw;\n  height: 100%;\n}\nbody {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n}\n\n.header {\n  background-color: #fff;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0px;\n  padding: 1.75em 0 2em;\n  height: 3em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5em;\n  cursor: pointer;\n}\n\n.header-icon {\n  height: 2.75rem;\n}\n\n.header-text {\n  padding: 0px 0.25rem;\n  font-size: 1.5rem;\n  font-family: 'Pacifico', sans-serif;\n  background: -webkit-linear-gradient(#0bb1d4, #9f2fff);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.workspace {\n  position: relative;\n  height: calc(100vh - 9.75em);\n  width: 100%;\n  padding: 0 1em;\n  overflow: scroll;\n}\n\n.underlay {\n  position: absolute;\n  background-color: rgba(128, 128, 128, 0.219);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.button-wrapper {\n  border: 1px solid red;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  width: 80%;\n  max-width: 400px;\n  height: 50%;\n}\n\nh4 {\n  margin: 2rem 2rem;\n  text-align: center;\n  align-items: center;\n  color: rgb(85, 85, 85);\n}\n\n.cancel-create-container {\n  display: flex;\n  align-content: center;\n}\n\n.btn-add-type {\n  border-radius: 1000px;\n  margin: 1rem 2rem;\n  width: 80%;\n  height: 5rem;\n  border: solid 2.5px;\n}\n\n.btn-dismiss-submit {\n  display: inline-flex;\n  width: 50%;\n  justify-items: center;\n  align-items: center;\n  text-align: center;\n  vertical-align: text-bottom;\n  border: none;\n  height: 2rem;\n  padding: 1rem;\n  margin: 1rem 1rem;\n  font-size: 0.75rem;\n  color: transparent;\n  -webkit-text-fill-color: transparent;\n  background: -webkit-linear-gradient(#0bb1d4, #9f2fff);\n  background-clip: text;\n  -webkit-background-clip: text;\n}\n\n.btn-dismiss-submit:active {\n  font-size: 0.9rem;\n}\n\n.nav {\n  display: flex;\n  /* position: fixed; */\n  max-width: 600px;\n  /* position: -webkit-sticky; */\n  width: 100%;\n  bottom: 0;\n  background-color: #fff;\n  margin-top: 0.5em;\n  padding: 0.5em;\n  height: 3em;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 0.5em;\n  padding: 2rem;\n}\n\nbutton:active {\n  mask-size: 2.25em;\n  -webkit-mask-size: 2.25em;\n}\n\n.btn-home,\n.btn-add-task,\n.btn-menu {\n  width: 30vw;\n  height: 2.75em;\n  background: -webkit-linear-gradient(#9f2fff, #0bb1d4);\n  mask-size: 2em;\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-origin: content-box;\n  -webkit-mask-size: 2em;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-origin: content-box;\n}\n\n.btn-home {\n  mask-image: url(../Assets/home.svg);\n  -webkit-mask-image: url(../Assets/home.svg);\n}\n\n.btn-add-task {\n  mask-image: url(../Assets/mono-svn-add.svg);\n  -webkit-mask-image: url(../Assets/mono-svn-add.svg);\n}\n\n.btn-menu {\n  mask-image: url(../Assets/options.svg);\n  -webkit-mask-image: url(../Assets/options.svg);\n}\n\n.new-project-form {\n  display: flex;\n  margin: 3rem;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.new-task-card {\n  height: 100%;\n}\n\n.new-task-form {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n  width: 18rem;\n}\n\ntextarea {\n  resize: none;\n}\n\ninput,\nlabel,\ntextarea {\n  margin: 5px 0px;\n  font-family: sans-serif;\n  font-size: 0.75rem;\n}\n\n#task-status-checkbox {\n  margin: 0px 5px;\n}\n\n.task-status-label {\n  display: block;\n  justify-items: center;\n}\n"],"sourceRoot":""}]);
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
    if (document.getElementById('underlay')) {
      document.getElementById('underlay').remove();
      document.getElementById('button-wrapper').remove();
    }
    const workspace = document.getElementById('workspace');

    const underlay = document.createElement('div');
    underlay.classList.add('underlay');
    underlay.id = 'underlay';

    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('button-wrapper');
    buttonWrapper.id = 'button-wrapper';

    const addTypePrompt = document.createElement('h4');
    addTypePrompt.classList.add('add-type-prompt-text');
    addTypePrompt.innerHTML = 'What would you like to add?';

    const btnAddTypeProject = document.createElement('button');
    btnAddTypeProject.classList.add('btn-add-type');
    btnAddTypeProject.innerHTML = 'Project';

    const btnAddTypeTask = document.createElement('button');
    btnAddTypeTask.classList.add('btn-add-type');
    btnAddTypeTask.innerHTML = 'Task';

    const btnDismiss = document.createElement('button');
    btnDismiss.classList.add('btn-dismiss-submit');
    btnDismiss.innerHTML = 'cancel';

    workspace.appendChild(underlay);
    workspace.appendChild(buttonWrapper);
    buttonWrapper.appendChild(addTypePrompt);
    buttonWrapper.appendChild(btnAddTypeProject);
    buttonWrapper.appendChild(btnAddTypeTask);
    buttonWrapper.appendChild(btnDismiss);

    underlay.addEventListener('click', () => UI.removeAddTypeButtons());
    btnDismiss.addEventListener('click', () => UI.removeAddTypeButtons());
    btnAddTypeProject.addEventListener('click', () => UI.addProjectCard());
    btnAddTypeTask.addEventListener('click', () => UI.addEditTaskCard());
  }

  static removeAddTypeButtons() {
    const underlay = document.getElementById('underlay');
    const buttonWrapper = document.getElementById('button-wrapper');

    buttonWrapper.remove();
    underlay.remove();
  }

  static addProjectCard() {
    const buttonWrapper = document.getElementById('button-wrapper');
    buttonWrapper.innerHTML = '';

    const cardForm = document.createElement('form');
    cardForm.id = 'new-project-form';
    cardForm.classList.add('new-project-form');

    const projectName = document.createElement('input');
    projectName.setAttribute('type', 'text');
    projectName.setAttribute('name', 'ProjectName');
    projectName.setAttribute('placeholder', 'Project Name');

    const cancelCreateContainer = document.createElement('div');
    cancelCreateContainer.classList.add('cancel-create-container');

    const btnDismiss = document.createElement('button');
    btnDismiss.classList.add('btn-dismiss-submit');
    btnDismiss.innerHTML = 'cancel';

    const formSubmit = document.createElement('button');
    formSubmit.classList.add('btn-dismiss-submit');
    formSubmit.setAttribute('type', 'submit');
    formSubmit.innerHTML = 'create';

    buttonWrapper.appendChild(cardForm);
    cardForm.appendChild(projectName);
    cardForm.appendChild(cancelCreateContainer);
    cancelCreateContainer.appendChild(btnDismiss);
    cancelCreateContainer.appendChild(formSubmit);

    btnDismiss.addEventListener('click', () => UI.removeAddTypeButtons());
    cardForm.addEventListener('submit', () => UI.addNewProject());
  }

  static addNewProject() {}

  static addNewTask() {}

  static addEditTaskCard(
    name = 'Task',
    desc = 'Description',
    project = 'Project',
    status = false,
    addEdit = 'add task',
  ) {
    const buttonWrapper = document.getElementById('button-wrapper');
    buttonWrapper.innerHTML = '';

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

    const cancelCreateContainer = document.createElement('div');
    cancelCreateContainer.classList.add('cancel-create-container');

    const btnDismiss = document.createElement('button');
    btnDismiss.classList.add('btn-dismiss-submit');
    btnDismiss.innerHTML = 'cancel';

    const formSubmit = document.createElement('button');
    formSubmit.classList.add('btn-dismiss-submit');
    formSubmit.setAttribute('type', 'submit');
    formSubmit.innerHTML = addEdit;

    buttonWrapper.appendChild(cardForm);
    cardForm.appendChild(taskName);
    cardForm.appendChild(taskProj);
    cardForm.appendChild(taskDesc);
    cardForm.appendChild(taskStatusLabel);
    cardForm.appendChild(cancelCreateContainer);
    cancelCreateContainer.appendChild(btnDismiss);
    cancelCreateContainer.appendChild(formSubmit);

    btnDismiss.addEventListener('click', () => UI.removeAddTypeButtons());
    cardForm.addEventListener('submit', () => Task.addNewTask());
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

  static addProject(projectName) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hPZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQmtDO0FBQ0Y7QUFDTjs7QUFFbkI7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ047O0FBRVg7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7OztBQ3JCc0I7QUFDQTs7QUFFdEIsa0RBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21vbGVoaWxscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL21vbGVoaWxscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21vbGVoaWxscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21vbGVoaWxscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21vbGVoaWxscy8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9zcmMvdG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21vbGVoaWxscy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21vbGVoaWxscy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21vbGVoaWxscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21vbGVoaWxscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21vbGVoaWxscy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9Bc3NldHMvaG9tZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9Bc3NldHMvbW9uby1zdm4tYWRkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL0Fzc2V0cy9vcHRpb25zLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDQwLCA0Nik7ICBkYXJrIG1vZGU/ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIC8qIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuaHRtbCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gIHRvcDogMHB4O1xcbiAgcGFkZGluZzogMS43NWVtIDAgMmVtO1xcbiAgaGVpZ2h0OiAzZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlci1pY29uIHtcXG4gIGhlaWdodDogMi43NXJlbTtcXG59XFxuXFxuLmhlYWRlci10ZXh0IHtcXG4gIHBhZGRpbmc6IDBweCAwLjI1cmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCMwYmIxZDQsICM5ZjJmZmYpO1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi53b3Jrc3BhY2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOS43NWVtKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAxZW07XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4udW5kZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIxOSk7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5idXR0b24td3JhcHBlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxufVxcblxcbmg0IHtcXG4gIG1hcmdpbjogMnJlbSAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2IoODUsIDg1LCA4NSk7XFxufVxcblxcbi5jYW5jZWwtY3JlYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYnRuLWFkZC10eXBlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcXG4gIG1hcmdpbjogMXJlbSAycmVtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGJvcmRlcjogc29saWQgMi41cHg7XFxufVxcblxcbi5idG4tZGlzbWlzcy1zdWJtaXQge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICB3aWR0aDogNTAlO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDFyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCMwYmIxZDQsICM5ZjJmZmYpO1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxufVxcblxcbi5idG4tZGlzbWlzcy1zdWJtaXQ6YWN0aXZlIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgLyogcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGhlaWdodDogM2VtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgbWFzay1zaXplOiAyLjI1ZW07XFxuICAtd2Via2l0LW1hc2stc2l6ZTogMi4yNWVtO1xcbn1cXG5cXG4uYnRuLWhvbWUsXFxuLmJ0bi1hZGQtdGFzayxcXG4uYnRuLW1lbnUge1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDIuNzVlbTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCM5ZjJmZmYsICMwYmIxZDQpO1xcbiAgbWFzay1zaXplOiAyZW07XFxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgbWFzay1vcmlnaW46IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDJlbTtcXG4gIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgLXdlYmtpdC1tYXNrLW9yaWdpbjogY29udGVudC1ib3g7XFxufVxcblxcbi5idG4taG9tZSB7XFxuICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4uYnRuLWFkZC10YXNrIHtcXG4gIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbi5idG4tbWVudSB7XFxuICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAzcmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmV3LXRhc2stY2FyZCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5uZXctdGFzay1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDE4cmVtO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbmlucHV0LFxcbmxhYmVsLFxcbnRleHRhcmVhIHtcXG4gIG1hcmdpbjogNXB4IDBweDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbn1cXG5cXG4jdGFzay1zdGF0dXMtY2hlY2tib3gge1xcbiAgbWFyZ2luOiAwcHggNXB4O1xcbn1cXG5cXG4udGFzay1zdGF0dXMtbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNl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QUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDQwLCA0Nik7ICBkYXJrIG1vZGU/ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIC8qIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuaHRtbCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gIHRvcDogMHB4O1xcbiAgcGFkZGluZzogMS43NWVtIDAgMmVtO1xcbiAgaGVpZ2h0OiAzZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlci1pY29uIHtcXG4gIGhlaWdodDogMi43NXJlbTtcXG59XFxuXFxuLmhlYWRlci10ZXh0IHtcXG4gIHBhZGRpbmc6IDBweCAwLjI1cmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCMwYmIxZDQsICM5ZjJmZmYpO1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi53b3Jrc3BhY2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOS43NWVtKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAxZW07XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4udW5kZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIxOSk7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5idXR0b24td3JhcHBlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxufVxcblxcbmg0IHtcXG4gIG1hcmdpbjogMnJlbSAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2IoODUsIDg1LCA4NSk7XFxufVxcblxcbi5jYW5jZWwtY3JlYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYnRuLWFkZC10eXBlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcXG4gIG1hcmdpbjogMXJlbSAycmVtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGJvcmRlcjogc29saWQgMi41cHg7XFxufVxcblxcbi5idG4tZGlzbWlzcy1zdWJtaXQge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICB3aWR0aDogNTAlO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDFyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCMwYmIxZDQsICM5ZjJmZmYpO1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxufVxcblxcbi5idG4tZGlzbWlzcy1zdWJtaXQ6YWN0aXZlIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgLyogcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGhlaWdodDogM2VtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgbWFzay1zaXplOiAyLjI1ZW07XFxuICAtd2Via2l0LW1hc2stc2l6ZTogMi4yNWVtO1xcbn1cXG5cXG4uYnRuLWhvbWUsXFxuLmJ0bi1hZGQtdGFzayxcXG4uYnRuLW1lbnUge1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDIuNzVlbTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCM5ZjJmZmYsICMwYmIxZDQpO1xcbiAgbWFzay1zaXplOiAyZW07XFxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgbWFzay1vcmlnaW46IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDJlbTtcXG4gIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgLXdlYmtpdC1tYXNrLW9yaWdpbjogY29udGVudC1ib3g7XFxufVxcblxcbi5idG4taG9tZSB7XFxuICBtYXNrLWltYWdlOiB1cmwoLi4vQXNzZXRzL2hvbWUuc3ZnKTtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKC4uL0Fzc2V0cy9ob21lLnN2Zyk7XFxufVxcblxcbi5idG4tYWRkLXRhc2sge1xcbiAgbWFzay1pbWFnZTogdXJsKC4uL0Fzc2V0cy9tb25vLXN2bi1hZGQuc3ZnKTtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKC4uL0Fzc2V0cy9tb25vLXN2bi1hZGQuc3ZnKTtcXG59XFxuXFxuLmJ0bi1tZW51IHtcXG4gIG1hc2staW1hZ2U6IHVybCguLi9Bc3NldHMvb3B0aW9ucy5zdmcpO1xcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoLi4vQXNzZXRzL29wdGlvbnMuc3ZnKTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogM3JlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm5ldy10YXNrLWNhcmQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubmV3LXRhc2stZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxOHJlbTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5pbnB1dCxcXG5sYWJlbCxcXG50ZXh0YXJlYSB7XFxuICBtYXJnaW46IDVweCAwcHg7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG59XFxuXFxuI3Rhc2stc3RhdHVzLWNoZWNrYm94IHtcXG4gIG1hcmdpbjogMHB4IDVweDtcXG59XFxuXFxuLnRhc2stc3RhdHVzLWxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgTG9nbyBmcm9tICcuLi9Bc3NldHMvbW9sZS5zdmcnO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICBzdGF0aWMgcmVuZGVyKCkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgICBjb25zdCBoZHJMb2dvID0gbmV3IEltYWdlKCk7XG4gICAgICBoZHJMb2dvLnNyYyA9IExvZ287XG4gICAgICBoZHJMb2dvLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1pY29uJyk7XG5cbiAgICAgIGNvbnN0IGhkclR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaGRyVHh0LmlubmVySFRNTCA9ICdNb2xlaGlsbHMnO1xuICAgICAgaGRyVHh0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10ZXh0Jyk7XG5cbiAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZHJMb2dvKTtcbiAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZHJUeHQpO1xuXG4gICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5yZW5kZXJIb21lKCkpO1xuXG4gICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVdvcmtzcGFjZSgpIHtcbiAgICAgIGNvbnN0IHdvcmtzcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgd29ya3NwYWNlLmlkID0gJ3dvcmtzcGFjZSc7XG4gICAgICB3b3Jrc3BhY2UuY2xhc3NMaXN0LmFkZCgnd29ya3NwYWNlJyk7XG5cbiAgICAgIHJldHVybiB3b3Jrc3BhY2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG5cbiAgICAgIGNvbnN0IGJ0bkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ0bkhvbWUuY2xhc3NMaXN0LmFkZCgnYnRuLWhvbWUnKTtcbiAgICAgIGJ0bkhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5yZW5kZXJIb21lKTtcblxuICAgICAgY29uc3QgYnRuQWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnRuQWRkVGFzay5jbGFzc0xpc3QuYWRkKCdidG4tYWRkLXRhc2snKTtcbiAgICAgIGJ0bkFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5pbml0QWRkVHlwZUJ1dHRvbnMoKSk7XG5cbiAgICAgIGNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ0bk1lbnUuY2xhc3NMaXN0LmFkZCgnYnRuLW1lbnUnKTtcbiAgICAgIGJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5yZW5kZXJQcm9qZWN0cyk7XG5cbiAgICAgIG5hdi5hcHBlbmRDaGlsZChidG5Ib21lKTtcbiAgICAgIG5hdi5hcHBlbmRDaGlsZChidG5BZGRUYXNrKTtcbiAgICAgIG5hdi5hcHBlbmRDaGlsZChidG5NZW51KTtcblxuICAgICAgcmV0dXJuIG5hdjtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVdvcmtzcGFjZSgpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcblxuICAgIFVJLnJlbmRlckhvbWUoKTtcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJIb21lKCkge1xuICAgIHdvcmtzcGFjZS5pbm5lckhUTUwgPSAnSE9NRSc7XG4gIH1cblxuICBzdGF0aWMgcmVuZGVyUHJvamVjdHMoKSB7XG4gICAgd29ya3NwYWNlLmlubmVySFRNTCA9ICdQUk9KRUNUUyc7XG4gIH1cblxuICBzdGF0aWMgY2xlYXJXb3Jrc3BhY2UoKSB7XG4gICAgd29ya3NwYWNlLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgc3RhdGljIGluaXRBZGRUeXBlQnV0dG9ucygpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuZGVybGF5JykpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bmRlcmxheScpLnJlbW92ZSgpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi13cmFwcGVyJykucmVtb3ZlKCk7XG4gICAgfVxuICAgIGNvbnN0IHdvcmtzcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3Jrc3BhY2UnKTtcblxuICAgIGNvbnN0IHVuZGVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdW5kZXJsYXkuY2xhc3NMaXN0LmFkZCgndW5kZXJsYXknKTtcbiAgICB1bmRlcmxheS5pZCA9ICd1bmRlcmxheSc7XG5cbiAgICBjb25zdCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdidXR0b24td3JhcHBlcicpO1xuICAgIGJ1dHRvbldyYXBwZXIuaWQgPSAnYnV0dG9uLXdyYXBwZXInO1xuXG4gICAgY29uc3QgYWRkVHlwZVByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgYWRkVHlwZVByb21wdC5jbGFzc0xpc3QuYWRkKCdhZGQtdHlwZS1wcm9tcHQtdGV4dCcpO1xuICAgIGFkZFR5cGVQcm9tcHQuaW5uZXJIVE1MID0gJ1doYXQgd291bGQgeW91IGxpa2UgdG8gYWRkPyc7XG5cbiAgICBjb25zdCBidG5BZGRUeXBlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkFkZFR5cGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2J0bi1hZGQtdHlwZScpO1xuICAgIGJ0bkFkZFR5cGVQcm9qZWN0LmlubmVySFRNTCA9ICdQcm9qZWN0JztcblxuICAgIGNvbnN0IGJ0bkFkZFR5cGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuQWRkVHlwZVRhc2suY2xhc3NMaXN0LmFkZCgnYnRuLWFkZC10eXBlJyk7XG4gICAgYnRuQWRkVHlwZVRhc2suaW5uZXJIVE1MID0gJ1Rhc2snO1xuXG4gICAgY29uc3QgYnRuRGlzbWlzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkRpc21pc3MuY2xhc3NMaXN0LmFkZCgnYnRuLWRpc21pc3Mtc3VibWl0Jyk7XG4gICAgYnRuRGlzbWlzcy5pbm5lckhUTUwgPSAnY2FuY2VsJztcblxuICAgIHdvcmtzcGFjZS5hcHBlbmRDaGlsZCh1bmRlcmxheSk7XG4gICAgd29ya3NwYWNlLmFwcGVuZENoaWxkKGJ1dHRvbldyYXBwZXIpO1xuICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkVHlwZVByb21wdCk7XG4gICAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChidG5BZGRUeXBlUHJvamVjdCk7XG4gICAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChidG5BZGRUeXBlVGFzayk7XG4gICAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChidG5EaXNtaXNzKTtcblxuICAgIHVuZGVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkucmVtb3ZlQWRkVHlwZUJ1dHRvbnMoKSk7XG4gICAgYnRuRGlzbWlzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLnJlbW92ZUFkZFR5cGVCdXR0b25zKCkpO1xuICAgIGJ0bkFkZFR5cGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkuYWRkUHJvamVjdENhcmQoKSk7XG4gICAgYnRuQWRkVHlwZVRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5hZGRFZGl0VGFza0NhcmQoKSk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlQWRkVHlwZUJ1dHRvbnMoKSB7XG4gICAgY29uc3QgdW5kZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5kZXJsYXknKTtcbiAgICBjb25zdCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi13cmFwcGVyJyk7XG5cbiAgICBidXR0b25XcmFwcGVyLnJlbW92ZSgpO1xuICAgIHVuZGVybGF5LnJlbW92ZSgpO1xuICB9XG5cbiAgc3RhdGljIGFkZFByb2plY3RDYXJkKCkge1xuICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLXdyYXBwZXInKTtcbiAgICBidXR0b25XcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgY2FyZEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY2FyZEZvcm0uaWQgPSAnbmV3LXByb2plY3QtZm9ybSc7XG4gICAgY2FyZEZvcm0uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtZm9ybScpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ1Byb2plY3ROYW1lJyk7XG4gICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IE5hbWUnKTtcblxuICAgIGNvbnN0IGNhbmNlbENyZWF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhbmNlbENyZWF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtY3JlYXRlLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYnRuRGlzbWlzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkRpc21pc3MuY2xhc3NMaXN0LmFkZCgnYnRuLWRpc21pc3Mtc3VibWl0Jyk7XG4gICAgYnRuRGlzbWlzcy5pbm5lckhUTUwgPSAnY2FuY2VsJztcblxuICAgIGNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBmb3JtU3VibWl0LmNsYXNzTGlzdC5hZGQoJ2J0bi1kaXNtaXNzLXN1Ym1pdCcpO1xuICAgIGZvcm1TdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGZvcm1TdWJtaXQuaW5uZXJIVE1MID0gJ2NyZWF0ZSc7XG5cbiAgICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGNhcmRGb3JtKTtcbiAgICBjYXJkRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgY2FyZEZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQ3JlYXRlQ29udGFpbmVyKTtcbiAgICBjYW5jZWxDcmVhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuRGlzbWlzcyk7XG4gICAgY2FuY2VsQ3JlYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1TdWJtaXQpO1xuXG4gICAgYnRuRGlzbWlzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLnJlbW92ZUFkZFR5cGVCdXR0b25zKCkpO1xuICAgIGNhcmRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IFVJLmFkZE5ld1Byb2plY3QoKSk7XG4gIH1cblxuICBzdGF0aWMgYWRkTmV3UHJvamVjdCgpIHt9XG5cbiAgc3RhdGljIGFkZE5ld1Rhc2soKSB7fVxuXG4gIHN0YXRpYyBhZGRFZGl0VGFza0NhcmQoXG4gICAgbmFtZSA9ICdUYXNrJyxcbiAgICBkZXNjID0gJ0Rlc2NyaXB0aW9uJyxcbiAgICBwcm9qZWN0ID0gJ1Byb2plY3QnLFxuICAgIHN0YXR1cyA9IGZhbHNlLFxuICAgIGFkZEVkaXQgPSAnYWRkIHRhc2snLFxuICApIHtcbiAgICBjb25zdCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi13cmFwcGVyJyk7XG4gICAgYnV0dG9uV3JhcHBlci5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGNhcmRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNhcmRGb3JtLmlkID0gJ25ldy10YXNrLWZvcm0nO1xuICAgIGNhcmRGb3JtLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWZvcm0nKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRhc2tOYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICdUYXNrTmFtZScpO1xuICAgIHRhc2tOYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBuYW1lKTtcblxuICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0YXNrRGVzYy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRhc2tEZXNjLnNldEF0dHJpYnV0ZSgnbmFtZScsICdUYXNrRGVzY3JpcHRpb24nKTtcbiAgICB0YXNrRGVzYy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgZGVzYyk7XG4gICAgdGFza0Rlc2Muc2V0QXR0cmlidXRlKCdyb3dzJywgNSk7XG5cbiAgICBjb25zdCB0YXNrUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza1Byb2ouc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICB0YXNrUHJvai5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnVGFza1Byb2plY3QnKTtcbiAgICB0YXNrUHJvai5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcHJvamVjdCk7XG5cbiAgICBjb25zdCB0YXNrU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrU3RhdHVzLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIHRhc2tTdGF0dXMuc2V0QXR0cmlidXRlKCduYW1lJywgJ1Rhc2tTdGF0dXMnKTtcbiAgICB0YXNrU3RhdHVzLmNoZWNrZWQgPSBzdGF0dXM7XG4gICAgdGFza1N0YXR1cy5pZCA9ICd0YXNrLXN0YXR1cy1jaGVja2JveCc7XG5cbiAgICBjb25zdCB0YXNrU3RhdHVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRhc2tTdGF0dXNMYWJlbC5jbGFzc0xpc3QuYWRkKCd0YXNrLXN0YXR1cy1sYWJlbCcpO1xuICAgIHRhc2tTdGF0dXNMYWJlbC5odG1sRm9yID0gJ3Rhc2stc3RhdHVzLWNoZWNrYm94JztcbiAgICB0YXNrU3RhdHVzTGFiZWwuaW5uZXJIVE1MID0gJ0NvbXBsZXRlZD8nO1xuICAgIHRhc2tTdGF0dXNMYWJlbC5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzKTtcblxuICAgIGNvbnN0IGNhbmNlbENyZWF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhbmNlbENyZWF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtY3JlYXRlLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYnRuRGlzbWlzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkRpc21pc3MuY2xhc3NMaXN0LmFkZCgnYnRuLWRpc21pc3Mtc3VibWl0Jyk7XG4gICAgYnRuRGlzbWlzcy5pbm5lckhUTUwgPSAnY2FuY2VsJztcblxuICAgIGNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBmb3JtU3VibWl0LmNsYXNzTGlzdC5hZGQoJ2J0bi1kaXNtaXNzLXN1Ym1pdCcpO1xuICAgIGZvcm1TdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGZvcm1TdWJtaXQuaW5uZXJIVE1MID0gYWRkRWRpdDtcblxuICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoY2FyZEZvcm0pO1xuICAgIGNhcmRGb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgICBjYXJkRm9ybS5hcHBlbmRDaGlsZCh0YXNrUHJvaik7XG4gICAgY2FyZEZvcm0uYXBwZW5kQ2hpbGQodGFza0Rlc2MpO1xuICAgIGNhcmRGb3JtLmFwcGVuZENoaWxkKHRhc2tTdGF0dXNMYWJlbCk7XG4gICAgY2FyZEZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQ3JlYXRlQ29udGFpbmVyKTtcbiAgICBjYW5jZWxDcmVhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuRGlzbWlzcyk7XG4gICAgY2FuY2VsQ3JlYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1TdWJtaXQpO1xuXG4gICAgYnRuRGlzbWlzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLnJlbW92ZUFkZFR5cGVCdXR0b25zKCkpO1xuICAgIGNhcmRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IFRhc2suYWRkTmV3VGFzaygpKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxuXG4gIGdldFByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHNldFByb2plY3QobmV3TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgfVxuXG4gIHNldFRhc2tzKHRhc2tzKSB7XG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7fVxuXG4gIGRlbGV0ZVRhc2sodGFzaykge31cblxuICBzb3J0VGFza3MoKSB7fVxufVxuIiwiaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vdG9kb2xpc3QnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5cbmV4cG9ydCBjbGFzcyBTdG9yYWdlIHtcbiAgc3RhdGljIGdldFRvZG9MaXN0KCkge31cblxuICBzdGF0aWMgc2V0VG9kb0xpc3QodG9kb0xpc3QpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdCkpO1xuICB9XG5cbiAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHt9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzYywgc3RhdHVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICB9XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW107XG4gIH1cblxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgfVxuXG4gIHNldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7fVxuXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdCkge31cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IFVJIGZyb20gJy4vVUknO1xuXG5VSS5yZW5kZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==