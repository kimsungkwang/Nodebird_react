webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\nvar _this = undefined,\n  _jsxFileName = \"/Users/kimsungkwang/WORKSPACE/Nodejs/Nodebird_react/prepare/front/components/PostForm.js\",\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar PostForm = function PostForm() {\n  _s();\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n      return state.post;\n    }),\n    imagePaths = _useSelector.imagePaths;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n    text = _useState[0],\n    setText = _useState[1];\n  var onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (e) {\n    setText(e.target.value);\n  }, []);\n  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    dispatch(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"addPost\"]);\n  }, []);\n  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    imageInput.current.onClick;\n  }, [imageInput.current]);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    style: {\n      margin: \"10px 0 20px\"\n    },\n    encType: \"multipart/form-data\",\n    onFinish: onSubmitForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"].TextArea, {\n    maxLength: 140,\n    placeholder: \"\\uC5B4\\uB5A4 \\uC2E0\\uAE30\\uD55C \\uC77C\\uC774 \\uC788\\uC5C8\\uB098\\uC694?\",\n    value: text,\n    onChange: onChangeText,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"file\",\n    multiple: true,\n    hidden: true,\n    ref: imageInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: onClickImageUpload,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, \"\\uC774\\uBBF8\\uC9C0 \\uC5C5\\uB85C\\uB4DC\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    style: {\n      \"float\": \"right\"\n    },\n    htmlType: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, \"\\uC9F9\\uC9F9\")), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, imagePaths.map(function (v) {\n    return __jsx(\"div\", {\n      key: v,\n      style: {\n        display: \"inline-block\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }\n    }, __jsx(\"img\", {\n      src: \"http://localhost:3000/\".concat(v),\n      style: {\n        width: \"200px\"\n      },\n      alt: v,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 13\n      }\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 15\n      }\n    }, \"\\uC81C\\uAC70\")));\n  })));\n};\n_s(PostForm, \"oyEHnmVCFoE1yD4ctXJbuC9HX4g=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"]];\n});\n_c = PostForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostForm);\nvar _c;\n$RefreshReg$(_c, \"PostForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcz83OWM1Il0sIm5hbWVzIjpbIlBvc3RGb3JtIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0Iiwib25DaGFuZ2VUZXh0IiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdEZvcm0iLCJhZGRQb3N0Iiwib25DbGlja0ltYWdlVXBsb2FkIiwiY3VycmVudCIsIm9uQ2xpY2siLCJtYXJnaW4iLCJtYXAiLCJ2IiwiZGlzcGxheSIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZEO0FBQ2xCO0FBQ1k7QUFDWjtBQUUzQyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUSxHQUFTO0VBQUE7RUFDckIsbUJBQXVCQywrREFBVyxDQUFDLFVBQUNDLEtBQUs7TUFBQSxPQUFLQSxLQUFLLENBQUNDLElBQUk7SUFBQSxFQUFDO0lBQWpEQyxVQUFVLGdCQUFWQSxVQUFVO0VBQ2xCLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBRTtFQUM5QixJQUFNQyxVQUFVLEdBQUdDLG9EQUFNLEVBQUU7RUFDM0IsZ0JBQXdCQyxzREFBUSxDQUFDLEVBQUUsQ0FBQztJQUE3QkMsSUFBSTtJQUFFQyxPQUFPO0VBQ3BCLElBQU1DLFlBQVksR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFDLEVBQUs7SUFDdENILE9BQU8sQ0FBQ0csQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztFQUN6QixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ04sSUFBTUMsWUFBWSxHQUFHSix5REFBVyxDQUFDLFlBQU07SUFDckNSLFFBQVEsQ0FBQ2Esc0RBQU8sQ0FBQztFQUNuQixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ04sSUFBTUMsa0JBQWtCLEdBQUdOLHlEQUFXLENBQUMsWUFBTTtJQUN6Q04sVUFBVSxDQUFDYSxPQUFPLENBQUNDLE9BQU87RUFDOUIsQ0FBQyxFQUFFLENBQUNkLFVBQVUsQ0FBQ2EsT0FBTyxDQUFDLENBQUM7RUFFeEIsT0FDRSxNQUFDLHlDQUFJO0lBQUMsS0FBSyxFQUFFO01BQUVFLE1BQU0sRUFBRTtJQUFjLENBQUU7SUFBQyxPQUFPLEVBQUMscUJBQXFCO0lBQUMsUUFBUSxFQUFFTCxZQUFhO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDM0YsTUFBQywwQ0FBSyxDQUFDLFFBQVE7SUFBQyxTQUFTLEVBQUUsR0FBSTtJQUFDLFdBQVcsRUFBQyx3RUFBaUI7SUFBQyxLQUFLLEVBQUVQLElBQUs7SUFBQyxRQUFRLEVBQUVFLFlBQWE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEVBQ3JHO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUFPLElBQUksRUFBQyxNQUFNO0lBQUMsUUFBUTtJQUFDLE1BQU07SUFBQyxHQUFHLEVBQUVMLFVBQVc7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEVBQ3RELE1BQUMsMkNBQU07SUFBQyxPQUFPLEVBQUVZLGtCQUFtQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDJDQUFpQixFQUNyRCxNQUFDLDJDQUFNO0lBQUMsSUFBSSxFQUFDLFNBQVM7SUFBQyxLQUFLLEVBQUU7TUFBRSxTQUFPO0lBQVEsQ0FBRTtJQUFDLFFBQVEsRUFBQyxRQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsa0JBRTFELENBQ0wsRUFDTjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0dmLFVBQVUsQ0FBQ21CLEdBQUcsQ0FBQyxVQUFDQyxDQUFDO0lBQUEsT0FDaEI7TUFBSyxHQUFHLEVBQUVBLENBQUU7TUFBQyxLQUFLLEVBQUU7UUFBRUMsT0FBTyxFQUFFO01BQWUsQ0FBRTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQzlDO01BQUssR0FBRyxrQ0FBMkJELENBQUMsQ0FBRztNQUFDLEtBQUssRUFBRTtRQUFFRSxLQUFLLEVBQUU7TUFBUSxDQUFFO01BQUMsR0FBRyxFQUFFRixDQUFFO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFBRyxFQUM3RTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQ0UsTUFBQywyQ0FBTTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLGtCQUFZLENBQ2YsQ0FDRjtFQUFBLENBQ1AsQ0FBQyxDQUNFLENBQ0Q7QUFFWCxDQUFDO0FBQUMsR0FyQ0l4QixRQUFRO0VBQUEsUUFDV0MsdURBQVcsRUFDakJLLHVEQUFXO0FBQUE7QUFBQSxLQUZ4Qk4sUUFBUTtBQXVDQ0EsdUVBQVEsRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYWRkUG9zdCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XG5cbmNvbnN0IFBvc3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCB7IGltYWdlUGF0aHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgb25DaGFuZ2VUZXh0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcbiAgfSwgW10pO1xuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goYWRkUG9zdCk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgaW1hZ2VJbnB1dC5jdXJyZW50Lm9uQ2xpY2tcbiAgfSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHggMCAyMHB4XCIgfX0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cbiAgICAgIDxJbnB1dC5UZXh0QXJlYSBtYXhMZW5ndGg9ezE0MH0gcGxhY2Vob2xkZXI9XCLslrTrlqQg7Iug6riw7ZWcIOydvOydtCDsnojsl4jrgpjsmpQ/XCIgdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9IC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fSAvPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+7J2066+47KeAIOyXheuhnOuTnDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiB9fSBodG1sVHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIOynueynuVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge2ltYWdlUGF0aHMubWFwKCh2KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3Z9IHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+XG4gICAgICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8ke3Z9YH0gc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiB9fSBhbHQ9e3Z9IC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8QnV0dG9uPuygnOqxsDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9Gb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PostForm.js\n");

/***/ })

})