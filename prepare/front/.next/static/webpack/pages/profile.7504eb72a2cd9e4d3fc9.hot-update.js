webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NicknameEditForm */ \"./components/NicknameEditForm.js\");\n/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FollowList */ \"./components/FollowList.js\");\nvar _this = undefined,\n  _jsxFileName = \"/Users/kimsungkwang/WORKSPACE/Nodejs/Nodebird_react/prepare/front/pages/profile.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Profile = function Profile() {\n  var followerList = [{\n    nickname: \"김성광\"\n  }, {\n    nickname: \"홍길동\"\n  }, {\n    nickname: \"전우치\"\n  }];\n  var followingList = [{\n    nickname: \"김성광\"\n  }, {\n    nickname: \"홍길동\"\n  }, {\n    nickname: \"전우치\"\n  }];\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, \"\\uB0B4 \\uD504\\uB85C\\uD544 | Nodebird\")), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }), __jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    herder: \" \\uC720\\uC800 \\uAC80\\uC0C9 \",\n    data: followingList,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }), __jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    herder: \"\\uD314\\uB85C\\uC6CC \\uBAA9\\uB85D\",\n    data: followerList,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  })));\n};\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcz81YmUyIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJmb2xsb3dlckxpc3QiLCJuaWNrbmFtZSIsImZvbGxvd2luZ0xpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0c7QUFFbUI7QUFDYztBQUNaO0FBRWxELElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFPLEdBQVM7RUFDcEIsSUFBTUMsWUFBWSxHQUFHLENBQUM7SUFBRUMsUUFBUSxFQUFFO0VBQU0sQ0FBQyxFQUFFO0lBQUVBLFFBQVEsRUFBRTtFQUFNLENBQUMsRUFBRTtJQUFFQSxRQUFRLEVBQUU7RUFBTSxDQUFDLENBQUM7RUFDcEYsSUFBTUMsYUFBYSxHQUFHLENBQUM7SUFBRUQsUUFBUSxFQUFFO0VBQU0sQ0FBQyxFQUFFO0lBQUVBLFFBQVEsRUFBRTtFQUFNLENBQUMsRUFBRTtJQUFFQSxRQUFRLEVBQUU7RUFBTSxDQUFDLENBQUM7RUFFckYsT0FDRSxtRUFDRSxNQUFDLGdEQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDSDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDBDQUErQixDQUMxQixFQUNQLE1BQUMsNkRBQVM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNSLE1BQUMsb0VBQWdCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxFQUNwQixNQUFDLDhEQUFVO0lBQUMsTUFBTSxFQUFDLDZCQUFTO0lBQUMsSUFBSSxFQUFFQyxhQUFjO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxFQUNwRCxNQUFDLDhEQUFVO0lBQUMsTUFBTSxFQUFDLGlDQUFRO0lBQUMsSUFBSSxFQUFFRixZQUFhO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxDQUN4QyxDQUNYO0FBRVAsQ0FBQztBQUFDLEtBaEJJRCxPQUFPO0FBa0JFQSxzRUFBTyxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiIuL3BhZ2VzL3Byb2ZpbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XG5pbXBvcnQgTmlja25hbWVFZGl0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtXCI7XG5pbXBvcnQgRm9sbG93TGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb2xsb3dMaXN0XCI7XG5cbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGZvbGxvd2VyTGlzdCA9IFt7IG5pY2tuYW1lOiBcIuq5gOyEseq0kVwiIH0sIHsgbmlja25hbWU6IFwi7ZmN6ri464+ZXCIgfSwgeyBuaWNrbmFtZTogXCLsoITsmrDsuZhcIiB9XTtcbiAgY29uc3QgZm9sbG93aW5nTGlzdCA9IFt7IG5pY2tuYW1lOiBcIuq5gOyEseq0kVwiIH0sIHsgbmlja25hbWU6IFwi7ZmN6ri464+ZXCIgfSwgeyBuaWNrbmFtZTogXCLsoITsmrDsuZhcIiB9XTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPuuCtCDtlITroZztlYQgfCBOb2RlYmlyZDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QXBwTGF5b3V0PlxuICAgICAgICA8Tmlja25hbWVFZGl0Rm9ybSAvPlxuICAgICAgICA8Rm9sbG93TGlzdCBoZXJkZXI9XCIg7Jyg7KCAIOqygOyDiSBcIiBkYXRhPXtmb2xsb3dpbmdMaXN0fSAvPlxuICAgICAgICA8Rm9sbG93TGlzdCBoZXJkZXI9XCLtjJTroZzsm4wg66qp66GdXCIgZGF0YT17Zm9sbG93ZXJMaXN0fSAvPlxuICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/profile.js\n");

/***/ })

})