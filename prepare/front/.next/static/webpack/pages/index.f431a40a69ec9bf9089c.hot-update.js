webpackHotUpdate_N_E("pages/index",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\nvar _this = undefined,\n  _jsxFileName = \"/Users/kimsungkwang/WORKSPACE/Nodejs/Nodebird_react/prepare/front/components/UserProfile.js\",\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar UserProfile = function UserProfile(_ref) {\n  _s();\n  var setIsLoggedIn = _ref.setIsLoggedIn;\n  var onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    setIsLoggedIn(false);\n  }, []);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    actions: [__jsx(\"div\", {\n      key: \"twit\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }\n    }, \"\\uC9F9\\uC9F9 \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 14\n      }\n    }), \"0\"), __jsx(\"div\", {\n      key: \"followings\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }\n    }, \"\\uD314\\uB85C\\uC789 \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 15\n      }\n    }), \"0\"), __jsx(\"div\", {\n      key: \"followers\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }\n    }, \"\\uD314\\uB85C\\uC6CC \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 15\n      }\n    }), \"0\")],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Meta, {\n    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 26\n      }\n    }, \"ZC\"),\n    title: \"sungoang\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: onLogOut,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, \"\\uB85C\\uADF8\\uC544\\uC6C3\"));\n};\n_s(UserProfile, \"soEkKhOFJiBA5pEh4NHl5+aG1VY=\");\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcz8yN2I5Il0sIm5hbWVzIjpbIlVzZXJQcm9maWxlIiwic2V0SXNMb2dnZWRJbiIsIm9uTG9nT3V0IiwidXNlQ2FsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJDO0FBQ0M7QUFFNUMsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQVcsT0FBMEI7RUFBQTtFQUFBLElBQXBCQyxhQUFhLFFBQWJBLGFBQWE7RUFDbEMsSUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFlBQU07SUFDakNGLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDdEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLE9BQ0UsTUFBQyx5Q0FBSTtJQUNILE9BQU8sRUFBRSxDQUNQO01BQUssR0FBRyxFQUFDLE1BQU07TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxvQkFDVjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQU0sTUFDTCxFQUNOO01BQUssR0FBRyxFQUFDLFlBQVk7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSwwQkFDZjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQU0sTUFDTixFQUNOO01BQUssR0FBRyxFQUFDLFdBQVc7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSwwQkFDZDtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQU0sTUFDTixDQUNOO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRixNQUFDLHlDQUFJLENBQUMsSUFBSTtJQUFDLE1BQU0sRUFBRSxNQUFDLDJDQUFNO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsUUFBYTtJQUFDLEtBQUssRUFBQyxVQUFVO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxFQUMzRCxNQUFDLDJDQUFNO0lBQUMsT0FBTyxFQUFFQyxRQUFTO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsOEJBQWMsQ0FDbkM7QUFFWCxDQUFDO0FBQUMsR0F0QklGLFdBQVc7QUFBQSxLQUFYQSxXQUFXO0FBd0JGQSwwRUFBVyxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvVXNlclByb2ZpbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEF2YXRhciwgQnV0dG9uLCBDYXJkIH0gZnJvbSBcImFudGRcIjtcblxuY29uc3QgVXNlclByb2ZpbGUgPSAoeyBzZXRJc0xvZ2dlZEluIH0pID0+IHtcbiAgY29uc3Qgb25Mb2dPdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SXNMb2dnZWRJbihmYWxzZSk7XG4gIH0sIFtdKTtcbiAgXG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIGFjdGlvbnM9e1tcbiAgICAgICAgPGRpdiBrZXk9XCJ0d2l0XCI+XG4gICAgICAgICAg7Ke57Ke5IDxiciAvPjBcbiAgICAgICAgPC9kaXY+LFxuICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2luZ3NcIj5cbiAgICAgICAgICDtjJTroZzsnokgPGJyIC8+MFxuICAgICAgICA8L2Rpdj4sXG4gICAgICAgIDxkaXYga2V5PVwiZm9sbG93ZXJzXCI+XG4gICAgICAgICAg7YyU66Gc7JuMIDxiciAvPjBcbiAgICAgICAgPC9kaXY+LFxuICAgICAgXX0+XG4gICAgICA8Q2FyZC5NZXRhIGF2YXRhcj17PEF2YXRhcj5aQzwvQXZhdGFyPn0gdGl0bGU9XCJzdW5nb2FuZ1wiIC8+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uTG9nT3V0fT7roZzqt7jslYTsm4M8L0J1dHRvbj5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UserProfile.js\n");

/***/ })

})