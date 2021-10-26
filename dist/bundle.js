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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/mole.svg */ "./Assets/mole.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/home.svg */ "./Assets/home.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/mono-svn-add.svg */ "./Assets/mono-svn-add.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/options.svg */ "./Assets/options.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  /* background-color: rgb(37, 40, 46);  dark mode? */\n  display: flex;\n  flex-direction: column;\n  font-family: 'Roboto', sans-serif;\n  /* align-content: center; */\n  align-items: center;\n  margin: 0px;\n  padding: 0px;\n}\n\nhtml {\n  width: 100vw;\n  height: 100%;\n}\nbody {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n}\n\n.header {\n  background-color: #fff;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0px;\n  padding: 1.75em 0 2em;\n  height: 3em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5em;\n  cursor: pointer;\n}\n\n.header-icon {\n  height: 3rem;\n  background-color: black;\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  mask-size: 2em;\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-origin: content-box;\n  -webkit-mask-size: 2em;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-origin: content-box;\n}\n\n.header-text {\n  padding: 0px 0.25rem;\n  font-size: 1.5rem;\n  font-family: 'Pacifico', sans-serif;\n  background-color: black;\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.workspace {\n  position: relative;\n  height: calc(100vh - 9.75em);\n  width: 100%;\n  padding: 0 1em;\n  overflow: scroll;\n}\n\n.underlay {\n  position: absolute;\n  background-color: rgba(128, 128, 128, 0.219);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.button-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  width: 80%;\n  max-width: 400px;\n  border-radius: 2rem;\n  padding-bottom: 1rem;\n}\n\nh4 {\n  margin: 2rem 2rem;\n  text-align: center;\n  align-items: center;\n  color: rgb(85, 85, 85);\n}\n\n.cancel-create-container {\n  display: flex;\n  align-content: center;\n}\n\n.project-header {\n  display: flex;\n  align-items: flex-end;\n  align-content: flex-end;\n  justify-content: space-between;\n  height: 2rem;\n}\n\n.project-name {\n  user-select: none;\n  margin-bottom: 0;\n  width: 70%;\n}\n\n.task-item {\n  user-select: none;\n  padding-left: 1rem;\n  font-size: 0.8625rem;\n  max-width: 80%;\n  margin: 0.75rem 0 0 0;\n}\n\n.done {\n  color: grey;\n  text-decoration: line-through;\n}\n\n.new-project-name-input {\n  border: 1px solid black;\n  border-radius: 0.25em;\n  outline: none;\n  align-self: flex-end;\n  vertical-align: middle;\n  margin-left: 0;\n  margin-bottom: 0;\n  padding: 0.125rem 0 0 0.5rem;\n  height: 1.25rem;\n  font-size: 1rem;\n  width: 60%;\n}\n\n.btn-add-type {\n  border-radius: 1000px;\n  margin: 1rem 2rem;\n  width: 80%;\n  height: 5rem;\n  border: solid 2.5px;\n}\n\n.btn-dismiss-submit {\n  display: inline-flex;\n  width: 50%;\n  justify-items: center;\n  align-items: center;\n  text-align: center;\n  vertical-align: text-bottom;\n  border: none;\n  height: 2rem;\n  padding: 1rem;\n  margin: 1rem 1rem 0;\n  font-size: 0.75rem;\n  color: transparent;\n  -webkit-text-fill-color: transparent;\n  background-color: black;\n\n  background-clip: text;\n  -webkit-background-clip: text;\n}\n\n.btn-dismiss-submit:active {\n  font-size: 0.9rem;\n}\n\n.nav {\n  display: flex;\n  /* position: fixed; */\n  max-width: 600px;\n  /* position: -webkit-sticky; */\n  width: 100%;\n  bottom: 0;\n  background-color: #fff;\n  margin-top: 0.5em;\n  padding: 0.5em;\n  height: 3em;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 0.5em;\n  padding: 2rem;\n}\n\nbutton:hover,\nbutton:active {\n  mask-size: 2.25em;\n  -webkit-mask-size: 2.25em;\n}\n\n.btn-home,\n.btn-add,\n.btn-menu {\n  width: 30vw;\n  height: 2.75em;\n  background-color: black;\n\n  mask-size: 2em;\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-origin: content-box;\n  -webkit-mask-size: 2em;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-origin: content-box;\n}\n\n.btn-home {\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.btn-add {\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.btn-menu {\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.btn-delete-project,\n.btn-add-task {\n  text-align: center;\n  vertical-align: middle;\n  height: 1rem;\n  padding: 0.625rem 0.5rem 0.75rem;\n  margin-left: 0.5em;\n}\n\n.new-project-form {\n  display: flex;\n  margin: 2.25rem 1rem 1rem;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.new-task-card {\n  height: 100%;\n}\n\n.new-task-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 2.25rem 1rem 1rem;\n  width: 18rem;\n}\n\ntextarea {\n  resize: none;\n}\n\ninput,\nlabel,\ntextarea,\nselect {\n  margin: 0.5rem;\n  font-family: sans-serif;\n  font-size: 0.75rem;\n  width: 90%;\n}\n\n.task-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  /* background-color: rgb(37, 40, 46);  dark mode? */\n  display: flex;\n  flex-direction: column;\n  font-family: 'Roboto', sans-serif;\n  /* align-content: center; */\n  align-items: center;\n  margin: 0px;\n  padding: 0px;\n}\n\nhtml {\n  width: 100vw;\n  height: 100%;\n}\nbody {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n}\n\n.header {\n  background-color: #fff;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0px;\n  padding: 1.75em 0 2em;\n  height: 3em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5em;\n  cursor: pointer;\n}\n\n.header-icon {\n  height: 3rem;\n  background-color: black;\n  mask-image: url(../Assets/mole.svg);\n  mask-size: 2em;\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-origin: content-box;\n  -webkit-mask-size: 2em;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-origin: content-box;\n}\n\n.header-text {\n  padding: 0px 0.25rem;\n  font-size: 1.5rem;\n  font-family: 'Pacifico', sans-serif;\n  background-color: black;\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.workspace {\n  position: relative;\n  height: calc(100vh - 9.75em);\n  width: 100%;\n  padding: 0 1em;\n  overflow: scroll;\n}\n\n.underlay {\n  position: absolute;\n  background-color: rgba(128, 128, 128, 0.219);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.button-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  width: 80%;\n  max-width: 400px;\n  border-radius: 2rem;\n  padding-bottom: 1rem;\n}\n\nh4 {\n  margin: 2rem 2rem;\n  text-align: center;\n  align-items: center;\n  color: rgb(85, 85, 85);\n}\n\n.cancel-create-container {\n  display: flex;\n  align-content: center;\n}\n\n.project-header {\n  display: flex;\n  align-items: flex-end;\n  align-content: flex-end;\n  justify-content: space-between;\n  height: 2rem;\n}\n\n.project-name {\n  user-select: none;\n  margin-bottom: 0;\n  width: 70%;\n}\n\n.task-item {\n  user-select: none;\n  padding-left: 1rem;\n  font-size: 0.8625rem;\n  max-width: 80%;\n  margin: 0.75rem 0 0 0;\n}\n\n.done {\n  color: grey;\n  text-decoration: line-through;\n}\n\n.new-project-name-input {\n  border: 1px solid black;\n  border-radius: 0.25em;\n  outline: none;\n  align-self: flex-end;\n  vertical-align: middle;\n  margin-left: 0;\n  margin-bottom: 0;\n  padding: 0.125rem 0 0 0.5rem;\n  height: 1.25rem;\n  font-size: 1rem;\n  width: 60%;\n}\n\n.btn-add-type {\n  border-radius: 1000px;\n  margin: 1rem 2rem;\n  width: 80%;\n  height: 5rem;\n  border: solid 2.5px;\n}\n\n.btn-dismiss-submit {\n  display: inline-flex;\n  width: 50%;\n  justify-items: center;\n  align-items: center;\n  text-align: center;\n  vertical-align: text-bottom;\n  border: none;\n  height: 2rem;\n  padding: 1rem;\n  margin: 1rem 1rem 0;\n  font-size: 0.75rem;\n  color: transparent;\n  -webkit-text-fill-color: transparent;\n  background-color: black;\n\n  background-clip: text;\n  -webkit-background-clip: text;\n}\n\n.btn-dismiss-submit:active {\n  font-size: 0.9rem;\n}\n\n.nav {\n  display: flex;\n  /* position: fixed; */\n  max-width: 600px;\n  /* position: -webkit-sticky; */\n  width: 100%;\n  bottom: 0;\n  background-color: #fff;\n  margin-top: 0.5em;\n  padding: 0.5em;\n  height: 3em;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 0.5em;\n  padding: 2rem;\n}\n\nbutton:hover,\nbutton:active {\n  mask-size: 2.25em;\n  -webkit-mask-size: 2.25em;\n}\n\n.btn-home,\n.btn-add,\n.btn-menu {\n  width: 30vw;\n  height: 2.75em;\n  background-color: black;\n\n  mask-size: 2em;\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-origin: content-box;\n  -webkit-mask-size: 2em;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-origin: content-box;\n}\n\n.btn-home {\n  mask-image: url(../Assets/home.svg);\n  -webkit-mask-image: url(../Assets/home.svg);\n}\n\n.btn-add {\n  mask-image: url(../Assets/mono-svn-add.svg);\n  -webkit-mask-image: url(../Assets/mono-svn-add.svg);\n}\n\n.btn-menu {\n  mask-image: url(../Assets/options.svg);\n  -webkit-mask-image: url(../Assets/options.svg);\n}\n\n.btn-delete-project,\n.btn-add-task {\n  text-align: center;\n  vertical-align: middle;\n  height: 1rem;\n  padding: 0.625rem 0.5rem 0.75rem;\n  margin-left: 0.5em;\n}\n\n.new-project-form {\n  display: flex;\n  margin: 2.25rem 1rem 1rem;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.new-task-card {\n  height: 100%;\n}\n\n.new-task-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 2.25rem 1rem 1rem;\n  width: 18rem;\n}\n\ntextarea {\n  resize: none;\n}\n\ninput,\nlabel,\ntextarea,\nselect {\n  margin: 0.5rem;\n  font-family: sans-serif;\n  font-size: 0.75rem;\n  width: 90%;\n}\n\n.task-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todolist */ "./src/todolist.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task */ "./src/task.js");






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
      btnAddTask.classList.add('btn-add');
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
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].initTodoList();
  }

  static renderHome() {
    workspace.innerHTML = 'HOME';
  }

  static renderProjects() {
    const todoList = _storage__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoList();
    workspace.innerHTML = '';
    todoList.getProjects().forEach((project) => UI.initProjectHeader(project));
  }

  static initProjectHeader(project) {
    const workspace = document.getElementById('workspace');

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('container');

    const projectHeader = document.createElement('div');
    projectHeader.classList.add('project-header');

    const projectName = document.createElement('p');
    projectName.classList.add('project-name');
    projectName.innerHTML = project.name;

    const projectBtnContainer = document.createElement('div');
    projectBtnContainer.classList.add('project-btn-container');

    const btnShowAddTask = document.createElement('button');
    btnShowAddTask.classList.add('btn-add-task');
    btnShowAddTask.innerHTML = '+';

    const btnDeleteProject = document.createElement('button');
    btnDeleteProject.classList.add('btn-delete-project');
    btnDeleteProject.innerHTML = '×';

    const addTaskCard = UI.addTaskHeaderView(project);

    const tasksContainer = UI.renderTasks(project);

    workspace.appendChild(projectContainer);
    projectContainer.appendChild(projectHeader);
    projectContainer.appendChild(addTaskCard);
    projectContainer.appendChild(tasksContainer);
    projectHeader.appendChild(projectName);
    projectHeader.appendChild(projectBtnContainer);
    projectBtnContainer.appendChild(btnShowAddTask);
    projectBtnContainer.appendChild(btnDeleteProject);

    btnDeleteProject.addEventListener('click', () => UI.deleteProject(project));
    projectName.addEventListener('dblclick', () =>
      UI.editProjectNameHeaderView(project, projectHeader),
    );
    btnShowAddTask.addEventListener('click', () =>
      UI.showAddTaskHeaderView(addTaskCard),
    );
  }

  static renderTasks(project) {
    const tasksContainer = document.createElement('div');

    project.getTasks().forEach((task) => {
      const taskItem = document.createElement('div');
      taskItem.classList.add('task-container');

      const taskName = document.createElement('p');
      taskName.classList.add('task-item');
      if (task.status) taskName.classList.add('done');
      taskName.innerHTML = task.name;

      const btnDelete = document.createElement('button');
      btnDelete.classList.add('btn-delete-project');
      btnDelete.innerHTML = '×';

      taskItem.appendChild(taskName);
      taskItem.appendChild(btnDelete);

      taskItem.addEventListener('dblclick', () => {
        UI.markTaskDone(project, task, taskItem);
      });
      btnDelete.addEventListener('click', () => {
        UI.deleteTask(project, task);
      });

      tasksContainer.appendChild(taskItem);
    });

    return tasksContainer;
  }

  static markTaskDone(project, task, taskDOM) {
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].setTaskStatus(project, task);
    taskDOM.classList.toggle('done');
  }

  static showAddTaskHeaderView(addTaskCard) {
    addTaskCard.style.display = 'block';
  }

  static hideTaskHeaderView(addTaskCard, taskNameInput) {
    addTaskCard.style.display = 'none';
    taskNameInput.value = '';
  }

  static deleteTask(project, task) {
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTask(project, task);
    UI.renderProjects();
  }

  static addTaskHeaderView(project) {
    const addTaskCard = document.createElement('div');
    addTaskCard.classList.add('container');

    const taskNameInput = document.createElement('input');
    taskNameInput.setAttribute('type', 'text');
    taskNameInput.setAttribute('name', 'TaskName');
    taskNameInput.setAttribute('placeholder', 'New Task');

    const btnAddTask = document.createElement('button');
    btnAddTask.classList.add('btn-add-task');
    btnAddTask.innerHTML = 'create';

    const btnCancel = document.createElement('button');
    btnCancel.classList.add('btn-add-task');
    btnCancel.innerHTML = 'cancel';

    addTaskCard.appendChild(taskNameInput);
    addTaskCard.appendChild(btnAddTask);
    addTaskCard.appendChild(btnCancel);

    addTaskCard.style.display = 'none';

    btnAddTask.addEventListener('click', () => {
      UI.addNewTask(project, taskNameInput.value);
    });
    btnCancel.addEventListener('click', () => {
      UI.hideTaskHeaderView(addTaskCard, taskNameInput);
    });

    return addTaskCard;
  }

  static editProjectNameHeaderView(project, projectHeader) {
    projectHeader.innerHTML = '';

    const newNameInput = document.createElement('input');
    newNameInput.setAttribute('type', 'text');
    newNameInput.setAttribute('name', 'New Project Name');
    newNameInput.setAttribute('value', project.name);
    newNameInput.classList.add('new-project-name-input');

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('cancel-create-container');

    const btnSubmit = document.createElement('button');
    btnSubmit.classList.add('btn-delete-project');
    btnSubmit.innerHTML = 'update';

    const btnCancel = document.createElement('button');
    btnCancel.classList.add('btn-delete-project');
    btnCancel.innerHTML = 'cancel';

    projectHeader.appendChild(newNameInput);
    projectHeader.appendChild(btnContainer);
    btnContainer.appendChild(btnCancel);
    btnContainer.appendChild(btnSubmit);

    newNameInput.focus();

    btnSubmit.addEventListener('click', () => {
      UI.editProject(project, newNameInput.value);
    });

    btnCancel.addEventListener('click', () => UI.renderProjects());
  }

  static editProject(project, newName) {
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].editProject(project, newName);
    UI.renderProjects();
  }

  static deleteProject(project) {
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject(project);
    UI.renderProjects();
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
    formSubmit.innerHTML = 'create';

    buttonWrapper.appendChild(cardForm);
    cardForm.appendChild(projectName);
    cardForm.appendChild(cancelCreateContainer);
    cancelCreateContainer.appendChild(btnDismiss);
    cancelCreateContainer.appendChild(formSubmit);

    btnDismiss.addEventListener('click', () => UI.removeAddTypeButtons());
    cardForm.addEventListener('submit', (e) => {
      UI.addNewProject(cardForm.elements[0].value);
      e.preventDefault();
    });
  }

  static addNewProject(project) {
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(project);
    UI.removeAddTypeButtons();
    UI.renderProjects();
  }

  static addNewTask(project, taskName) {
    if (taskName) {
      _storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask(project, taskName);
      UI.renderProjects();
    }
  }

  static addEditTaskCard(
    project = 'Project',
    name = 'Task',
    desc = 'Description',
    status = false,
    addEdit = 'create',
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

    const taskProj = UI.initProjectSelection();

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
    cardForm.appendChild(cancelCreateContainer);
    cancelCreateContainer.appendChild(btnDismiss);
    cancelCreateContainer.appendChild(formSubmit);

    btnDismiss.addEventListener('click', () => UI.removeAddTypeButtons());
    cardForm.addEventListener('submit', () => _task__WEBPACK_IMPORTED_MODULE_4__["default"].addNewTask());
  }

  static initProjectSelection() {
    const projectDropdown = document.createElement('select');
    projectDropdown.id = 'project-dropdown';

    const defaultProject = document.createElement('option');
    defaultProject.textContent = 'Select project';
    projectDropdown.appendChild(defaultProject);

    const projectNames = _storage__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoList()
      .getProjects()
      .map((project) => project.name);

    projectNames.sort((a, b) => a.toLowerCase() - b.toLowerCase());

    for (let i = 0; i < projectNames.length; i++) {
      let proj = projectNames[i];
      let el = document.createElement('option');
      el.textContent = proj;
      el.value = proj;
      projectDropdown.appendChild(el);
    }

    return projectDropdown;
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
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


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

  getTask(task) {
    return this.tasks.find(({ name }) => name === task.name);
  }

  addTask(task) {
    this.tasks.push(new _task__WEBPACK_IMPORTED_MODULE_0__["default"](task));
  }

  deleteTask(task) {
    const toDelete = this.tasks.find(({ name }) => name === task.name);
    this.tasks.splice(this.tasks.indexOf(toDelete), 1);
  }

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
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist */ "./src/todolist.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");




