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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  /* background-color: rgb(37, 40, 46);  dark mode? */\n  display: flex;\n  flex-direction: column;\n  font-family: 'Roboto', sans-serif;\n  align-items: center;\n  margin: 0px;\n  padding: 0px;\n}\n\nhtml {\n  width: 100vw;\n  height: 100%;\n}\nbody {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n  height: 100vh;\n  box-shadow: 0 0 5px 0px rgb(167, 167, 167);\n}\n\n.header {\n  background-color: #fff;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0px;\n  padding: 1.75em 0 2em;\n  height: 3em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5em;\n  cursor: pointer;\n}\n\n.header > .nav {\n  display: none;\n}\n\n.header-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.header-icon {\n  height: 3rem;\n  background-color: black;\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  mask-size: 2em;\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-origin: content-box;\n  -webkit-mask-size: 2em;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-origin: content-box;\n}\n\n.header-text {\n  padding: 0px 0.25rem;\n  font-size: 1.5rem;\n  font-family: 'Pacifico', sans-serif;\n  background-color: black;\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.workspace {\n  position: relative;\n  height: calc(100vh - 9.75em);\n  width: 100%;\n  padding: 0 1em;\n  overflow: scroll;\n}\n\n.underlay {\n  position: absolute;\n  background: transparent;\n  /* background-color: transparent; */\n  backdrop-filter: blur(2px);\n  -webkit-backdrop-filter: blur(2px);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.button-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  width: 80%;\n  max-width: 400px;\n  border-radius: 2rem;\n  padding-bottom: 1rem;\n  box-shadow: 0 0 5px 0px rgb(167, 167, 167);\n  z-index: 1010;\n}\n\nh4 {\n  margin: 2rem 2rem;\n  text-align: center;\n  align-items: center;\n  color: rgb(85, 85, 85);\n}\n\n.cancel-create-container {\n  display: flex;\n  align-content: center;\n}\n\n.date-label {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.date-label > input {\n  width: 40%;\n}\n\n.project-header {\n  display: flex;\n  align-items: flex-end;\n  align-content: flex-end;\n  justify-content: space-between;\n  height: 2rem;\n}\n\n.project-name {\n  user-select: none;\n  margin-bottom: 0;\n  width: 70%;\n}\n\n.task-item {\n  user-select: none;\n  padding-left: 1rem;\n  font-size: 0.8625rem;\n  max-width: 80%;\n  margin: 0.75rem 0 0 0;\n}\n\n.done {\n  color: grey;\n  text-decoration: line-through;\n}\n\n.new-project-name-input {\n  border: 1px solid black;\n  border-radius: 0.25em;\n  outline: none;\n  align-self: flex-end;\n  vertical-align: middle;\n  margin-left: 0;\n  margin-bottom: 0;\n  padding: 0.125rem 0 0 0.5rem;\n  height: 1.25rem;\n  font-size: 1rem;\n  width: 60%;\n}\n\n.btn-add-type {\n  border-radius: 1000px;\n  margin: 1rem 2rem;\n  width: 80%;\n  height: 5rem;\n  border: solid 2.5px;\n}\n\n.btn-dismiss-submit {\n  display: inline-flex;\n  width: 50%;\n  justify-items: center;\n  align-items: center;\n  text-align: center;\n  vertical-align: text-bottom;\n  border: none;\n  height: 2rem;\n  padding: 1rem;\n  margin: 1rem 1rem 0;\n  font-size: 0.75rem;\n  color: transparent;\n  -webkit-text-fill-color: transparent;\n  background-color: black;\n\n  background-clip: text;\n  -webkit-background-clip: text;\n}\n\n.btn-dismiss-submit:active {\n  font-size: 0.9rem;\n}\n\n.nav {\n  display: flex;\n  max-width: 600px;\n  width: 100%;\n  bottom: 0;\n  background-color: #fff;\n  margin-top: 0.5em;\n  padding: 0.5em;\n  height: 3em;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 0.5em;\n  padding: 2rem;\n}\n\nbutton:hover,\nbutton:active {\n  mask-size: 2.25em;\n  -webkit-mask-size: 2.25em;\n}\n\n.btn-home,\n.btn-add,\n.btn-menu {\n  width: 30vw;\n  height: 2.75em;\n  background-color: black;\n  mask-size: 2em;\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-origin: content-box;\n  -webkit-mask-size: 2em;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-origin: content-box;\n}\n\n.btn-home {\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.btn-add {\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.btn-menu {\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.btn-delete-project,\n.btn-add-task {\n  text-align: center;\n  vertical-align: middle;\n  height: 1rem;\n  padding: 0.625rem 0.5rem 0.75rem;\n  margin-left: 0.5em;\n}\n\n.new-task-card {\n  height: 100%;\n}\n\n.new-project-form,\n.new-task-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 2.25rem 1rem 1rem;\n  width: 18rem;\n}\n\ntextarea {\n  resize: none;\n}\n\ninput,\nlabel,\ntextarea,\nselect {\n  margin: 0.5rem;\n  font-family: sans-serif;\n  font-size: 0.75rem;\n  width: 90%;\n}\n\n.task-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n#footer {\n  display: none;\n}\n\np.footer,\na.footer,\na.footer:visited {\n  color: black;\n  align-self: center;\n  text-decoration: none;\n  font-size: 0.7rem;\n}\n\n#gh-logo {\n  width: 24px;\n  padding: 0px 5px;\n}\n\n@media screen and (min-width: 600px) {\n  .header {\n    width: 100%;\n    justify-content: space-between;\n  }\n\n  .header-container {\n    padding-left: 1rem;\n  }\n\n  .nav {\n    display: none;\n  }\n\n  .header > .nav {\n    display: flex;\n    padding: 0 0 0 0.5rem;\n    max-width: 50%;\n    justify-content: flex-end;\n  }\n\n  .btn-home,\n  .btn-add,\n  .btn-menu {\n    width: 3rem;\n    height: 2rem;\n  }\n\n  .workspace {\n    height: calc(100vh - 8em);\n  }\n\n  #footer {\n    bottom: 0;\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    align-content: center;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  /* background-color: rgb(37, 40, 46);  dark mode? */\n  display: flex;\n  flex-direction: column;\n  font-family: 'Roboto', sans-serif;\n  align-items: center;\n  margin: 0px;\n  padding: 0px;\n}\n\nhtml {\n  width: 100vw;\n  height: 100%;\n}\nbody {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n  height: 100vh;\n  box-shadow: 0 0 5px 0px rgb(167, 167, 167);\n}\n\n.header {\n  background-color: #fff;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0px;\n  padding: 1.75em 0 2em;\n  height: 3em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5em;\n  cursor: pointer;\n}\n\n.header > .nav {\n  display: none;\n}\n\n.header-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.header-icon {\n  height: 3rem;\n  background-color: black;\n  mask-image: url(../Assets/mole.svg);\n  mask-size: 2em;\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-origin: content-box;\n  -webkit-mask-size: 2em;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-origin: content-box;\n}\n\n.header-text {\n  padding: 0px 0.25rem;\n  font-size: 1.5rem;\n  font-family: 'Pacifico', sans-serif;\n  background-color: black;\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.workspace {\n  position: relative;\n  height: calc(100vh - 9.75em);\n  width: 100%;\n  padding: 0 1em;\n  overflow: scroll;\n}\n\n.underlay {\n  position: absolute;\n  background: transparent;\n  /* background-color: transparent; */\n  backdrop-filter: blur(2px);\n  -webkit-backdrop-filter: blur(2px);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n.button-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  width: 80%;\n  max-width: 400px;\n  border-radius: 2rem;\n  padding-bottom: 1rem;\n  box-shadow: 0 0 5px 0px rgb(167, 167, 167);\n  z-index: 1010;\n}\n\nh4 {\n  margin: 2rem 2rem;\n  text-align: center;\n  align-items: center;\n  color: rgb(85, 85, 85);\n}\n\n.cancel-create-container {\n  display: flex;\n  align-content: center;\n}\n\n.date-label {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.date-label > input {\n  width: 40%;\n}\n\n.project-header {\n  display: flex;\n  align-items: flex-end;\n  align-content: flex-end;\n  justify-content: space-between;\n  height: 2rem;\n}\n\n.project-name {\n  user-select: none;\n  margin-bottom: 0;\n  width: 70%;\n}\n\n.task-item {\n  user-select: none;\n  padding-left: 1rem;\n  font-size: 0.8625rem;\n  max-width: 80%;\n  margin: 0.75rem 0 0 0;\n}\n\n.done {\n  color: grey;\n  text-decoration: line-through;\n}\n\n.new-project-name-input {\n  border: 1px solid black;\n  border-radius: 0.25em;\n  outline: none;\n  align-self: flex-end;\n  vertical-align: middle;\n  margin-left: 0;\n  margin-bottom: 0;\n  padding: 0.125rem 0 0 0.5rem;\n  height: 1.25rem;\n  font-size: 1rem;\n  width: 60%;\n}\n\n.btn-add-type {\n  border-radius: 1000px;\n  margin: 1rem 2rem;\n  width: 80%;\n  height: 5rem;\n  border: solid 2.5px;\n}\n\n.btn-dismiss-submit {\n  display: inline-flex;\n  width: 50%;\n  justify-items: center;\n  align-items: center;\n  text-align: center;\n  vertical-align: text-bottom;\n  border: none;\n  height: 2rem;\n  padding: 1rem;\n  margin: 1rem 1rem 0;\n  font-size: 0.75rem;\n  color: transparent;\n  -webkit-text-fill-color: transparent;\n  background-color: black;\n\n  background-clip: text;\n  -webkit-background-clip: text;\n}\n\n.btn-dismiss-submit:active {\n  font-size: 0.9rem;\n}\n\n.nav {\n  display: flex;\n  max-width: 600px;\n  width: 100%;\n  bottom: 0;\n  background-color: #fff;\n  margin-top: 0.5em;\n  padding: 0.5em;\n  height: 3em;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 0.5em;\n  padding: 2rem;\n}\n\nbutton:hover,\nbutton:active {\n  mask-size: 2.25em;\n  -webkit-mask-size: 2.25em;\n}\n\n.btn-home,\n.btn-add,\n.btn-menu {\n  width: 30vw;\n  height: 2.75em;\n  background-color: black;\n  mask-size: 2em;\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-origin: content-box;\n  -webkit-mask-size: 2em;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-origin: content-box;\n}\n\n.btn-home {\n  mask-image: url(../Assets/home.svg);\n  -webkit-mask-image: url(../Assets/home.svg);\n}\n\n.btn-add {\n  mask-image: url(../Assets/mono-svn-add.svg);\n  -webkit-mask-image: url(../Assets/mono-svn-add.svg);\n}\n\n.btn-menu {\n  mask-image: url(../Assets/options.svg);\n  -webkit-mask-image: url(../Assets/options.svg);\n}\n\n.btn-delete-project,\n.btn-add-task {\n  text-align: center;\n  vertical-align: middle;\n  height: 1rem;\n  padding: 0.625rem 0.5rem 0.75rem;\n  margin-left: 0.5em;\n}\n\n.new-task-card {\n  height: 100%;\n}\n\n.new-project-form,\n.new-task-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 2.25rem 1rem 1rem;\n  width: 18rem;\n}\n\ntextarea {\n  resize: none;\n}\n\ninput,\nlabel,\ntextarea,\nselect {\n  margin: 0.5rem;\n  font-family: sans-serif;\n  font-size: 0.75rem;\n  width: 90%;\n}\n\n.task-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n#footer {\n  display: none;\n}\n\np.footer,\na.footer,\na.footer:visited {\n  color: black;\n  align-self: center;\n  text-decoration: none;\n  font-size: 0.7rem;\n}\n\n#gh-logo {\n  width: 24px;\n  padding: 0px 5px;\n}\n\n@media screen and (min-width: 600px) {\n  .header {\n    width: 100%;\n    justify-content: space-between;\n  }\n\n  .header-container {\n    padding-left: 1rem;\n  }\n\n  .nav {\n    display: none;\n  }\n\n  .header > .nav {\n    display: flex;\n    padding: 0 0 0 0.5rem;\n    max-width: 50%;\n    justify-content: flex-end;\n  }\n\n  .btn-home,\n  .btn-add,\n  .btn-menu {\n    width: 3rem;\n    height: 2rem;\n  }\n\n  .workspace {\n    height: calc(100vh - 8em);\n  }\n\n  #footer {\n    bottom: 0;\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    align-content: center;\n  }\n}\n"],"sourceRoot":""}]);
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

      const hdrContainer = document.createElement('div');
      hdrContainer.classList.add('header-container');

      const hdrLogo = new Image();
      hdrLogo.src = _Assets_mole_svg__WEBPACK_IMPORTED_MODULE_0__;
      hdrLogo.classList.add('header-icon');

      const hdrTxt = document.createElement('div');
      hdrTxt.innerHTML = 'Molehills';
      hdrTxt.classList.add('header-text');

      header.appendChild(hdrContainer);
      hdrContainer.appendChild(hdrLogo);
      hdrContainer.appendChild(hdrTxt);
      header.appendChild(createNav());

      hdrContainer.addEventListener('click', () => UI.renderHome());

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

    function createFooter() {
      const footer = document.createElement('div');
      footer.classList.add('footer');
      footer.id = 'footer';
      footer.innerHTML = `<p class="footer">Made by</p> 
                          <a class="footer" href=https://github.com/danranges> <img id="gh-logo" src="../Assets/GitHub-Mark-64px.png" alt="github logo"/></a>
                          <a class="footer" href=https://github.com/danranges>Dan Ranges</a>`;

      return footer;
    }

    document.body.appendChild(createHeader());
    document.body.appendChild(createWorkspace());
    document.body.appendChild(createNav());
    document.body.appendChild(createFooter());

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
    projectName.textContent = project.name;

    const projectBtnContainer = document.createElement('div');
    projectBtnContainer.classList.add('project-btn-container');

    const btnShowAddTask = document.createElement('button');
    btnShowAddTask.classList.add('btn-add-task');
    btnShowAddTask.textContent = '+';

    const btnDeleteProject = document.createElement('button');
    btnDeleteProject.classList.add('btn-delete-project');
    btnDeleteProject.textContent = '×';

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

  static projectOptions() {}

  static showAddTaskHeaderView(addTaskCard) {
    addTaskCard.style.display = 'block';
  }

  static hideAddTaskHeaderView(addTaskCard, taskNameInput) {
    addTaskCard.style.display = 'none';
    taskNameInput.value = '';
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
    btnAddTask.textContent = 'create';

    const btnCancel = document.createElement('button');
    btnCancel.classList.add('btn-add-task');
    btnCancel.textContent = 'cancel';

    addTaskCard.appendChild(taskNameInput);
    addTaskCard.appendChild(btnAddTask);
    addTaskCard.appendChild(btnCancel);

    addTaskCard.style.display = 'none';

    btnAddTask.addEventListener('click', () => {
      UI.addNewTask(project, taskNameInput.value);
    });
    btnCancel.addEventListener('click', () => {
      UI.hideAddTaskHeaderView(addTaskCard, taskNameInput);
    });

    return addTaskCard;
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

  static renderTasks(project) {
    const tasksContainer = document.createElement('div');

    project.getTasks().forEach((task) => {
      const taskItem = document.createElement('div');
      taskItem.classList.add('task-container');

      const taskName = document.createElement('p');
      taskName.classList.add('task-item');
      if (task.status) taskName.classList.add('done');
      taskName.textContent = task.name;

      const btnDelete = document.createElement('button');
      btnDelete.classList.add('btn-delete-project');
      btnDelete.textContent = '×';

      taskItem.appendChild(taskName);
      taskItem.appendChild(btnDelete);

      taskItem.addEventListener('dblclick', () => {
        UI.markTaskDone(project, task, taskName);
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

  static deleteTask(project, task) {
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTask(project, task);
    UI.renderProjects();
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
    btnSubmit.textContent = 'update';

    const btnCancel = document.createElement('button');
    btnCancel.classList.add('btn-delete-project');
    btnCancel.textContent = 'cancel';

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
    addTypePrompt.textContent = 'What would you like to add?';

    const btnAddTypeProject = document.createElement('button');
    btnAddTypeProject.classList.add('btn-add-type');
    btnAddTypeProject.textContent = 'Project';

    const btnAddTypeTask = document.createElement('button');
    btnAddTypeTask.classList.add('btn-add-type');
    btnAddTypeTask.textContent = 'Task';

    const btnDismiss = document.createElement('button');
    btnDismiss.classList.add('btn-dismiss-submit');
    btnDismiss.textContent = 'cancel';

    workspace.appendChild(underlay);
    workspace.appendChild(buttonWrapper);
    buttonWrapper.appendChild(addTypePrompt);
    buttonWrapper.appendChild(btnAddTypeProject);
    buttonWrapper.appendChild(btnAddTypeTask);
    buttonWrapper.appendChild(btnDismiss);

    underlay.addEventListener('click', () => UI.removeAddTypeButtons());
    btnDismiss.addEventListener('click', () => UI.removeAddTypeButtons());
    btnAddTypeProject.addEventListener('click', () => UI.addProjectCard());
    btnAddTypeTask.addEventListener('click', () => UI.addTaskCard());
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
    btnDismiss.textContent = 'cancel';

    const formSubmit = document.createElement('button');
    formSubmit.classList.add('btn-dismiss-submit');
    formSubmit.textContent = 'create';

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

  static addNewTask(project, taskName, taskDesc, taskDue) {
    if (taskName) {
      _storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask(project, taskName, taskDesc, taskDue);
      console.log(taskDue);
      UI.renderProjects();
    }
  }

  static addTaskCard() {
    const buttonWrapper = document.getElementById('button-wrapper');
    buttonWrapper.innerHTML = '';

    const cardForm = document.createElement('form');
    cardForm.id = 'new-task-form';
    cardForm.classList.add('new-task-form');

    const taskName = document.createElement('input');
    taskName.setAttribute('type', 'text');
    taskName.setAttribute('name', 'TaskName');
    taskName.setAttribute('placeholder', 'Task');

    const taskDesc = document.createElement('textarea');
    taskDesc.setAttribute('type', 'text');
    taskDesc.setAttribute('name', 'TaskDescription');
    taskDesc.setAttribute('placeholder', 'Description');
    taskDesc.setAttribute('rows', 5);

    const taskProj = UI.initProjectSelection();

    const taskDueInput = document.createElement('input');
    taskDueInput.setAttribute('type', 'date');
    taskDueInput.id = 'task-due';
    let taskDueDate = taskDueInput.value;
    taskDueInput.addEventListener('change', () => {
      taskDueDate = new Date(taskDueInput.value);
    });

    const taskDueLabel = document.createElement('label');
    taskDueLabel.setAttribute('for', taskDueInput.id);
    taskDueLabel.classList.add('date-label');
    taskDueLabel.innerHTML = 'Due Date';
    taskDueLabel.appendChild(taskDueInput);

    const cancelCreateContainer = document.createElement('div');
    cancelCreateContainer.classList.add('cancel-create-container');

    const btnDismiss = document.createElement('button');
    btnDismiss.classList.add('btn-dismiss-submit');
    btnDismiss.textContent = 'cancel';

    const formSubmit = document.createElement('button');
    formSubmit.classList.add('btn-dismiss-submit');
    formSubmit.textContent = 'create';

    buttonWrapper.appendChild(cardForm);
    cardForm.appendChild(taskName);
    cardForm.appendChild(taskProj);
    cardForm.appendChild(taskDesc);
    cardForm.appendChild(taskDueLabel);
    cardForm.appendChild(cancelCreateContainer);
    cancelCreateContainer.appendChild(btnDismiss);
    cancelCreateContainer.appendChild(formSubmit);

    btnDismiss.addEventListener('click', () => UI.removeAddTypeButtons());
    formSubmit.addEventListener('click', () => {
      UI.addNewTask(
        taskProj.value,
        taskName.value,
        taskDesc.value,
        taskDueDate,
      );
    });
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
    tasks.sort((a, b) => {
      let x = a.name.toLowerCase(),
        y = b.name.toLowerCase();
      return x == y ? 0 : x > y ? 1 : -1;
    });
    this.tasks = tasks;
  }

  getTask(task) {
    return this.tasks.find(({ name }) => name === task.name);
  }

  addTask(taskName, taskDesc, taskDue) {
    this.tasks.push(new _task__WEBPACK_IMPORTED_MODULE_0__["default"](taskName, taskDesc, taskDue));
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

  static addTask(project, taskName, taskDesc, taskDue) {
    const todoList = Storage.getTodoList();
    todoList.getProject(project).addTask(taskName, taskDesc, taskDue);
    console.table(todoList.getProjects());
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
  constructor(name, description, dueDate) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
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
    if (typeof project === 'object') {
      return this.projects.find(({ name }) => name === project.name);
    }

    if (typeof project === 'string') {
      return this.projects.find(({ name }) => name === project);
    }
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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ "./src/UI.js");




_UI__WEBPACK_IMPORTED_MODULE_2__["default"].render();
_UI__WEBPACK_IMPORTED_MODULE_2__["default"].renderProjects();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsVUFBVSxZQUFZLGFBQWEs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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDL0NhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmc0M7QUFDTjtBQUNFO0FBQ0Y7QUFDTjs7QUFFWDtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsNkNBQUk7QUFDeEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksNkRBQW9CO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiw0REFBbUI7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztB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Q0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7QUNyQnNCO0FBQ1U7QUFDVjs7QUFFdEIsa0RBQVM7QUFDVCwwREFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21vbGVoaWxscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL21vbGVoaWxscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21vbGVoaWxscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21vbGVoaWxscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21vbGVoaWxscy8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvLi9zcmMvdG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21vbGVoaWxscy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21vbGVoaWxscy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21vbGVoaWxscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21vbGVoaWxscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21vbGVoaWxscy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tb2xlaGlsbHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbW9sZWhpbGxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9Bc3NldHMvbW9sZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9Bc3NldHMvaG9tZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9Bc3NldHMvbW9uby1zdm4tYWRkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL0Fzc2V0cy9vcHRpb25zLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCA0MCwgNDYpOyAgZGFyayBtb2RlPyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbmh0bWwge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDE2NywgMTY3LCAxNjcpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xcbiAgdG9wOiAwcHg7XFxuICBwYWRkaW5nOiAxLjc1ZW0gMCAyZW07XFxuICBoZWlnaHQ6IDNlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyID4gLm5hdiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLWljb24ge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgbWFzay1zaXplOiAyZW07XFxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgbWFzay1vcmlnaW46IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDJlbTtcXG4gIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgLXdlYmtpdC1tYXNrLW9yaWdpbjogY29udGVudC1ib3g7XFxufVxcblxcbi5oZWFkZXItdGV4dCB7XFxuICBwYWRkaW5nOiAwcHggMC4yNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdQYWNpZmljbycsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ud29ya3NwYWNlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDkuNzVlbSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMWVtO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLnVuZGVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7ICovXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAxMDAwO1xcbn1cXG5cXG4uYnV0dG9uLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogODAlO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigxNjcsIDE2NywgMTY3KTtcXG4gIHotaW5kZXg6IDEwMTA7XFxufVxcblxcbmg0IHtcXG4gIG1hcmdpbjogMnJlbSAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2IoODUsIDg1LCA4NSk7XFxufVxcblxcbi5jYW5jZWwtY3JlYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGF0ZS1sYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZGF0ZS1sYWJlbCA+IGlucHV0IHtcXG4gIHdpZHRoOiA0MCU7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLnRhc2staXRlbSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMC44NjI1cmVtO1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDAuNzVyZW0gMCAwIDA7XFxufVxcblxcbi5kb25lIHtcXG4gIGNvbG9yOiBncmV5O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5uZXctcHJvamVjdC1uYW1lLWlucHV0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIHBhZGRpbmc6IDAuMTI1cmVtIDAgMCAwLjVyZW07XFxuICBoZWlnaHQ6IDEuMjVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICB3aWR0aDogNjAlO1xcbn1cXG5cXG4uYnRuLWFkZC10eXBlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcXG4gIG1hcmdpbjogMXJlbSAycmVtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGJvcmRlcjogc29saWQgMi41cHg7XFxufVxcblxcbi5idG4tZGlzbWlzcy1zdWJtaXQge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICB3aWR0aDogNTAlO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDFyZW0gMXJlbSAwO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG59XFxuXFxuLmJ0bi1kaXNtaXNzLXN1Ym1pdDphY3RpdmUge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgaGVpZ2h0OiAzZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjphY3RpdmUge1xcbiAgbWFzay1zaXplOiAyLjI1ZW07XFxuICAtd2Via2l0LW1hc2stc2l6ZTogMi4yNWVtO1xcbn1cXG5cXG4uYnRuLWhvbWUsXFxuLmJ0bi1hZGQsXFxuLmJ0bi1tZW51IHtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgaGVpZ2h0OiAyLjc1ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG1hc2stc2l6ZTogMmVtO1xcbiAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIG1hc2stcG9zaXRpb246IGNlbnRlcjtcXG4gIG1hc2stb3JpZ2luOiBjb250ZW50LWJveDtcXG4gIC13ZWJraXQtbWFzay1zaXplOiAyZW07XFxuICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAtd2Via2l0LW1hc2stcG9zaXRpb246IGNlbnRlcjtcXG4gIC13ZWJraXQtbWFzay1vcmlnaW46IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4uYnRuLWhvbWUge1xcbiAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuLmJ0bi1hZGQge1xcbiAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuLmJ0bi1tZW51IHtcXG4gIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVxcblxcbi5idG4tZGVsZXRlLXByb2plY3QsXFxuLmJ0bi1hZGQtdGFzayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgcGFkZGluZzogMC42MjVyZW0gMC41cmVtIDAuNzVyZW07XFxuICBtYXJnaW4tbGVmdDogMC41ZW07XFxufVxcblxcbi5uZXctdGFzay1jYXJkIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0sXFxuLm5ldy10YXNrLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAyLjI1cmVtIDFyZW0gMXJlbTtcXG4gIHdpZHRoOiAxOHJlbTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5pbnB1dCxcXG5sYWJlbCxcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbnAuZm9vdGVyLFxcbmEuZm9vdGVyLFxcbmEuZm9vdGVyOnZpc2l0ZWQge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbiNnaC1sb2dvIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgcGFkZGluZzogMHB4IDVweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gIC5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLmhlYWRlci1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICB9XFxuXFxuICAubmF2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5oZWFkZXIgPiAubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMCAwIDAgMC41cmVtO1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIH1cXG5cXG4gIC5idG4taG9tZSxcXG4gIC5idG4tYWRkLFxcbiAgLmJ0bi1tZW51IHtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gIH1cXG5cXG4gIC53b3Jrc3BhY2Uge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4ZW0pO1xcbiAgfVxcblxcbiAgI2Zvb3RlciB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsbURBQW1EO0VBQ25ELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLFFBQVE7RUFDUixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1EQUFtQztFQUNuQyxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtF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RDs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7Ozs7RUFJRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7O0VBR0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjs7RUFFQTs7O0lBR0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixxQkFBcUI7RUFDdkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigzNywgNDAsIDQ2KTsgIGRhcmsgbW9kZT8gKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG5odG1sIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigxNjcsIDE2NywgMTY3KTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gIHRvcDogMHB4O1xcbiAgcGFkZGluZzogMS43NWVtIDAgMmVtO1xcbiAgaGVpZ2h0OiAzZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlciA+IC5uYXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlci1pY29uIHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgbWFzay1pbWFnZTogdXJsKC4uL0Fzc2V0cy9tb2xlLnN2Zyk7XFxuICBtYXNrLXNpemU6IDJlbTtcXG4gIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBtYXNrLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBtYXNrLW9yaWdpbjogY29udGVudC1ib3g7XFxuICAtd2Via2l0LW1hc2stc2l6ZTogMmVtO1xcbiAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAtd2Via2l0LW1hc2stb3JpZ2luOiBjb250ZW50LWJveDtcXG59XFxuXFxuLmhlYWRlci10ZXh0IHtcXG4gIHBhZGRpbmc6IDBweCAwLjI1cmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi53b3Jrc3BhY2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOS43NWVtKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAxZW07XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4udW5kZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgKi9cXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDA7XFxufVxcblxcbi5idXR0b24td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDE2NywgMTY3LCAxNjcpO1xcbiAgei1pbmRleDogMTAxMDtcXG59XFxuXFxuaDQge1xcbiAgbWFyZ2luOiAycmVtIDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcXG59XFxuXFxuLmNhbmNlbC1jcmVhdGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kYXRlLWxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5kYXRlLWxhYmVsID4gaW5wdXQge1xcbiAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAwLjg2MjVyZW07XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMC43NXJlbSAwIDAgMDtcXG59XFxuXFxuLmRvbmUge1xcbiAgY29sb3I6IGdyZXk7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LW5hbWUtaW5wdXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgcGFkZGluZzogMC4xMjVyZW0gMCAwIDAuNXJlbTtcXG4gIGhlaWdodDogMS4yNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbi5idG4tYWRkLXR5cGUge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcbiAgbWFyZ2luOiAxcmVtIDJyZW07XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgYm9yZGVyOiBzb2xpZCAyLjVweDtcXG59XFxuXFxuLmJ0bi1kaXNtaXNzLXN1Ym1pdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHdpZHRoOiA1MCU7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbjogMXJlbSAxcmVtIDA7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbn1cXG5cXG4uYnRuLWRpc21pc3Mtc3VibWl0OmFjdGl2ZSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBoZWlnaHQ6IDNlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBtYXNrLXNpemU6IDIuMjVlbTtcXG4gIC13ZWJraXQtbWFzay1zaXplOiAyLjI1ZW07XFxufVxcblxcbi5idG4taG9tZSxcXG4uYnRuLWFkZCxcXG4uYnRuLW1lbnUge1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDIuNzVlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgbWFzay1zaXplOiAyZW07XFxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgbWFzay1vcmlnaW46IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDJlbTtcXG4gIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgLXdlYmtpdC1tYXNrLW9yaWdpbjogY29udGVudC1ib3g7XFxufVxcblxcbi5idG4taG9tZSB7XFxuICBtYXNrLWltYWdlOiB1cmwoLi4vQXNzZXRzL2hvbWUuc3ZnKTtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKC4uL0Fzc2V0cy9ob21lLnN2Zyk7XFxufVxcblxcbi5idG4tYWRkIHtcXG4gIG1hc2staW1hZ2U6IHVybCguLi9Bc3NldHMvbW9uby1zdm4tYWRkLnN2Zyk7XFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCguLi9Bc3NldHMvbW9uby1zdm4tYWRkLnN2Zyk7XFxufVxcblxcbi5idG4tbWVudSB7XFxuICBtYXNrLWltYWdlOiB1cmwoLi4vQXNzZXRzL29wdGlvbnMuc3ZnKTtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKC4uL0Fzc2V0cy9vcHRpb25zLnN2Zyk7XFxufVxcblxcbi5idG4tZGVsZXRlLXByb2plY3QsXFxuLmJ0bi1hZGQtdGFzayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgcGFkZGluZzogMC42MjVyZW0gMC41cmVtIDAuNzVyZW07XFxuICBtYXJnaW4tbGVmdDogMC41ZW07XFxufVxcblxcbi5uZXctdGFzay1jYXJkIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0sXFxuLm5ldy10YXNrLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAyLjI1cmVtIDFyZW0gMXJlbTtcXG4gIHdpZHRoOiAxOHJlbTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5pbnB1dCxcXG5sYWJlbCxcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbnAuZm9vdGVyLFxcbmEuZm9vdGVyLFxcbmEuZm9vdGVyOnZpc2l0ZWQge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbiNnaC1sb2dvIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgcGFkZGluZzogMHB4IDVweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gIC5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLmhlYWRlci1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICB9XFxuXFxuICAubmF2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5oZWFkZXIgPiAubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMCAwIDAgMC41cmVtO1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIH1cXG5cXG4gIC5idG4taG9tZSxcXG4gIC5idG4tYWRkLFxcbiAgLmJ0bi1tZW51IHtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gIH1cXG5cXG4gIC53b3Jrc3BhY2Uge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4ZW0pO1xcbiAgfVxcblxcbiAgI2Zvb3RlciB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBMb2dvIGZyb20gJy4uL0Fzc2V0cy9tb2xlLnN2Zyc7XG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vdG9kb2xpc3QnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgc3RhdGljIHJlbmRlcigpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgICAgY29uc3QgaGRyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBoZHJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWNvbnRhaW5lcicpO1xuXG4gICAgICBjb25zdCBoZHJMb2dvID0gbmV3IEltYWdlKCk7XG4gICAgICBoZHJMb2dvLnNyYyA9IExvZ287XG4gICAgICBoZHJMb2dvLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1pY29uJyk7XG5cbiAgICAgIGNvbnN0IGhkclR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaGRyVHh0LmlubmVySFRNTCA9ICdNb2xlaGlsbHMnO1xuICAgICAgaGRyVHh0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10ZXh0Jyk7XG5cbiAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZHJDb250YWluZXIpO1xuICAgICAgaGRyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhkckxvZ28pO1xuICAgICAgaGRyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhkclR4dCk7XG4gICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuXG4gICAgICBoZHJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5yZW5kZXJIb21lKCkpO1xuXG4gICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVdvcmtzcGFjZSgpIHtcbiAgICAgIGNvbnN0IHdvcmtzcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgd29ya3NwYWNlLmlkID0gJ3dvcmtzcGFjZSc7XG4gICAgICB3b3Jrc3BhY2UuY2xhc3NMaXN0LmFkZCgnd29ya3NwYWNlJyk7XG5cbiAgICAgIHJldHVybiB3b3Jrc3BhY2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG5cbiAgICAgIGNvbnN0IGJ0bkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ0bkhvbWUuY2xhc3NMaXN0LmFkZCgnYnRuLWhvbWUnKTtcbiAgICAgIGJ0bkhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5yZW5kZXJIb21lKTtcblxuICAgICAgY29uc3QgYnRuQWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnRuQWRkVGFzay5jbGFzc0xpc3QuYWRkKCdidG4tYWRkJyk7XG4gICAgICBidG5BZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkuaW5pdEFkZFR5cGVCdXR0b25zKCkpO1xuXG4gICAgICBjb25zdCBidG5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBidG5NZW51LmNsYXNzTGlzdC5hZGQoJ2J0bi1tZW51Jyk7XG4gICAgICBidG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkucmVuZGVyUHJvamVjdHMpO1xuXG4gICAgICBuYXYuYXBwZW5kQ2hpbGQoYnRuSG9tZSk7XG4gICAgICBuYXYuYXBwZW5kQ2hpbGQoYnRuQWRkVGFzayk7XG4gICAgICBuYXYuYXBwZW5kQ2hpbGQoYnRuTWVudSk7XG5cbiAgICAgIHJldHVybiBuYXY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgICBmb290ZXIuaWQgPSAnZm9vdGVyJztcbiAgICAgIGZvb3Rlci5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJmb290ZXJcIj5NYWRlIGJ5PC9wPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmb290ZXJcIiBocmVmPWh0dHBzOi8vZ2l0aHViLmNvbS9kYW5yYW5nZXM+IDxpbWcgaWQ9XCJnaC1sb2dvXCIgc3JjPVwiLi4vQXNzZXRzL0dpdEh1Yi1NYXJrLTY0cHgucG5nXCIgYWx0PVwiZ2l0aHViIGxvZ29cIi8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZvb3RlclwiIGhyZWY9aHR0cHM6Ly9naXRodWIuY29tL2RhbnJhbmdlcz5EYW4gUmFuZ2VzPC9hPmA7XG5cbiAgICAgIHJldHVybiBmb290ZXI7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVXb3Jrc3BhY2UoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgICBVSS5yZW5kZXJIb21lKCk7XG4gICAgU3RvcmFnZS5pbml0VG9kb0xpc3QoKTtcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJIb21lKCkge1xuICAgIHdvcmtzcGFjZS5pbm5lckhUTUwgPSAnSE9NRSc7XG4gIH1cblxuICBzdGF0aWMgcmVuZGVyUHJvamVjdHMoKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgd29ya3NwYWNlLmlubmVySFRNTCA9ICcnO1xuICAgIHRvZG9MaXN0LmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4gVUkuaW5pdFByb2plY3RIZWFkZXIocHJvamVjdCkpO1xuICB9XG5cbiAgc3RhdGljIGluaXRQcm9qZWN0SGVhZGVyKHByb2plY3QpIHtcbiAgICBjb25zdCB3b3Jrc3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya3NwYWNlJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaGVhZGVyJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuICAgIGNvbnN0IHByb2plY3RCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0QnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnRuLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYnRuU2hvd0FkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5TaG93QWRkVGFzay5jbGFzc0xpc3QuYWRkKCdidG4tYWRkLXRhc2snKTtcbiAgICBidG5TaG93QWRkVGFzay50ZXh0Q29udGVudCA9ICcrJztcblxuICAgIGNvbnN0IGJ0bkRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5EZWxldGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWxldGUtcHJvamVjdCcpO1xuICAgIGJ0bkRlbGV0ZVByb2plY3QudGV4dENvbnRlbnQgPSAnw5cnO1xuXG4gICAgY29uc3QgYWRkVGFza0NhcmQgPSBVSS5hZGRUYXNrSGVhZGVyVmlldyhwcm9qZWN0KTtcblxuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gVUkucmVuZGVyVGFza3MocHJvamVjdCk7XG5cbiAgICB3b3Jrc3BhY2UuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tDYXJkKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tzQ29udGFpbmVyKTtcbiAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RCdG5Db250YWluZXIpO1xuICAgIHByb2plY3RCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuU2hvd0FkZFRhc2spO1xuICAgIHByb2plY3RCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuRGVsZXRlUHJvamVjdCk7XG5cbiAgICBidG5EZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkuZGVsZXRlUHJvamVjdChwcm9qZWN0KSk7XG4gICAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoKSA9PlxuICAgICAgVUkuZWRpdFByb2plY3ROYW1lSGVhZGVyVmlldyhwcm9qZWN0LCBwcm9qZWN0SGVhZGVyKSxcbiAgICApO1xuICAgIGJ0blNob3dBZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgIFVJLnNob3dBZGRUYXNrSGVhZGVyVmlldyhhZGRUYXNrQ2FyZCksXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9qZWN0T3B0aW9ucygpIHt9XG5cbiAgc3RhdGljIHNob3dBZGRUYXNrSGVhZGVyVmlldyhhZGRUYXNrQ2FyZCkge1xuICAgIGFkZFRhc2tDYXJkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG5cbiAgc3RhdGljIGhpZGVBZGRUYXNrSGVhZGVyVmlldyhhZGRUYXNrQ2FyZCwgdGFza05hbWVJbnB1dCkge1xuICAgIGFkZFRhc2tDYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGFza05hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICB9XG5cbiAgc3RhdGljIGFkZFRhc2tIZWFkZXJWaWV3KHByb2plY3QpIHtcbiAgICBjb25zdCBhZGRUYXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZFRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ1Rhc2tOYW1lJyk7XG4gICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ05ldyBUYXNrJyk7XG5cbiAgICBjb25zdCBidG5BZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuQWRkVGFzay5jbGFzc0xpc3QuYWRkKCdidG4tYWRkLXRhc2snKTtcbiAgICBidG5BZGRUYXNrLnRleHRDb250ZW50ID0gJ2NyZWF0ZSc7XG5cbiAgICBjb25zdCBidG5DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5DYW5jZWwuY2xhc3NMaXN0LmFkZCgnYnRuLWFkZC10YXNrJyk7XG4gICAgYnRuQ2FuY2VsLnRleHRDb250ZW50ID0gJ2NhbmNlbCc7XG5cbiAgICBhZGRUYXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KTtcbiAgICBhZGRUYXNrQ2FyZC5hcHBlbmRDaGlsZChidG5BZGRUYXNrKTtcbiAgICBhZGRUYXNrQ2FyZC5hcHBlbmRDaGlsZChidG5DYW5jZWwpO1xuXG4gICAgYWRkVGFza0NhcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGJ0bkFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBVSS5hZGROZXdUYXNrKHByb2plY3QsIHRhc2tOYW1lSW5wdXQudmFsdWUpO1xuICAgIH0pO1xuICAgIGJ0bkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIFVJLmhpZGVBZGRUYXNrSGVhZGVyVmlldyhhZGRUYXNrQ2FyZCwgdGFza05hbWVJbnB1dCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYWRkVGFza0NhcmQ7XG4gIH1cblxuICBzdGF0aWMgZWRpdFByb2plY3QocHJvamVjdCwgbmV3TmFtZSkge1xuICAgIFN0b3JhZ2UuZWRpdFByb2plY3QocHJvamVjdCwgbmV3TmFtZSk7XG4gICAgVUkucmVuZGVyUHJvamVjdHMoKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBTdG9yYWdlLmRlbGV0ZVByb2plY3QocHJvamVjdCk7XG4gICAgVUkucmVuZGVyUHJvamVjdHMoKTtcbiAgfVxuXG4gIHN0YXRpYyBjbGVhcldvcmtzcGFjZSgpIHtcbiAgICB3b3Jrc3BhY2UuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBzdGF0aWMgcmVuZGVyVGFza3MocHJvamVjdCkge1xuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBwcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJyk7XG5cbiAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gICAgICBpZiAodGFzay5zdGF0dXMpIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuXG4gICAgICBjb25zdCBidG5EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ0bkRlbGV0ZS5jbGFzc0xpc3QuYWRkKCdidG4tZGVsZXRlLXByb2plY3QnKTtcbiAgICAgIGJ0bkRlbGV0ZS50ZXh0Q29udGVudCA9ICfDlyc7XG5cbiAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGJ0bkRlbGV0ZSk7XG5cbiAgICAgIHRhc2tJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgKCkgPT4ge1xuICAgICAgICBVSS5tYXJrVGFza0RvbmUocHJvamVjdCwgdGFzaywgdGFza05hbWUpO1xuICAgICAgfSk7XG4gICAgICBidG5EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIFVJLmRlbGV0ZVRhc2socHJvamVjdCwgdGFzayk7XG4gICAgICB9KTtcblxuICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0l0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRhc2tzQ29udGFpbmVyO1xuICB9XG5cbiAgc3RhdGljIG1hcmtUYXNrRG9uZShwcm9qZWN0LCB0YXNrLCB0YXNrRE9NKSB7XG4gICAgU3RvcmFnZS5zZXRUYXNrU3RhdHVzKHByb2plY3QsIHRhc2spO1xuICAgIHRhc2tET00uY2xhc3NMaXN0LnRvZ2dsZSgnZG9uZScpO1xuICB9XG5cbiAgc3RhdGljIGRlbGV0ZVRhc2socHJvamVjdCwgdGFzaykge1xuICAgIFN0b3JhZ2UuZGVsZXRlVGFzayhwcm9qZWN0LCB0YXNrKTtcbiAgICBVSS5yZW5kZXJQcm9qZWN0cygpO1xuICB9XG5cbiAgc3RhdGljIGVkaXRQcm9qZWN0TmFtZUhlYWRlclZpZXcocHJvamVjdCwgcHJvamVjdEhlYWRlcikge1xuICAgIHByb2plY3RIZWFkZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBuZXdOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5ld05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIG5ld05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnTmV3IFByb2plY3QgTmFtZScpO1xuICAgIG5ld05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcHJvamVjdC5uYW1lKTtcbiAgICBuZXdOYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtbmFtZS1pbnB1dCcpO1xuXG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbC1jcmVhdGUtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBidG5TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5TdWJtaXQuY2xhc3NMaXN0LmFkZCgnYnRuLWRlbGV0ZS1wcm9qZWN0Jyk7XG4gICAgYnRuU3VibWl0LnRleHRDb250ZW50ID0gJ3VwZGF0ZSc7XG5cbiAgICBjb25zdCBidG5DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5DYW5jZWwuY2xhc3NMaXN0LmFkZCgnYnRuLWRlbGV0ZS1wcm9qZWN0Jyk7XG4gICAgYnRuQ2FuY2VsLnRleHRDb250ZW50ID0gJ2NhbmNlbCc7XG5cbiAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKG5ld05hbWVJbnB1dCk7XG4gICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5DYW5jZWwpO1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5TdWJtaXQpO1xuXG4gICAgbmV3TmFtZUlucHV0LmZvY3VzKCk7XG5cbiAgICBidG5TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBVSS5lZGl0UHJvamVjdChwcm9qZWN0LCBuZXdOYW1lSW5wdXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgYnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkucmVuZGVyUHJvamVjdHMoKSk7XG4gIH1cblxuICBzdGF0aWMgaW5pdEFkZFR5cGVCdXR0b25zKCkge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5kZXJsYXknKSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuZGVybGF5JykucmVtb3ZlKCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLXdyYXBwZXInKS5yZW1vdmUoKTtcbiAgICB9XG4gICAgY29uc3Qgd29ya3NwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmtzcGFjZScpO1xuXG4gICAgY29uc3QgdW5kZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB1bmRlcmxheS5jbGFzc0xpc3QuYWRkKCd1bmRlcmxheScpO1xuICAgIHVuZGVybGF5LmlkID0gJ3VuZGVybGF5JztcblxuICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi13cmFwcGVyJyk7XG4gICAgYnV0dG9uV3JhcHBlci5pZCA9ICdidXR0b24td3JhcHBlcic7XG5cbiAgICBjb25zdCBhZGRUeXBlUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBhZGRUeXBlUHJvbXB0LmNsYXNzTGlzdC5hZGQoJ2FkZC10eXBlLXByb21wdC10ZXh0Jyk7XG4gICAgYWRkVHlwZVByb21wdC50ZXh0Q29udGVudCA9ICdXaGF0IHdvdWxkIHlvdSBsaWtlIHRvIGFkZD8nO1xuXG4gICAgY29uc3QgYnRuQWRkVHlwZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5BZGRUeXBlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdidG4tYWRkLXR5cGUnKTtcbiAgICBidG5BZGRUeXBlUHJvamVjdC50ZXh0Q29udGVudCA9ICdQcm9qZWN0JztcblxuICAgIGNvbnN0IGJ0bkFkZFR5cGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuQWRkVHlwZVRhc2suY2xhc3NMaXN0LmFkZCgnYnRuLWFkZC10eXBlJyk7XG4gICAgYnRuQWRkVHlwZVRhc2sudGV4dENvbnRlbnQgPSAnVGFzayc7XG5cbiAgICBjb25zdCBidG5EaXNtaXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuRGlzbWlzcy5jbGFzc0xpc3QuYWRkKCdidG4tZGlzbWlzcy1zdWJtaXQnKTtcbiAgICBidG5EaXNtaXNzLnRleHRDb250ZW50ID0gJ2NhbmNlbCc7XG5cbiAgICB3b3Jrc3BhY2UuYXBwZW5kQ2hpbGQodW5kZXJsYXkpO1xuICAgIHdvcmtzcGFjZS5hcHBlbmRDaGlsZChidXR0b25XcmFwcGVyKTtcbiAgICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGFkZFR5cGVQcm9tcHQpO1xuICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoYnRuQWRkVHlwZVByb2plY3QpO1xuICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoYnRuQWRkVHlwZVRhc2spO1xuICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoYnRuRGlzbWlzcyk7XG5cbiAgICB1bmRlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLnJlbW92ZUFkZFR5cGVCdXR0b25zKCkpO1xuICAgIGJ0bkRpc21pc3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5yZW1vdmVBZGRUeXBlQnV0dG9ucygpKTtcbiAgICBidG5BZGRUeXBlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLmFkZFByb2plY3RDYXJkKCkpO1xuICAgIGJ0bkFkZFR5cGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkuYWRkVGFza0NhcmQoKSk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlQWRkVHlwZUJ1dHRvbnMoKSB7XG4gICAgY29uc3QgdW5kZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5kZXJsYXknKTtcbiAgICBjb25zdCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi13cmFwcGVyJyk7XG5cbiAgICBidXR0b25XcmFwcGVyLnJlbW92ZSgpO1xuICAgIHVuZGVybGF5LnJlbW92ZSgpO1xuICB9XG5cbiAgc3RhdGljIGFkZFByb2plY3RDYXJkKCkge1xuICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLXdyYXBwZXInKTtcbiAgICBidXR0b25XcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgY2FyZEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY2FyZEZvcm0uaWQgPSAnbmV3LXByb2plY3QtZm9ybSc7XG4gICAgY2FyZEZvcm0uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtZm9ybScpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ1Byb2plY3ROYW1lJyk7XG4gICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IE5hbWUnKTtcblxuICAgIGNvbnN0IGNhbmNlbENyZWF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhbmNlbENyZWF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtY3JlYXRlLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYnRuRGlzbWlzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkRpc21pc3MuY2xhc3NMaXN0LmFkZCgnYnRuLWRpc21pc3Mtc3VibWl0Jyk7XG4gICAgYnRuRGlzbWlzcy50ZXh0Q29udGVudCA9ICdjYW5jZWwnO1xuXG4gICAgY29uc3QgZm9ybVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGZvcm1TdWJtaXQuY2xhc3NMaXN0LmFkZCgnYnRuLWRpc21pc3Mtc3VibWl0Jyk7XG4gICAgZm9ybVN1Ym1pdC50ZXh0Q29udGVudCA9ICdjcmVhdGUnO1xuXG4gICAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChjYXJkRm9ybSk7XG4gICAgY2FyZEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIGNhcmRGb3JtLmFwcGVuZENoaWxkKGNhbmNlbENyZWF0ZUNvbnRhaW5lcik7XG4gICAgY2FuY2VsQ3JlYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkRpc21pc3MpO1xuICAgIGNhbmNlbENyZWF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtU3VibWl0KTtcblxuICAgIGJ0bkRpc21pc3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5yZW1vdmVBZGRUeXBlQnV0dG9ucygpKTtcbiAgICBjYXJkRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgVUkuYWRkTmV3UHJvamVjdChjYXJkRm9ybS5lbGVtZW50c1swXS52YWx1ZSk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYWRkTmV3UHJvamVjdChwcm9qZWN0KSB7XG4gICAgU3RvcmFnZS5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgIFVJLnJlbW92ZUFkZFR5cGVCdXR0b25zKCk7XG4gICAgVUkucmVuZGVyUHJvamVjdHMoKTtcbiAgfVxuXG4gIHN0YXRpYyBhZGROZXdUYXNrKHByb2plY3QsIHRhc2tOYW1lLCB0YXNrRGVzYywgdGFza0R1ZSkge1xuICAgIGlmICh0YXNrTmFtZSkge1xuICAgICAgU3RvcmFnZS5hZGRUYXNrKHByb2plY3QsIHRhc2tOYW1lLCB0YXNrRGVzYywgdGFza0R1ZSk7XG4gICAgICBjb25zb2xlLmxvZyh0YXNrRHVlKTtcbiAgICAgIFVJLnJlbmRlclByb2plY3RzKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFkZFRhc2tDYXJkKCkge1xuICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLXdyYXBwZXInKTtcbiAgICBidXR0b25XcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgY2FyZEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY2FyZEZvcm0uaWQgPSAnbmV3LXRhc2stZm9ybSc7XG4gICAgY2FyZEZvcm0uY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stZm9ybScpO1xuXG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tOYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdGFza05hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ1Rhc2tOYW1lJyk7XG4gICAgdGFza05hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUYXNrJyk7XG5cbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGFza0Rlc2Muc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICB0YXNrRGVzYy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnVGFza0Rlc2NyaXB0aW9uJyk7XG4gICAgdGFza0Rlc2Muc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpO1xuICAgIHRhc2tEZXNjLnNldEF0dHJpYnV0ZSgncm93cycsIDUpO1xuXG4gICAgY29uc3QgdGFza1Byb2ogPSBVSS5pbml0UHJvamVjdFNlbGVjdGlvbigpO1xuXG4gICAgY29uc3QgdGFza0R1ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrRHVlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICB0YXNrRHVlSW5wdXQuaWQgPSAndGFzay1kdWUnO1xuICAgIGxldCB0YXNrRHVlRGF0ZSA9IHRhc2tEdWVJbnB1dC52YWx1ZTtcbiAgICB0YXNrRHVlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGFza0R1ZURhdGUgPSBuZXcgRGF0ZSh0YXNrRHVlSW5wdXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGFza0R1ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0YXNrRHVlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCB0YXNrRHVlSW5wdXQuaWQpO1xuICAgIHRhc2tEdWVMYWJlbC5jbGFzc0xpc3QuYWRkKCdkYXRlLWxhYmVsJyk7XG4gICAgdGFza0R1ZUxhYmVsLmlubmVySFRNTCA9ICdEdWUgRGF0ZSc7XG4gICAgdGFza0R1ZUxhYmVsLmFwcGVuZENoaWxkKHRhc2tEdWVJbnB1dCk7XG5cbiAgICBjb25zdCBjYW5jZWxDcmVhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYW5jZWxDcmVhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWNyZWF0ZS1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGJ0bkRpc21pc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5EaXNtaXNzLmNsYXNzTGlzdC5hZGQoJ2J0bi1kaXNtaXNzLXN1Ym1pdCcpO1xuICAgIGJ0bkRpc21pc3MudGV4dENvbnRlbnQgPSAnY2FuY2VsJztcblxuICAgIGNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBmb3JtU3VibWl0LmNsYXNzTGlzdC5hZGQoJ2J0bi1kaXNtaXNzLXN1Ym1pdCcpO1xuICAgIGZvcm1TdWJtaXQudGV4dENvbnRlbnQgPSAnY3JlYXRlJztcblxuICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoY2FyZEZvcm0pO1xuICAgIGNhcmRGb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgICBjYXJkRm9ybS5hcHBlbmRDaGlsZCh0YXNrUHJvaik7XG4gICAgY2FyZEZvcm0uYXBwZW5kQ2hpbGQodGFza0Rlc2MpO1xuICAgIGNhcmRGb3JtLmFwcGVuZENoaWxkKHRhc2tEdWVMYWJlbCk7XG4gICAgY2FyZEZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQ3JlYXRlQ29udGFpbmVyKTtcbiAgICBjYW5jZWxDcmVhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuRGlzbWlzcyk7XG4gICAgY2FuY2VsQ3JlYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1TdWJtaXQpO1xuXG4gICAgYnRuRGlzbWlzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLnJlbW92ZUFkZFR5cGVCdXR0b25zKCkpO1xuICAgIGZvcm1TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBVSS5hZGROZXdUYXNrKFxuICAgICAgICB0YXNrUHJvai52YWx1ZSxcbiAgICAgICAgdGFza05hbWUudmFsdWUsXG4gICAgICAgIHRhc2tEZXNjLnZhbHVlLFxuICAgICAgICB0YXNrRHVlRGF0ZSxcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaW5pdFByb2plY3RTZWxlY3Rpb24oKSB7XG4gICAgY29uc3QgcHJvamVjdERyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJvamVjdERyb3Bkb3duLmlkID0gJ3Byb2plY3QtZHJvcGRvd24nO1xuXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBkZWZhdWx0UHJvamVjdC50ZXh0Q29udGVudCA9ICdTZWxlY3QgcHJvamVjdCc7XG4gICAgcHJvamVjdERyb3Bkb3duLmFwcGVuZENoaWxkKGRlZmF1bHRQcm9qZWN0KTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lcyA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKVxuICAgICAgLmdldFByb2plY3RzKClcbiAgICAgIC5tYXAoKHByb2plY3QpID0+IHByb2plY3QubmFtZSk7XG5cbiAgICBwcm9qZWN0TmFtZXMuc29ydCgoYSwgYikgPT4gYS50b0xvd2VyQ2FzZSgpIC0gYi50b0xvd2VyQ2FzZSgpKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcHJvaiA9IHByb2plY3ROYW1lc1tpXTtcbiAgICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgZWwudGV4dENvbnRlbnQgPSBwcm9qO1xuICAgICAgZWwudmFsdWUgPSBwcm9qO1xuICAgICAgcHJvamVjdERyb3Bkb3duLmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvamVjdERyb3Bkb3duO1xuICB9XG59XG4iLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG5cbiAgZ2V0UHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0UHJvamVjdChuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICB9XG5cbiAgc2V0VGFza3ModGFza3MpIHtcbiAgICB0YXNrcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBsZXQgeCA9IGEubmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICB5ID0gYi5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICByZXR1cm4geCA9PSB5ID8gMCA6IHggPiB5ID8gMSA6IC0xO1xuICAgIH0pO1xuICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgfVxuXG4gIGdldFRhc2sodGFzaykge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSB0YXNrLm5hbWUpO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrTmFtZSwgdGFza0Rlc2MsIHRhc2tEdWUpIHtcbiAgICB0aGlzLnRhc2tzLnB1c2gobmV3IFRhc2sodGFza05hbWUsIHRhc2tEZXNjLCB0YXNrRHVlKSk7XG4gIH1cblxuICBkZWxldGVUYXNrKHRhc2spIHtcbiAgICBjb25zdCB0b0RlbGV0ZSA9IHRoaXMudGFza3MuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09IHRhc2submFtZSk7XG4gICAgdGhpcy50YXNrcy5zcGxpY2UodGhpcy50YXNrcy5pbmRleE9mKHRvRGVsZXRlKSwgMSk7XG4gIH1cblxuICBzb3J0VGFza3MoKSB7fVxufVxuIiwiaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vdG9kb2xpc3QnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICBzdGF0aWMgaW5pdFRvZG9MaXN0KCkge1xuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9MaXN0JykpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KG5ldyBUb2RvTGlzdCgpKSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldFRvZG9MaXN0KCkge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIG5ldyBUb2RvTGlzdCgpLFxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSksXG4gICAgKTtcblxuICAgIHRvZG9MaXN0LnNldFByb2plY3RzKFxuICAgICAgdG9kb0xpc3RcbiAgICAgICAgLmdldFByb2plY3RzKClcbiAgICAgICAgLm1hcCgocHJvamVjdCkgPT4gT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdChwcm9qZWN0KSwgcHJvamVjdCkpLFxuICAgICk7XG5cbiAgICB0b2RvTGlzdC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3Quc2V0VGFza3MoXG4gICAgICAgIHByb2plY3QuZ2V0VGFza3MoKS5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2sodGFzayksIHRhc2spKSxcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdG9kb0xpc3Q7XG4gIH1cblxuICBzdGF0aWMgc2V0VG9kb0xpc3QodG9kb0xpc3QpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdCkpO1xuICB9XG5cbiAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgIHRvZG9MaXN0LmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgU3RvcmFnZS5zZXRUb2RvTGlzdCh0b2RvTGlzdCk7XG4gIH1cblxuICBzdGF0aWMgZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgdG9kb0xpc3QuZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICBTdG9yYWdlLnNldFRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgfVxuXG4gIHN0YXRpYyBlZGl0UHJvamVjdChwcm9qZWN0LCBuZXdOYW1lKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0KS5zZXRQcm9qZWN0KG5ld05hbWUpO1xuICAgIFN0b3JhZ2Uuc2V0VG9kb0xpc3QodG9kb0xpc3QpO1xuICB9XG5cbiAgc3RhdGljIGFkZFRhc2socHJvamVjdCwgdGFza05hbWUsIHRhc2tEZXNjLCB0YXNrRHVlKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0KS5hZGRUYXNrKHRhc2tOYW1lLCB0YXNrRGVzYywgdGFza0R1ZSk7XG4gICAgY29uc29sZS50YWJsZSh0b2RvTGlzdC5nZXRQcm9qZWN0cygpKTtcbiAgICBTdG9yYWdlLnNldFRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWxldGVUYXNrKHByb2plY3QsIHRhc2spIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3QpLmRlbGV0ZVRhc2sodGFzayk7XG4gICAgU3RvcmFnZS5zZXRUb2RvTGlzdCh0b2RvTGlzdCk7XG4gIH1cblxuICBzdGF0aWMgc2V0VGFza1N0YXR1cyhwcm9qZWN0LCB0YXNrKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0KS5nZXRUYXNrKHRhc2spLnNldFN0YXR1cygpO1xuICAgIFN0b3JhZ2Uuc2V0VG9kb0xpc3QodG9kb0xpc3QpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7XG4gIH1cblxuICBnZXRTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICB9XG5cbiAgc2V0U3RhdHVzKCkge1xuICAgIHRoaXMuc3RhdHVzID0gIXRoaXMuc3RhdHVzO1xuICB9XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW107XG4gIH1cblxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgfVxuXG4gIHNldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgcHJvamVjdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgbGV0IHggPSBhLm5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgeSA9IGIubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgcmV0dXJuIHggPT0geSA/IDAgOiB4ID4geSA/IDEgOiAtMTtcbiAgICB9KTtcbiAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XG4gIH1cblxuICBnZXRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBpZiAodHlwZW9mIHByb2plY3QgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKCh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gcHJvamVjdC5uYW1lKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb2plY3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKCh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gcHJvamVjdCk7XG4gICAgfVxuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KHByb2plY3QpKTtcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHRvRGVsZXRlID0gdGhpcy5wcm9qZWN0cy5maW5kKCh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gcHJvamVjdC5uYW1lKTtcbiAgICB0aGlzLnByb2plY3RzLnNwbGljZSh0aGlzLnByb2plY3RzLmluZGV4T2YodG9EZWxldGUpLCAxKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IFVJIGZyb20gJy4vVUknO1xuXG5VSS5yZW5kZXIoKTtcblVJLnJlbmRlclByb2plY3RzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=