webpackHotUpdate("cms",{

/***/ "./src/components/GoogleMap.js":
/*!*************************************!*\
  !*** ./src/components/GoogleMap.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");


var _jsxFileName = "C:\\Users\\pavan\\Desktop\\gapvinc-website\\src\\components\\GoogleMap.js",
    _this = undefined;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var mapkey = '';

if (({}).NETLIFY_MAP_KEY) {
  mapkey = ({}).NETLIFY_MAP_KEY;
}

var GoogleMap = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GoogleMap, _Component);

  function GoogleMap() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = GoogleMap.prototype;

  _proto.render = function render() {
    return (
      /*#__PURE__*/
      // Important! Always set the container height explicitly
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          height: '50vh',
          width: '100%'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
        bootstrapURLKeys: {
          key: mapkey
        },
        defaultCenter: this.props.center,
        defaultZoom: this.props.zoom,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Marker, {
        lat: -28.0914483,
        lng: 153.4425208,
        text: 'Kreyser Avrora',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }
      })))
    );
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return GoogleMap;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

GoogleMap.defaultProps = {
  center: {
    lat: 114.0719,
    lng: 51.0447
  },
  zoom: 14
};
var _default = GoogleMap;
/* harmony default export */ __webpack_exports__["default"] = (_default);

var Marker = function Marker() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_3__["MapPin"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }));
};

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapkey, "mapkey", "C:\\Users\\pavan\\Desktop\\gapvinc-website\\src\\components\\GoogleMap.js");
  reactHotLoader.register(GoogleMap, "GoogleMap", "C:\\Users\\pavan\\Desktop\\gapvinc-website\\src\\components\\GoogleMap.js");
  reactHotLoader.register(Marker, "Marker", "C:\\Users\\pavan\\Desktop\\gapvinc-website\\src\\components\\GoogleMap.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\pavan\\Desktop\\gapvinc-website\\src\\components\\GoogleMap.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.7f972d61afd5102fee54.hot-update.js.map