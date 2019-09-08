module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/routes */ "./src/shared/routes.js");
/* harmony import */ var _shared_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/App */ "./src/shared/App.js");
/* harmony import */ var source_map_support__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! source-map-support */ "source-map-support");
/* harmony import */ var source_map_support__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(source_map_support__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/edison/git/react/server-side-rendering/src/server/index.js";










if (true) {
  source_map_support__WEBPACK_IMPORTED_MODULE_8___default.a.install();
}

var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a["static"]("public"));
app.get("/api/news", function (req, res) {
  res.json([{
    id: 1,
    upvotes: 257,
    title: "Fianto Duri, the complete tutorial",
    author: "RubeusH",
    date: new Date(Date.now() - 15000000)
  }, {
    id: 2,
    upvotes: 221,
    title: "Untransfiguration classes to become compulsory at Hogwarts",
    author: "Baddock",
    date: new Date(Date.now() - 45000000)
  }, {
    id: 3,
    upvotes: 198,
    title: "Cracking the Aurologist Interview ",
    author: "Hetty",
    date: new Date(Date.now() - 900000)
  }, {
    id: 4,
    upvotes: 171,
    title: "ASK WN: What do you use to digitalize your scrolls?",
    author: "Alphard",
    date: new Date(Date.now() - 40000000)
  }, {
    id: 5,
    upvotes: 166,
    title: "The Pragmatic Dragon Feeder",
    author: "Baruffio",
    date: new Date(Date.now() - 10000000)
  }, {
    id: 6,
    upvotes: 145,
    title: "The complete quidditch statistics",
    author: "Hbeery",
    date: new Date(Date.now() - 5000000)
  }, {
    id: 7,
    upvotes: 126,
    title: "Ordinary Wizarding Levels study guide",
    author: "BathBabb",
    date: new Date(Date.now() - 600000)
  }, {
    id: 8,
    upvotes: 114,
    title: "Is muggle-baiting ever acceptable?",
    author: "Falco",
    date: new Date(Date.now() - 60000000)
  }, {
    id: 9,
    upvotes: 74,
    title: "Conserving waterplants cheatsheet.",
    author: "Otto",
    date: new Date(Date.now() - 3000000)
  }, {
    id: 10,
    upvotes: 59,
    title: "Could wizards prevent WW3?",
    author: "Cuthbert",
    date: new Date(Date.now() - 6000000)
  }, {
    id: 11,
    upvotes: 46,
    title: "Show WN: Wand-Extinguishing Protection",
    author: "Humphrey22",
    date: new Date(Date.now() - 50000)
  }, {
    id: 12,
    upvotes: 30,
    title: "Do you still use Alarte Ascendare?",
    author: "Bellatrix1",
    date: new Date(Date.now() - 6000000)
  }, {
    id: 13,
    upvotes: 10,
    title: "Mailing lists WN readers ought to know about?",
    author: "Dracod",
    date: new Date(Date.now() - 60000)
  }, {
    id: 14,
    upvotes: 8,
    title: "How to tell which spell used on a bug?",
    author: "Lupin",
    date: new Date()
  }]);
});
app.get("*", function (req, res, next) {
  var activeRoute = _shared_routes__WEBPACK_IMPORTED_MODULE_6__["default"].find(function (route) {
    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["matchPath"])(req.url, route);
  });

  if (!activeRoute) {
    return res.sendStatus(404);
  }

  var requestInitialData = activeRoute.component.requestInitialData && activeRoute.component.requestInitialData();
  Promise.resolve(requestInitialData).then(function (initialData) {
    var context = {
      initialData: initialData
    };
    var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["StaticRouter"], {
      location: req.url,
      context: context,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_App__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    })));
    res.send("\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <title>W Combinator</title>\n          <link rel=\"stylesheet\" href=\"/css/main.css\">\n          <script src=\"/bundle.js\" defer></script>\n          <script>window.__initialData__ = ".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(initialData), "</script>\n        </head>\n\n        <body>\n          <div id=\"root\">").concat(markup, "</div>\n        </body>\n      </html>\n      "));
  })["catch"](next);
});
app.listen(process.env.PORT || 3000, function () {
  console.log("Server is listening");
});

/***/ }),

/***/ "./src/shared/App.css":
/*!****************************!*\
  !*** ./src/shared/App.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/shared/routes.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ "./src/shared/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/edison/git/react/server-side-rendering/src/shared/App.js";





var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, _routes__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (route, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], Object.assign({
      key: i
    }, route, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/shared/home/Home.css":
/*!**********************************!*\
  !*** ./src/shared/home/Home.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/home/Home.js":
/*!*********************************!*\
  !*** ./src/shared/home/Home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logo.png */ "./src/shared/home/logo.png");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_logo_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wizards_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wizards.jpg */ "./src/shared/home/wizards.jpg");
/* harmony import */ var _wizards_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wizards_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Home.css */ "./src/shared/home/Home.css");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/home/edison/git/react/server-side-rendering/src/shared/home/Home.js";






