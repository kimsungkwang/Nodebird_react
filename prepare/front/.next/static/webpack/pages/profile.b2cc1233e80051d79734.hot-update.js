webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n  _jsxFileName = \"/Users/kimsungkwang/WORKSPACE/Nodejs/Nodebird_react/prepare/front/components/UserProfile.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nvar dummy = {\n  nickname: \"김성광\",\n  Posts: [],\n  Followings: [],\n  Followers: [],\n  isLoggedIn: false\n};\nvar UserProfile = function UserProfile() {\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"Card\"], {\n    actions: [__jsx(\"div\", {\n      key: \"twit\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }\n    }, \"\\uC9F9\\uC9F9\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 11\n      }\n    }), dummy.Posts.length), __jsx(\"div\", {\n      key: \"following\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }\n    }, \"\\uD314\\uB85C\\uC789\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }\n    }), dummy.Followings.length), __jsx(\"div\", {\n      key: \"follower\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }\n    }, \"\\uD314\\uB85C\\uC6CC\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 11\n      }\n    }), dummy.Followers.length)],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"Card\"].Meta, {\n    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"Avatar\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 26\n      }\n    }, dummy.nickname[0]),\n    title: dummy.nickname,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"Button\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, \"\\uB85C\\uADF8\\uC544\\uC6C3\"));\n};\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcz8yN2I5Il0sIm5hbWVzIjpbImR1bW15Iiwibmlja25hbWUiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJpc0xvZ2dlZEluIiwiVXNlclByb2ZpbGUiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEM7QUFDbEI7QUFFMUIsSUFBTUEsS0FBSyxHQUFHO0VBQ1pDLFFBQVEsRUFBRSxLQUFLO0VBQ2ZDLEtBQUssRUFBRSxFQUFFO0VBQ1RDLFVBQVUsRUFBRSxFQUFFO0VBQ2RDLFNBQVMsRUFBRSxFQUFFO0VBQ2JDLFVBQVUsRUFBRTtBQUNkLENBQUM7QUFFRCxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBVyxHQUFTO0VBQ3hCLE9BQ0UsTUFBQyx5Q0FBSTtJQUNILE9BQU8sRUFBRSxDQUNQO01BQUssR0FBRyxFQUFDLE1BQU07TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxtQkFFYjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQU0sRUFDTE4sS0FBSyxDQUFDRSxLQUFLLENBQUNLLE1BQU0sQ0FDZixFQUNOO01BQUssR0FBRyxFQUFDLFdBQVc7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSx5QkFFbEI7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFNLEVBQ0xQLEtBQUssQ0FBQ0csVUFBVSxDQUFDSSxNQUFNLENBQ3BCLEVBQ047TUFBSyxHQUFHLEVBQUMsVUFBVTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLHlCQUVqQjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQU0sRUFDTFAsS0FBSyxDQUFDSSxTQUFTLENBQUNHLE1BQU0sQ0FDbkIsQ0FDTjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0YsTUFBQyx5Q0FBSSxDQUFDLElBQUk7SUFBQyxNQUFNLEVBQUUsTUFBQywyQ0FBTTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQUVQLEtBQUssQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFXO0lBQUMsS0FBSyxFQUFFRCxLQUFLLENBQUNDLFFBQVM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEVBQ2xGLE1BQUMsMkNBQU07SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSw4QkFBYyxDQUNoQjtBQUVYLENBQUM7QUFBQyxLQXhCSUssV0FBVztBQTBCRkEsMEVBQVcsRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJQcm9maWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyLCBDYXJkLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBkdW1teSA9IHtcbiAgbmlja25hbWU6IFwi6rmA7ISx6rSRXCIsXG4gIFBvc3RzOiBbXSxcbiAgRm9sbG93aW5nczogW10sXG4gIEZvbGxvd2VyczogW10sXG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxufTtcblxuY29uc3QgVXNlclByb2ZpbGUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIGFjdGlvbnM9e1tcbiAgICAgICAgPGRpdiBrZXk9XCJ0d2l0XCI+XG4gICAgICAgICAg7Ke57Ke5XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAge2R1bW15LlBvc3RzLmxlbmd0aH1cbiAgICAgICAgPC9kaXY+LFxuICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2luZ1wiPlxuICAgICAgICAgIO2MlOuhnOyeiVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIHtkdW1teS5Gb2xsb3dpbmdzLmxlbmd0aH1cbiAgICAgICAgPC9kaXY+LFxuICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2VyXCI+XG4gICAgICAgICAg7YyU66Gc7JuMXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAge2R1bW15LkZvbGxvd2Vycy5sZW5ndGh9XG4gICAgICAgIDwvZGl2PixcbiAgICAgIF19PlxuICAgICAgPENhcmQuTWV0YSBhdmF0YXI9ezxBdmF0YXI+e2R1bW15Lm5pY2tuYW1lWzBdfTwvQXZhdGFyPn0gdGl0bGU9e2R1bW15Lm5pY2tuYW1lfSAvPlxuICAgICAgPEJ1dHRvbj7roZzqt7jslYTsm4M8L0J1dHRvbj5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UserProfile.js\n");

/***/ })

})