class Storage {
  static initTodoList() {
    if (!localStorage.getItem('todoList')) {
      localStorage.setItem('todoList', JSON.stringify(new _todolist__WEBPACK_IMPORTED_MODULE_0__["default"]()));
    }
  }

  static getTodoList() {
    const todoList = Object.assign(
      new _todolist__WEBPACK_IMPORTED_MODULE_0__["default"](),
      JSON.parse(localStorage.getItem('todoList')),
    );

    todoList.setProjects(
      todoList
        .getProjects()
        .map((project) => Object.assign(new _project__WEBPACK_IMPORTED_MODULE_1__["default"](project), project)),
    );

    todoList.getProjects().forEach((project) => {
      project.setTasks(
        project.getTasks().map((task) => Object.assign(new _task__WEBPACK_IMPORTED_MODULE_2__["default"](task), task)),
      );
    });

    return todoList;
  }

  static setTodoList(todoList) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  static addProject(project) {
    const todoList = Storage.getTodoList();
    todoList.addProject(project);
    Storage.setTodoList(todoList);
  }

  static deleteProject(project) {
    const todoList = Storage.getTodoList();
    todoList.deleteProject(project);
    Storage.setTodoList(todoList);
  }

  static editProject(project, newName) {
    const todoList = Storage.getTodoList();
    todoList.getProject(project).setProject(newName);
    Storage.setTodoList(todoList);
  }