var Home =
/*#__PURE__*/
function (_Component) {
  Object(_home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _Component);

  function Home() {
    Object(_home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    return Object(_home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).apply(this, arguments));
  }

  Object(_home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _logo_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("aside", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "selected",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "About"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/news",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Wizard News"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("article", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "W Combinator created a new model for funding early stage wizardry."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Twice a year we invest a small amount of mana in a large number of wizards (recently 105)."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "The wizards move to the Highlands of Scotland for 3 months, during which we work intensively with them to get the magic into the best possible shape and refine their pitch to patrons. Each cycle culminates in Demo Day, when the wizards present their magic to a carefully selected, invite-only audience."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "But WC doesn\u2019t end on Demo Day. We and the WC alumni network continue to help mages for the life of their magic, and beyond.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("figure", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _wizards_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/shared/home/logo.png":
/*!**********************************!*\
  !*** ./src/shared/home/logo.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/media/logo.png";

/***/ }),

/***/ "./src/shared/home/wizards.jpg":
/*!*************************************!*\
  !*** ./src/shared/home/wizards.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/media/wizards.jpg";

/***/ }),

/***/ "./src/shared/news/News.js":
/*!*********************************!*\
  !*** ./src/shared/news/News.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _NewsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NewsList */ "./src/shared/news/NewsList.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/edison/git/react/server-side-rendering/src/shared/news/News.js";




var News =
/*#__PURE__*/
function (_Component) {
  Object(_home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(News, _Component);

  function News(props) {
    var _this;

    Object(_home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, News);

    _this = Object(_home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(News).call(this, props));
    var initialData;

    if (false) {} else {
      initialData = props.staticContext.initialData;
    }

    _this.state = {
      news: initialData
    };
    return _this;
  }

  Object(_home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(News, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.state.news) {
        News.requestInitialData().then(function (data) {
          return _this2.setState({
            news: data
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var news = this.state.news;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_NewsList__WEBPACK_IMPORTED_MODULE_6__["default"], {
        news: news,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      });
    }
  }], [{
    key: "requestInitialData",
    value: function requestInitialData() {
      return fetch("http://127.0.0.1:3000/api/news").then(function (response) {
        return response.json();
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }]);

  return News;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ }),

/***/ "./src/shared/news/NewsList.css":
/*!**************************************!*\
  !*** ./src/shared/news/NewsList.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/news/NewsList.js":
/*!*************************************!*\
  !*** ./src/shared/news/NewsList.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var node_time_ago__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! node-time-ago */ "node-time-ago");
/* harmony import */ var node_time_ago__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(node_time_ago__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_orderby__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash.orderby */ "lodash.orderby");
/* harmony import */ var lodash_orderby__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_orderby__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _w18_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./w18.png */ "./src/shared/news/w18.png");
/* harmony import */ var _w18_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_w18_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _NewsList_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NewsList.css */ "./src/shared/news/NewsList.css");
/* harmony import */ var _NewsList_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_NewsList_css__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/home/edison/git/react/server-side-rendering/src/shared/news/NewsList.js";






var NewsList =
/*#__PURE__*/
function (_Component) {
  Object(_home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NewsList, _Component);

  function NewsList() {
    var _getPrototypeOf2;

    var _this;

    Object(_home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NewsList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NewsList)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      sortOrder: "upvotes"
    };
    return _this;
  }

  Object(_home_edison_git_react_server_side_rendering_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NewsList, [{
    key: "setOrder",
    value: function setOrder(order, event) {
      event.preventDefault();
      this.setState({
        sortOrder: order
      });
    }
  }, {
    key: "render",
    value: function render() {
      var news = lodash_orderby__WEBPACK_IMPORTED_MODULE_7___default()(this.props.news, this.state.sortOrder, "desc");
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "newslist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "header-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _w18_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        width: "18",
        height: "18",
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Wizard News")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "sort",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Sort By:", " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        className: this.state.sortOrder === "upvotes" ? "sort-selected" : "",
        onClick: this.setOrder.bind(this, "upvotes"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Upvotes"), "|", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        className: this.state.sortOrder === "date" ? "sort-selected" : "",
        onClick: this.setOrder.bind(this, "date"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Date"))), news && news.map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: post.id,
          className: "news-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "news-position",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, post.id, ". \u25B2"), " ", post.title, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("small", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, "(by ", post.author, ")")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("small", {
          className: "news-details",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, post.upvotes, " upvotes | ", node_time_ago__WEBPACK_IMPORTED_MODULE_6___default()(post.date)));
      }));
    }
  }]);

  return NewsList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NewsList);

/***/ }),

/***/ "./src/shared/news/w18.png":
/*!*********************************!*\
  !*** ./src/shared/news/w18.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/media/w18.png";

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/Home */ "./src/shared/home/Home.js");
/* harmony import */ var _news_News__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news/News */ "./src/shared/news/News.js");


var routes = [{
  path: "/",
  exact: true,
  component: _home_Home__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  path: "/news",
  component: _news_News__WEBPACK_IMPORTED_MODULE_1__["default"]
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "lodash.orderby":
/*!*********************************!*\
  !*** external "lodash.orderby" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.orderby");

/***/ }),

/***/ "node-time-ago":
/*!********************************!*\
  !*** external "node-time-ago" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-time-ago");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "source-map-support":
/*!*************************************!*\
  !*** external "source-map-support" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map