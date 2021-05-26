webpackHotUpdate("cms",{

/***/ "./node_modules/classnames/index.js":
false,

/***/ "./node_modules/lodash.pick/index.js":
false,

/***/ "./node_modules/lodash/_arrayReduce.js":
false,

/***/ "./node_modules/lodash/_asciiWords.js":
false,

/***/ "./node_modules/lodash/_basePropertyOf.js":
false,

/***/ "./node_modules/lodash/_createCompounder.js":
false,

/***/ "./node_modules/lodash/_deburrLetter.js":
false,

/***/ "./node_modules/lodash/_hasUnicodeWord.js":
false,

/***/ "./node_modules/lodash/_unicodeWords.js":
false,

/***/ "./node_modules/lodash/deburr.js":
false,

/***/ "./node_modules/lodash/kebabCase.js":
false,

/***/ "./node_modules/lodash/words.js":
false,

/***/ "./node_modules/photoswipe/dist/photoswipe-ui-default.js":
false,

/***/ "./node_modules/photoswipe/dist/photoswipe.js":
false,

/***/ "./node_modules/react-photoswipe/lib/PhotoSwipe.js":
false,

/***/ "./node_modules/react-photoswipe/lib/PhotoSwipeGallery.js":
false,

/***/ "./node_modules/react-photoswipe/lib/events.js":
false,

/***/ "./node_modules/react-photoswipe/lib/index.js":
false,

/***/ "./node_modules/react-photoswipe/lib/photoswipe.css":
false,

/***/ "./src/components/Accordion.css":
false,

/***/ "./src/components/Accordion.js":
false,

/***/ "./src/components/Gallery.css":
false,

/***/ "./src/components/Gallery.js":
false,

/***/ "./src/templates/ServicesPage.js":
/*!***************************************!*\
  !*** ./src/templates/ServicesPage.js ***!
  \***************************************/
/*! exports provided: ServicesPageTemplate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPageTemplate", function() { return ServicesPageTemplate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PageHeader */ "./src/components/PageHeader.js");
/* harmony import */ var _components_Content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Content.js */ "./src/components/Content.js");
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout.js */ "./src/components/Layout.js");
var _jsxFileName = "C:\\Users\\pavan\\Desktop\\gapvinc-website\\src\\templates\\ServicesPage.js",
    _this = undefined;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




 // Export Template for use in CMS preview

var ServicesPageTemplate = function ServicesPageTemplate(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      featuredImage = _ref.featuredImage,
      section1 = _ref.section1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title,
    subtitle: subtitle,
    backgroundImage: featuredImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Content_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    source: section1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "https://www.gapvinc.com/contact/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "submit",
    value: "Contact us here",
    className: "Button Form--SubmitButton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  })))));
};

var ServicesPage = function ServicesPage(_ref2) {
  var page = _ref2.data.page;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    meta: page.frontmatter.meta || false,
    title: page.frontmatter.title || false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServicesPageTemplate, Object.assign({}, page, page.frontmatter, {
    body: page.html,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  })));
};

var _default = ServicesPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "2632194561";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ServicesPageTemplate, "ServicesPageTemplate", "C:\\Users\\pavan\\Desktop\\gapvinc-website\\src\\templates\\ServicesPage.js");
  reactHotLoader.register(ServicesPage, "ServicesPage", "C:\\Users\\pavan\\Desktop\\gapvinc-website\\src\\templates\\ServicesPage.js");
  reactHotLoader.register(pageQuery, "pageQuery", "C:\\Users\\pavan\\Desktop\\gapvinc-website\\src\\templates\\ServicesPage.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\pavan\\Desktop\\gapvinc-website\\src\\templates\\ServicesPage.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 11:
false,

/***/ 12:
false,

/***/ 13:
false

})
//# sourceMappingURL=cms.056bb5a4d6b88be08948.hot-update.js.map