  static addTask(project, taskName) {
    const todoList = Storage.getTodoList();
    todoList.getProject(project).addTask(taskName);
    Storage.setTodoList(todoList);
  }

  static deleteTask(project, task) {
    const todoList = Storage.getTodoList();
    todoList.getProject(project).deleteTask(task);
    Storage.setTodoList(todoList);
  }

  static setTaskStatus(project, task) {
    const todoList = Storage.getTodoList();
    todoList.getProject(project).getTask(task).setStatus();
    Storage.setTodoList(todoList);
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
  constructor(name) {
    this.name = name;
    this.status = false;
  }

  getStatus() {
    return this.status;
  }

  setStatus() {
    this.status = !this.status;
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
    projects.sort((a, b) => {
      let x = a.name.toLowerCase(),
        y = b.name.toLowerCase();
      return x == y ? 0 : x > y ? 1 : -1;
    });
    this.projects = projects;
  }

  getProject(project) {
    return this.projects.find(({ name }) => name === project.name);
  }

  addProject(project) {
    this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"](project));
  }

  deleteProject(project) {
    const toDelete = this.projects.find(({ name }) => name === project.name);
    this.projects.splice(this.projects.indexOf(toDelete), 1);
  }
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

module.exports = __webpack_require__.p + "423f4e970950cf00ad5c.svg";

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
_UI__WEBPACK_IMPORTED_MODULE_1__["default"].renderProjects();
_UI__WEBPACK_IMPORTED_MODULE_1__["default"].initProjectSelection();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZzQztBQUNOO0FBQ0U7QUFDRjtBQUNOOztBQUVYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsNkNBQUk7QUFDeEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDZEQUFvQjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsNERBQW1CO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsSUFBSSw4REFBcUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDJEQUFrQjtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsSUFBSSw0REFBbUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBLElBQUksOERBQXFCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxJQUFJLDJEQUFrQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sd0RBQWU7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4Qyx3REFBZTtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlCQUF5Qiw0REFBbUI7QUFDNUM7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoYjBCOztBQUVYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLE1BQU07QUFDcEM7O0FBRUE7QUFDQSx3QkFBd0IsNkNBQUk7QUFDNUI7O0FBRUE7QUFDQSx3Q0FBd0MsTUFBTTtBQUM5QztBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDa0M7QUFDRjtBQUNOOztBQUVYO0FBQ2Y7QUFDQTtBQUNBLDBEQUEwRCxpREFBUTtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLGlEQUFRO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGdEQUFPO0FBQ25EOztBQUVBO0FBQ0E7QUFDQSwyREFBMkQsNkNBQUk7QUFDL0Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiZ0M7QUFDTjs7QUFFWDtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLE1BQU07QUFDdkM7O0FBRUE7QUFDQSwyQkFBMkIsZ0RBQU87QUFDbEM7O0FBRUE7QUFDQSwyQ0FBMkMsTUFBTTtBQUNqRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7O0FDckJzQjtBQUNBOztBQUV0QixrREFBUztBQUNULDBEQUFpQjtBQUNqQixnRUFBdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21vbGVoaWxscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL21vbGVoaWxscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21vbGVoaWxscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21vbGVoaWxscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21vbGVoaWxscy8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9zcmMvdG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21vbGVoaWxscy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21vbGVoaWxscy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21vbGVoaWxscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21vbGVoaWxscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21vbGVoaWxscy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9Bc3NldHMvbW9sZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9Bc3NldHMvaG9tZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9Bc3NldHMvbW9uby1zdm4tYWRkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL0Fzc2V0cy9vcHRpb25zLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCA0MCwgNDYpOyAgZGFyayBtb2RlPyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAvKiBhbGlnbi1jb250ZW50OiBjZW50ZXI7ICovXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbmh0bWwge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XFxuICB0b3A6IDBweDtcXG4gIHBhZGRpbmc6IDEuNzVlbSAwIDJlbTtcXG4gIGhlaWdodDogM2VtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXItaWNvbiB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBtYXNrLXNpemU6IDJlbTtcXG4gIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBtYXNrLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBtYXNrLW9yaWdpbjogY29udGVudC1ib3g7XFxuICAtd2Via2l0LW1hc2stc2l6ZTogMmVtO1xcbiAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAtd2Via2l0LW1hc2stb3JpZ2luOiBjb250ZW50LWJveDtcXG59XFxuXFxuLmhlYWRlci10ZXh0IHtcXG4gIHBhZGRpbmc6IDBweCAwLjI1cmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi53b3Jrc3BhY2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOS43NWVtKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAxZW07XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4udW5kZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIxOSk7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5idXR0b24td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5oNCB7XFxuICBtYXJnaW46IDJyZW0gMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiKDg1LCA4NSwgODUpO1xcbn1cXG5cXG4uY2FuY2VsLWNyZWF0ZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAwLjg2MjVyZW07XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMC43NXJlbSAwIDAgMDtcXG59XFxuXFxuLmRvbmUge1xcbiAgY29sb3I6IGdyZXk7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LW5hbWUtaW5wdXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgcGFkZGluZzogMC4xMjVyZW0gMCAwIDAuNXJlbTtcXG4gIGhlaWdodDogMS4yNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbi5idG4tYWRkLXR5cGUge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcbiAgbWFyZ2luOiAxcmVtIDJyZW07XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgYm9yZGVyOiBzb2xpZCAyLjVweDtcXG59XFxuXFxuLmJ0bi1kaXNtaXNzLXN1Ym1pdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHdpZHRoOiA1MCU7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbjogMXJlbSAxcmVtIDA7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbn1cXG5cXG4uYnRuLWRpc21pc3Mtc3VibWl0OmFjdGl2ZSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIC8qIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBoZWlnaHQ6IDNlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBtYXNrLXNpemU6IDIuMjVlbTtcXG4gIC13ZWJraXQtbWFzay1zaXplOiAyLjI1ZW07XFxufVxcblxcbi5idG4taG9tZSxcXG4uYnRuLWFkZCxcXG4uYnRuLW1lbnUge1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDIuNzVlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcbiAgbWFzay1zaXplOiAyZW07XFxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgbWFzay1vcmlnaW46IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDJlbTtcXG4gIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgLXdlYmtpdC1tYXNrLW9yaWdpbjogY29udGVudC1ib3g7XFxufVxcblxcbi5idG4taG9tZSB7XFxuICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4uYnRuLWFkZCB7XFxuICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG4uYnRuLW1lbnUge1xcbiAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XFxuXFxuLmJ0bi1kZWxldGUtcHJvamVjdCxcXG4uYnRuLWFkZC10YXNrIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBoZWlnaHQ6IDFyZW07XFxuICBwYWRkaW5nOiAwLjYyNXJlbSAwLjVyZW0gMC43NXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMi4yNXJlbSAxcmVtIDFyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5uZXctdGFzay1jYXJkIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5ldy10YXNrLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAyLjI1cmVtIDFyZW0gMXJlbTtcXG4gIHdpZHRoOiAxOHJlbTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5pbnB1dCxcXG5sYWJlbCxcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLG1EQUFtRDtFQUNuRCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQywyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLFFBQVE7RUFDUixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtREFBbUM7RUFDbkMsY0FBYztFQUNkLHNCQUFz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O0FBQ2hEOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOzs7O0VBSUUsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDQwLCA0Nik7ICBkYXJrIG1vZGU/ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIC8qIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuaHRtbCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gIHRvcDogMHB4O1xcbiAgcGFkZGluZzogMS43NWVtIDAgMmVtO1xcbiAgaGVpZ2h0OiAzZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlci1pY29uIHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgbWFzay1pbWFnZTogdXJsKC4uL0Fzc2V0cy9tb2xlLnN2Zyk7XFxuICBtYXNrLXNpemU6IDJlbTtcXG4gIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBtYXNrLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBtYXNrLW9yaWdpbjogY29udGVudC1ib3g7XFxuICAtd2Via2l0LW1hc2stc2l6ZTogMmVtO1xcbiAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAtd2Via2l0LW1hc2stb3JpZ2luOiBjb250ZW50LWJveDtcXG59XFxuXFxuLmhlYWRlci10ZXh0IHtcXG4gIHBhZGRpbmc6IDBweCAwLjI1cmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi53b3Jrc3BhY2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOS43NWVtKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAxZW07XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4udW5kZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIxOSk7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5idXR0b24td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5oNCB7XFxuICBtYXJnaW46IDJyZW0gMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiKDg1LCA4NSwgODUpO1xcbn1cXG5cXG4uY2FuY2VsLWNyZWF0ZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAwLjg2MjVyZW07XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMC43NXJlbSAwIDAgMDtcXG59XFxuXFxuLmRvbmUge1xcbiAgY29sb3I6IGdyZXk7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LW5hbWUtaW5wdXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgcGFkZGluZzogMC4xMjVyZW0gMCAwIDAuNXJlbTtcXG4gIGhlaWdodDogMS4yNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbi5idG4tYWRkLXR5cGUge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcbiAgbWFyZ2luOiAxcmVtIDJyZW07XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgYm9yZGVyOiBzb2xpZCAyLjVweDtcXG59XFxuXFxuLmJ0bi1kaXNtaXNzLXN1Ym1pdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHdpZHRoOiA1MCU7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbjogMXJlbSAxcmVtIDA7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbn1cXG5cXG4uYnRuLWRpc21pc3Mtc3VibWl0OmFjdGl2ZSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIC8qIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBoZWlnaHQ6IDNlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBtYXNrLXNpemU6IDIuMjVlbTtcXG4gIC13ZWJraXQtbWFzay1zaXplOiAyLjI1ZW07XFxufVxcblxcbi5idG4taG9tZSxcXG4uYnRuLWFkZCxcXG4uYnRuLW1lbnUge1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDIuNzVlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcbiAgbWFzay1zaXplOiAyZW07XFxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgbWFzay1vcmlnaW46IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDJlbTtcXG4gIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgLXdlYmtpdC1tYXNrLW9yaWdpbjogY29udGVudC1ib3g7XFxufVxcblxcbi5idG4taG9tZSB7XFxuICBtYXNrLWltYWdlOiB1cmwoLi4vQXNzZXRzL2hvbWUuc3ZnKTtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKC4uL0Fzc2V0cy9ob21lLnN2Zyk7XFxufVxcblxcbi5idG4tYWRkIHtcXG4gIG1hc2staW1hZ2U6IHVybCguLi9Bc3NldHMvbW9uby1zdm4tYWRkLnN2Zyk7XFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCguLi9Bc3NldHMvbW9uby1zdm4tYWRkLnN2Zyk7XFxufVxcblxcbi5idG4tbWVudSB7XFxuICBtYXNrLWltYWdlOiB1cmwoLi4vQXNzZXRzL29wdGlvbnMuc3ZnKTtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKC4uL0Fzc2V0cy9vcHRpb25zLnN2Zyk7XFxufVxcblxcbi5idG4tZGVsZXRlLXByb2plY3QsXFxuLmJ0bi1hZGQtdGFzayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgcGFkZGluZzogMC42MjVyZW0gMC41cmVtIDAuNzVyZW07XFxuICBtYXJnaW4tbGVmdDogMC41ZW07XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDIuMjVyZW0gMXJlbSAxcmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmV3LXRhc2stY2FyZCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5uZXctdGFzay1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMi4yNXJlbSAxcmVtIDFyZW07XFxuICB3aWR0aDogMThyZW07XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuaW5wdXQsXFxubGFiZWwsXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IExvZ28gZnJvbSAnLi4vQXNzZXRzL21vbGUuc3ZnJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi90b2RvbGlzdCc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICBzdGF0aWMgcmVuZGVyKCkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgICBjb25zdCBoZHJMb2dvID0gbmV3IEltYWdlKCk7XG4gICAgICBoZHJMb2dvLnNyYyA9IExvZ287XG4gICAgICBoZHJMb2dvLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1pY29uJyk7XG5cbiAgICAgIGNvbnN0IGhkclR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaGRyVHh0LmlubmVySFRNTCA9ICdNb2xlaGlsbHMnO1xuICAgICAgaGRyVHh0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10ZXh0Jyk7XG5cbiAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZHJMb2dvKTtcbiAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZHJUeHQpO1xuXG4gICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5yZW5kZXJIb21lKCkpO1xuXG4gICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVdvcmtzcGFjZSgpIHtcbiAgICAgIGNvbnN0IHdvcmtzcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgd29ya3NwYWNlLmlkID0gJ3dvcmtzcGFjZSc7XG4gICAgICB3b3Jrc3BhY2UuY2xhc3NMaXN0LmFkZCgnd29ya3NwYWNlJyk7XG5cbiAgICAgIHJldHVybiB3b3Jrc3BhY2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG5cbiAgICAgIGNvbnN0IGJ0bkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ0bkhvbWUuY2xhc3NMaXN0LmFkZCgnYnRuLWhvbWUnKTtcbiAgICAgIGJ0bkhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5yZW5kZXJIb21lKTtcblxuICAgICAgY29uc3QgYnRuQWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnRuQWRkVGFzay5jbGFzc0xpc3QuYWRkKCdidG4tYWRkJyk7XG4gICAgICBidG5BZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkuaW5pdEFkZFR5cGVCdXR0b25zKCkpO1xuXG4gICAgICBjb25zdCBidG5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBidG5NZW51LmNsYXNzTGlzdC5hZGQoJ2J0bi1tZW51Jyk7XG4gICAgICBidG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkucmVuZGVyUHJvamVjdHMpO1xuXG4gICAgICBuYXYuYXBwZW5kQ2hpbGQoYnRuSG9tZSk7XG4gICAgICBuYXYuYXBwZW5kQ2hpbGQoYnRuQWRkVGFzayk7XG4gICAgICBuYXYuYXBwZW5kQ2hpbGQoYnRuTWVudSk7XG5cbiAgICAgIHJldHVybiBuYXY7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVXb3Jrc3BhY2UoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG5cbiAgICBVSS5yZW5kZXJIb21lKCk7XG4gICAgU3RvcmFnZS5pbml0VG9kb0xpc3QoKTtcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJIb21lKCkge1xuICAgIHdvcmtzcGFjZS5pbm5lckhUTUwgPSAnSE9NRSc7XG4gIH1cblxuICBzdGF0aWMgcmVuZGVyUHJvamVjdHMoKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgd29ya3NwYWNlLmlubmVySFRNTCA9ICcnO1xuICAgIHRvZG9MaXN0LmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4gVUkuaW5pdFByb2plY3RIZWFkZXIocHJvamVjdCkpO1xuICB9XG5cbiAgc3RhdGljIGluaXRQcm9qZWN0SGVhZGVyKHByb2plY3QpIHtcbiAgICBjb25zdCB3b3Jrc3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya3NwYWNlJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaGVhZGVyJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICBwcm9qZWN0TmFtZS5pbm5lckhUTUwgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgICBjb25zdCBwcm9qZWN0QnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ0bi1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGJ0blNob3dBZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuU2hvd0FkZFRhc2suY2xhc3NMaXN0LmFkZCgnYnRuLWFkZC10YXNrJyk7XG4gICAgYnRuU2hvd0FkZFRhc2suaW5uZXJIVE1MID0gJysnO1xuXG4gICAgY29uc3QgYnRuRGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkRlbGV0ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnYnRuLWRlbGV0ZS1wcm9qZWN0Jyk7XG4gICAgYnRuRGVsZXRlUHJvamVjdC5pbm5lckhUTUwgPSAnw5cnO1xuXG4gICAgY29uc3QgYWRkVGFza0NhcmQgPSBVSS5hZGRUYXNrSGVhZGVyVmlldyhwcm9qZWN0KTtcblxuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gVUkucmVuZGVyVGFza3MocHJvamVjdCk7XG5cbiAgICB3b3Jrc3BhY2UuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tDYXJkKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tzQ29udGFpbmVyKTtcbiAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RCdG5Db250YWluZXIpO1xuICAgIHByb2plY3RCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuU2hvd0FkZFRhc2spO1xuICAgIHByb2plY3RCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuRGVsZXRlUHJvamVjdCk7XG5cbiAgICBidG5EZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkuZGVsZXRlUHJvamVjdChwcm9qZWN0KSk7XG4gICAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoKSA9PlxuICAgICAgVUkuZWRpdFByb2plY3ROYW1lSGVhZGVyVmlldyhwcm9qZWN0LCBwcm9qZWN0SGVhZGVyKSxcbiAgICApO1xuICAgIGJ0blNob3dBZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgIFVJLnNob3dBZGRUYXNrSGVhZGVyVmlldyhhZGRUYXNrQ2FyZCksXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJUYXNrcyhwcm9qZWN0KSB7XG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHByb2plY3QuZ2V0VGFza3MoKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXInKTtcblxuICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcbiAgICAgIGlmICh0YXNrLnN0YXR1cykgdGFza05hbWUuY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgICAgdGFza05hbWUuaW5uZXJIVE1MID0gdGFzay5uYW1lO1xuXG4gICAgICBjb25zdCBidG5EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ0bkRlbGV0ZS5jbGFzc0xpc3QuYWRkKCdidG4tZGVsZXRlLXByb2plY3QnKTtcbiAgICAgIGJ0bkRlbGV0ZS5pbm5lckhUTUwgPSAnw5cnO1xuXG4gICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChidG5EZWxldGUpO1xuXG4gICAgICB0YXNrSXRlbS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsICgpID0+IHtcbiAgICAgICAgVUkubWFya1Rhc2tEb25lKHByb2plY3QsIHRhc2ssIHRhc2tJdGVtKTtcbiAgICAgIH0pO1xuICAgICAgYnRuRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBVSS5kZWxldGVUYXNrKHByb2plY3QsIHRhc2spO1xuICAgICAgfSk7XG5cbiAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0YXNrc0NvbnRhaW5lcjtcbiAgfVxuXG4gIHN0YXRpYyBtYXJrVGFza0RvbmUocHJvamVjdCwgdGFzaywgdGFza0RPTSkge1xuICAgIFN0b3JhZ2Uuc2V0VGFza1N0YXR1cyhwcm9qZWN0LCB0YXNrKTtcbiAgICB0YXNrRE9NLmNsYXNzTGlzdC50b2dnbGUoJ2RvbmUnKTtcbiAgfVxuXG4gIHN0YXRpYyBzaG93QWRkVGFza0hlYWRlclZpZXcoYWRkVGFza0NhcmQpIHtcbiAgICBhZGRUYXNrQ2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxuXG4gIHN0YXRpYyBoaWRlVGFza0hlYWRlclZpZXcoYWRkVGFza0NhcmQsIHRhc2tOYW1lSW5wdXQpIHtcbiAgICBhZGRUYXNrQ2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRhc2tOYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgfVxuXG4gIHN0YXRpYyBkZWxldGVUYXNrKHByb2plY3QsIHRhc2spIHtcbiAgICBTdG9yYWdlLmRlbGV0ZVRhc2socHJvamVjdCwgdGFzayk7XG4gICAgVUkucmVuZGVyUHJvamVjdHMoKTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRUYXNrSGVhZGVyVmlldyhwcm9qZWN0KSB7XG4gICAgY29uc3QgYWRkVGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRUYXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICB0YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdUYXNrTmFtZScpO1xuICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOZXcgVGFzaycpO1xuXG4gICAgY29uc3QgYnRuQWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkFkZFRhc2suY2xhc3NMaXN0LmFkZCgnYnRuLWFkZC10YXNrJyk7XG4gICAgYnRuQWRkVGFzay5pbm5lckhUTUwgPSAnY3JlYXRlJztcblxuICAgIGNvbnN0IGJ0bkNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkNhbmNlbC5jbGFzc0xpc3QuYWRkKCdidG4tYWRkLXRhc2snKTtcbiAgICBidG5DYW5jZWwuaW5uZXJIVE1MID0gJ2NhbmNlbCc7XG5cbiAgICBhZGRUYXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KTtcbiAgICBhZGRUYXNrQ2FyZC5hcHBlbmRDaGlsZChidG5BZGRUYXNrKTtcbiAgICBhZGRUYXNrQ2FyZC5hcHBlbmRDaGlsZChidG5DYW5jZWwpO1xuXG4gICAgYWRkVGFza0NhcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGJ0bkFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBVSS5hZGROZXdUYXNrKHByb2plY3QsIHRhc2tOYW1lSW5wdXQudmFsdWUpO1xuICAgIH0pO1xuICAgIGJ0bkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIFVJLmhpZGVUYXNrSGVhZGVyVmlldyhhZGRUYXNrQ2FyZCwgdGFza05hbWVJbnB1dCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYWRkVGFza0NhcmQ7XG4gIH1cblxuICBzdGF0aWMgZWRpdFByb2plY3ROYW1lSGVhZGVyVmlldyhwcm9qZWN0LCBwcm9qZWN0SGVhZGVyKSB7XG4gICAgcHJvamVjdEhlYWRlci5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IG5ld05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmV3TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmV3TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdOZXcgUHJvamVjdCBOYW1lJyk7XG4gICAgbmV3TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcm9qZWN0Lm5hbWUpO1xuICAgIG5ld05hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1uYW1lLWlucHV0Jyk7XG5cbiAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWNyZWF0ZS1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0blN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdidG4tZGVsZXRlLXByb2plY3QnKTtcbiAgICBidG5TdWJtaXQuaW5uZXJIVE1MID0gJ3VwZGF0ZSc7XG5cbiAgICBjb25zdCBidG5DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5DYW5jZWwuY2xhc3NMaXN0LmFkZCgnYnRuLWRlbGV0ZS1wcm9qZWN0Jyk7XG4gICAgYnRuQ2FuY2VsLmlubmVySFRNTCA9ICdjYW5jZWwnO1xuXG4gICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChuZXdOYW1lSW5wdXQpO1xuICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQ2FuY2VsKTtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuU3VibWl0KTtcblxuICAgIG5ld05hbWVJbnB1dC5mb2N1cygpO1xuXG4gICAgYnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgVUkuZWRpdFByb2plY3QocHJvamVjdCwgbmV3TmFtZUlucHV0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIGJ0bkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLnJlbmRlclByb2plY3RzKCkpO1xuICB9XG5cbiAgc3RhdGljIGVkaXRQcm9qZWN0KHByb2plY3QsIG5ld05hbWUpIHtcbiAgICBTdG9yYWdlLmVkaXRQcm9qZWN0KHByb2plY3QsIG5ld05hbWUpO1xuICAgIFVJLnJlbmRlclByb2plY3RzKCk7XG4gIH1cblxuICBzdGF0aWMgZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgU3RvcmFnZS5kZWxldGVQcm9qZWN0KHByb2plY3QpO1xuICAgIFVJLnJlbmRlclByb2plY3RzKCk7XG4gIH1cblxuICBzdGF0aWMgY2xlYXJXb3Jrc3BhY2UoKSB7XG4gICAgd29ya3NwYWNlLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgc3RhdGljIGluaXRBZGRUeXBlQnV0dG9ucygpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuZGVybGF5JykpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bmRlcmxheScpLnJlbW92ZSgpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi13cmFwcGVyJykucmVtb3ZlKCk7XG4gICAgfVxuICAgIGNvbnN0IHdvcmtzcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3Jrc3BhY2UnKTtcblxuICAgIGNvbnN0IHVuZGVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdW5kZXJsYXkuY2xhc3NMaXN0LmFkZCgndW5kZXJsYXknKTtcbiAgICB1bmRlcmxheS5pZCA9ICd1bmRlcmxheSc7XG5cbiAgICBjb25zdCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdidXR0b24td3JhcHBlcicpO1xuICAgIGJ1dHRvbldyYXBwZXIuaWQgPSAnYnV0dG9uLXdyYXBwZXInO1xuXG4gICAgY29uc3QgYWRkVHlwZVByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgYWRkVHlwZVByb21wdC5jbGFzc0xpc3QuYWRkKCdhZGQtdHlwZS1wcm9tcHQtdGV4dCcpO1xuICAgIGFkZFR5cGVQcm9tcHQuaW5uZXJIVE1MID0gJ1doYXQgd291bGQgeW91IGxpa2UgdG8gYWRkPyc7XG5cbiAgICBjb25zdCBidG5BZGRUeXBlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkFkZFR5cGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2J0bi1hZGQtdHlwZScpO1xuICAgIGJ0bkFkZFR5cGVQcm9qZWN0LmlubmVySFRNTCA9ICdQcm9qZWN0JztcblxuICAgIGNvbnN0IGJ0bkFkZFR5cGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuQWRkVHlwZVRhc2suY2xhc3NMaXN0LmFkZCgnYnRuLWFkZC10eXBlJyk7XG4gICAgYnRuQWRkVHlwZVRhc2suaW5uZXJIVE1MID0gJ1Rhc2snO1xuXG4gICAgY29uc3QgYnRuRGlzbWlzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkRpc21pc3MuY2xhc3NMaXN0LmFkZCgnYnRuLWRpc21pc3Mtc3VibWl0Jyk7XG4gICAgYnRuRGlzbWlzcy5pbm5lckhUTUwgPSAnY2FuY2VsJztcblxuICAgIHdvcmtzcGFjZS5hcHBlbmRDaGlsZCh1bmRlcmxheSk7XG4gICAgd29ya3NwYWNlLmFwcGVuZENoaWxkKGJ1dHRvbldyYXBwZXIpO1xuICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkVHlwZVByb21wdCk7XG4gICAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChidG5BZGRUeXBlUHJvamVjdCk7XG4gICAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChidG5BZGRUeXBlVGFzayk7XG4gICAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChidG5EaXNtaXNzKTtcblxuICAgIHVuZGVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkucmVtb3ZlQWRkVHlwZUJ1dHRvbnMoKSk7XG4gICAgYnRuRGlzbWlzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLnJlbW92ZUFkZFR5cGVCdXR0b25zKCkpO1xuICAgIGJ0bkFkZFR5cGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkuYWRkUHJvamVjdENhcmQoKSk7XG4gICAgYnRuQWRkVHlwZVRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5hZGRFZGl0VGFza0NhcmQoKSk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlQWRkVHlwZUJ1dHRvbnMoKSB7XG4gICAgY29uc3QgdW5kZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5kZXJsYXknKTtcbiAgICBjb25zdCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi13cmFwcGVyJyk7XG5cbiAgICBidXR0b25XcmFwcGVyLnJlbW92ZSgpO1xuICAgIHVuZGVybGF5LnJlbW92ZSgpO1xuICB9XG5cbiAgc3RhdGljIGFkZFByb2plY3RDYXJkKCkge1xuICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLXdyYXBwZXInKTtcbiAgICBidXR0b25XcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgY2FyZEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY2FyZEZvcm0uaWQgPSAnbmV3LXByb2plY3QtZm9ybSc7XG4gICAgY2FyZEZvcm0uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtZm9ybScpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ1Byb2plY3ROYW1lJyk7XG4gICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IE5hbWUnKTtcblxuICAgIGNvbnN0IGNhbmNlbENyZWF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhbmNlbENyZWF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtY3JlYXRlLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYnRuRGlzbWlzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkRpc21pc3MuY2xhc3NMaXN0LmFkZCgnYnRuLWRpc21pc3Mtc3VibWl0Jyk7XG4gICAgYnRuRGlzbWlzcy5pbm5lckhUTUwgPSAnY2FuY2VsJztcblxuICAgIGNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBmb3JtU3VibWl0LmNsYXNzTGlzdC5hZGQoJ2J0bi1kaXNtaXNzLXN1Ym1pdCcpO1xuICAgIGZvcm1TdWJtaXQuaW5uZXJIVE1MID0gJ2NyZWF0ZSc7XG5cbiAgICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGNhcmRGb3JtKTtcbiAgICBjYXJkRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgY2FyZEZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQ3JlYXRlQ29udGFpbmVyKTtcbiAgICBjYW5jZWxDcmVhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuRGlzbWlzcyk7XG4gICAgY2FuY2VsQ3JlYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1TdWJtaXQpO1xuXG4gICAgYnRuRGlzbWlzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLnJlbW92ZUFkZFR5cGVCdXR0b25zKCkpO1xuICAgIGNhcmRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBVSS5hZGROZXdQcm9qZWN0KGNhcmRGb3JtLmVsZW1lbnRzWzBdLnZhbHVlKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhZGROZXdQcm9qZWN0KHByb2plY3QpIHtcbiAgICBTdG9yYWdlLmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgVUkucmVtb3ZlQWRkVHlwZUJ1dHRvbnMoKTtcbiAgICBVSS5yZW5kZXJQcm9qZWN0cygpO1xuICB9XG5cbiAgc3RhdGljIGFkZE5ld1Rhc2socHJvamVjdCwgdGFza05hbWUpIHtcbiAgICBpZiAodGFza05hbWUpIHtcbiAgICAgIFN0b3JhZ2UuYWRkVGFzayhwcm9qZWN0LCB0YXNrTmFtZSk7XG4gICAgICBVSS5yZW5kZXJQcm9qZWN0cygpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhZGRFZGl0VGFza0NhcmQoXG4gICAgcHJvamVjdCA9ICdQcm9qZWN0JyxcbiAgICBuYW1lID0gJ1Rhc2snLFxuICAgIGRlc2MgPSAnRGVzY3JpcHRpb24nLFxuICAgIHN0YXR1cyA9IGZhbHNlLFxuICAgIGFkZEVkaXQgPSAnY3JlYXRlJyxcbiAgKSB7XG4gICAgY29uc3QgYnV0dG9uV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24td3JhcHBlcicpO1xuICAgIGJ1dHRvbldyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBjYXJkRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjYXJkRm9ybS5pZCA9ICduZXctdGFzay1mb3JtJztcbiAgICBjYXJkRm9ybS5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1mb3JtJyk7XG5cbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza05hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnVGFza05hbWUnKTtcbiAgICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgbmFtZSk7XG5cbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGFza0Rlc2Muc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICB0YXNrRGVzYy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnVGFza0Rlc2NyaXB0aW9uJyk7XG4gICAgdGFza0Rlc2Muc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGRlc2MpO1xuICAgIHRhc2tEZXNjLnNldEF0dHJpYnV0ZSgncm93cycsIDUpO1xuXG4gICAgY29uc3QgdGFza1Byb2ogPSBVSS5pbml0UHJvamVjdFNlbGVjdGlvbigpO1xuXG4gICAgY29uc3QgY2FuY2VsQ3JlYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FuY2VsQ3JlYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbC1jcmVhdGUtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBidG5EaXNtaXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuRGlzbWlzcy5jbGFzc0xpc3QuYWRkKCdidG4tZGlzbWlzcy1zdWJtaXQnKTtcbiAgICBidG5EaXNtaXNzLmlubmVySFRNTCA9ICdjYW5jZWwnO1xuXG4gICAgY29uc3QgZm9ybVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGZvcm1TdWJtaXQuY2xhc3NMaXN0LmFkZCgnYnRuLWRpc21pc3Mtc3VibWl0Jyk7XG4gICAgZm9ybVN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgZm9ybVN1Ym1pdC5pbm5lckhUTUwgPSBhZGRFZGl0O1xuXG4gICAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChjYXJkRm9ybSk7XG4gICAgY2FyZEZvcm0uYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICAgIGNhcmRGb3JtLmFwcGVuZENoaWxkKHRhc2tQcm9qKTtcbiAgICBjYXJkRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGVzYyk7XG4gICAgY2FyZEZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQ3JlYXRlQ29udGFpbmVyKTtcbiAgICBjYW5jZWxDcmVhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuRGlzbWlzcyk7XG4gICAgY2FuY2VsQ3JlYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1TdWJtaXQpO1xuXG4gICAgYnRuRGlzbWlzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLnJlbW92ZUFkZFR5cGVCdXR0b25zKCkpO1xuICAgIGNhcmRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IFRhc2suYWRkTmV3VGFzaygpKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0UHJvamVjdFNlbGVjdGlvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0RHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcm9qZWN0RHJvcGRvd24uaWQgPSAncHJvamVjdC1kcm9wZG93bic7XG5cbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGRlZmF1bHRQcm9qZWN0LnRleHRDb250ZW50ID0gJ1NlbGVjdCBwcm9qZWN0JztcbiAgICBwcm9qZWN0RHJvcGRvd24uYXBwZW5kQ2hpbGQoZGVmYXVsdFByb2plY3QpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWVzID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpXG4gICAgICAuZ2V0UHJvamVjdHMoKVxuICAgICAgLm1hcCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lKTtcblxuICAgIHByb2plY3ROYW1lcy5zb3J0KChhLCBiKSA9PiBhLnRvTG93ZXJDYXNlKCkgLSBiLnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwcm9qID0gcHJvamVjdE5hbWVzW2ldO1xuICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBlbC50ZXh0Q29udGVudCA9IHByb2o7XG4gICAgICBlbC52YWx1ZSA9IHByb2o7XG4gICAgICBwcm9qZWN0RHJvcGRvd24uYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9qZWN0RHJvcGRvd247XG4gIH1cbn1cbiIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cblxuICBnZXRQcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXRQcm9qZWN0KG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9XG5cbiAgZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3M7XG4gIH1cblxuICBzZXRUYXNrcyh0YXNrcykge1xuICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgfVxuXG4gIGdldFRhc2sodGFzaykge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSB0YXNrLm5hbWUpO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKG5ldyBUYXNrKHRhc2spKTtcbiAgfVxuXG4gIGRlbGV0ZVRhc2sodGFzaykge1xuICAgIGNvbnN0IHRvRGVsZXRlID0gdGhpcy50YXNrcy5maW5kKCh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gdGFzay5uYW1lKTtcbiAgICB0aGlzLnRhc2tzLnNwbGljZSh0aGlzLnRhc2tzLmluZGV4T2YodG9EZWxldGUpLCAxKTtcbiAgfVxuXG4gIHNvcnRUYXNrcygpIHt9XG59XG4iLCJpbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi90b2RvbGlzdCc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gIHN0YXRpYyBpbml0VG9kb0xpc3QoKSB7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkobmV3IFRvZG9MaXN0KCkpKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0VG9kb0xpc3QoKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBPYmplY3QuYXNzaWduKFxuICAgICAgbmV3IFRvZG9MaXN0KCksXG4gICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdCcpKSxcbiAgICApO1xuXG4gICAgdG9kb0xpc3Quc2V0UHJvamVjdHMoXG4gICAgICB0b2RvTGlzdFxuICAgICAgICAuZ2V0UHJvamVjdHMoKVxuICAgICAgICAubWFwKChwcm9qZWN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KHByb2plY3QpLCBwcm9qZWN0KSksXG4gICAgKTtcblxuICAgIHRvZG9MaXN0LmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5zZXRUYXNrcyhcbiAgICAgICAgcHJvamVjdC5nZXRUYXNrcygpLm1hcCgodGFzaykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVGFzayh0YXNrKSwgdGFzaykpLFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0b2RvTGlzdDtcbiAgfVxuXG4gIHN0YXRpYyBzZXRUb2RvTGlzdCh0b2RvTGlzdCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XG4gIH1cblxuICBzdGF0aWMgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgdG9kb0xpc3QuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICBTdG9yYWdlLnNldFRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICB0b2RvTGlzdC5kZWxldGVQcm9qZWN0KHByb2plY3QpO1xuICAgIFN0b3JhZ2Uuc2V0VG9kb0xpc3QodG9kb0xpc3QpO1xuICB9XG5cbiAgc3RhdGljIGVkaXRQcm9qZWN0KHByb2plY3QsIG5ld05hbWUpIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3QpLnNldFByb2plY3QobmV3TmFtZSk7XG4gICAgU3RvcmFnZS5zZXRUb2RvTGlzdCh0b2RvTGlzdCk7XG4gIH1cblxuICBzdGF0aWMgYWRkVGFzayhwcm9qZWN0LCB0YXNrTmFtZSkge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgIHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdCkuYWRkVGFzayh0YXNrTmFtZSk7XG4gICAgU3RvcmFnZS5zZXRUb2RvTGlzdCh0b2RvTGlzdCk7XG4gIH1cblxuICBzdGF0aWMgZGVsZXRlVGFzayhwcm9qZWN0LCB0YXNrKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0KS5kZWxldGVUYXNrKHRhc2spO1xuICAgIFN0b3JhZ2Uuc2V0VG9kb0xpc3QodG9kb0xpc3QpO1xuICB9XG5cbiAgc3RhdGljIHNldFRhc2tTdGF0dXMocHJvamVjdCwgdGFzaykge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgIHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdCkuZ2V0VGFzayh0YXNrKS5zZXRTdGF0dXMoKTtcbiAgICBTdG9yYWdlLnNldFRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7XG4gIH1cblxuICBnZXRTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICB9XG5cbiAgc2V0U3RhdHVzKCkge1xuICAgIHRoaXMuc3RhdHVzID0gIXRoaXMuc3RhdHVzO1xuICB9XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW107XG4gIH1cblxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgfVxuXG4gIHNldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgcHJvamVjdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgbGV0IHggPSBhLm5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgeSA9IGIubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgcmV0dXJuIHggPT0geSA/IDAgOiB4ID4geSA/IDEgOiAtMTtcbiAgICB9KTtcbiAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XG4gIH1cblxuICBnZXRQcm9qZWN0KHByb2plY3QpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKCh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gcHJvamVjdC5uYW1lKTtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChwcm9qZWN0KSk7XG4gIH1cblxuICBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCB0b0RlbGV0ZSA9IHRoaXMucHJvamVjdHMuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09IHByb2plY3QubmFtZSk7XG4gICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UodGhpcy5wcm9qZWN0cy5pbmRleE9mKHRvRGVsZXRlKSwgMSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IFVJIGZyb20gJy4vVUknO1xuXG5VSS5yZW5kZXIoKTtcblVJLnJlbmRlclByb2plY3RzKCk7XG5VSS5pbml0UHJvamVjdFNlbGVjdGlvbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9