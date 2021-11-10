"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/player",{

/***/ "./pages/player.js":
/*!*************************!*\
  !*** ./pages/player.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\n/* harmony import */ var _home_vinodk_Code_sportfrontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_vinodk_Code_sportfrontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_vinodk_Code_sportfrontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Player(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    }), item = ref[0], setItem = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var pname = router.query.pname;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _client__WEBPACK_IMPORTED_MODULE_4__.client.fetch(\"*[_type == \\\"player\\\" && name == \".concat(pname, \"]{\\n            name,mainImage,description,game\\n        }\")).then(function(data) {\n            return setItem(data);\n        }).catch(function(err) {\n            return console.error(err);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        __source: {\n            fileName: \"/home/vinodk/Code/sportfrontend/pages/player.js\",\n            lineNumber: 19,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"main\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n            __source: {\n                fileName: \"/home/vinodk/Code/sportfrontend/pages/player.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().detail),\n                __source: {\n                    fileName: \"/home/vinodk/Code/sportfrontend/pages/player.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"a\", {\n                    __source: {\n                        fileName: \"/home/vinodk/Code/sportfrontend/pages/player.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"img\", {\n                            src: (0,_client__WEBPACK_IMPORTED_MODULE_4__.urlFor)(item === null || item === void 0 ? void 0 : item.mainImage).url(),\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().detailImage),\n                            __source: {\n                                fileName: \"/home/vinodk/Code/sportfrontend/pages/player.js\",\n                                lineNumber: 28,\n                                columnNumber: 17\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"h2\", {\n                            __source: {\n                                fileName: \"/home/vinodk/Code/sportfrontend/pages/player.js\",\n                                lineNumber: 29,\n                                columnNumber: 17\n                            },\n                            __self: this,\n                            children: [\n                                item === null || item === void 0 ? void 0 : item.name,\n                                \" →\"\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"/home/vinodk/Code/sportfrontend/pages/player.js\",\n                                lineNumber: 30,\n                                columnNumber: 17\n                            },\n                            __self: this,\n                            children: item === null || item === void 0 ? void 0 : item.description\n                        })\n                    ]\n                })\n            })\n        })\n    }));\n};\n_s(Player, \"LLxHLvTviJc1KHYGaQQC2pJVAzQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Player;\n// const searchParams = new URLSearchParams(window.location.search)\n//     const pname = searchParams.get('pname')\nPlayer.getInitialProps = (function(context) {\n    var _ref = _asyncToGenerator(_home_vinodk_Code_sportfrontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context) {\n        var _query, _pname, pname;\n        return _home_vinodk_Code_sportfrontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _query = context.query, _pname = _query.pname, pname = _pname === void 0 ? '' : _pname;\n                    _ctx.next = 3;\n                    return _client__WEBPACK_IMPORTED_MODULE_4__.client.fetch(\"\\n  *[_type == \\\"player\\\" && name == $pname][0]{name,mainImage,description,game}\\n  \", {\n                        pname: pname\n                    });\n                case 3:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function() {\n        return _ref.apply(this, arguments);\n    };\n})();\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1g7QUFDQztBQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLFFBQVEsQ0FBQ08sTUFBTSxDQUFDQyxLQUFLLEVBQUUsQ0FBQzs7SUFDbkMsR0FBSyxDQUFxQlAsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUM7SUFBQSxDQUFDLEdBQTdCUSxJQUFJLEdBQWNSLEdBQVksS0FBeEJTLE9BQU8sR0FBS1QsR0FBWTtJQUN0QyxHQUFLLENBQUNVLE1BQU0sR0FBR1Isc0RBQVM7SUFDMUIsR0FBSyxDQUFHUyxLQUFLLEdBQUtELE1BQU0sQ0FBQ0UsS0FBSyxDQUF0QkQsS0FBSztJQUVYVixnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiRSxpREFBWSxDQUFFLENBQStCLG1DQUFRLE1BRXBELENBRjhDUSxLQUFLLEVBQUMsQ0FFcEQsOERBQ0FHLElBQUksQ0FBQ0MsUUFBUU4sQ0FBUk0sSUFBSTtZQUFJTixNQUFNLENBQU5BLE9BQU8sQ0FBQ00sSUFBSTtXQUN6QkMsS0FBSyxDQUFDQyxRQUFRLENBQVJBLEdBQUc7WUFBSUMsTUFBTSxDQUFOQSxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsR0FBRzs7SUFDbkMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNQLE1BQU0sc0VBQ0hHLENBQUc7UUFBQ0MsU0FBUyxFQUFFaEIsMEVBQWdCOzs7Ozs7O3VGQUU3QmtCLENBQUk7WUFBQ0YsU0FBUyxFQUFFaEIscUVBQVc7Ozs7Ozs7MkZBS3pCZSxDQUFHO2dCQUFDQyxTQUFTLEVBQUVoQix1RUFBYTs7Ozs7OztnR0FDNUJvQixDQUFDOzs7Ozs7Ozs2RkFDT0MsQ0FBRzs0QkFBQ0MsR0FBRyxFQUFFdkIsK0NBQU0sQ0FBQ0ksSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBZSxHQUFmQSxJQUFJLENBQUpBLENBQWUsR0FBZkEsSUFBSSxDQUFFb0IsU0FBUyxFQUFFQyxHQUFHOzRCQUFJUixTQUFTLEVBQUVoQiw0RUFBa0I7Ozs7Ozs7OzhGQUNyRTBCLENBQUU7Ozs7Ozs7O2dDQUFFdkIsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBVSxHQUFWQSxJQUFJLENBQUpBLENBQVUsR0FBVkEsSUFBSSxDQUFFd0IsSUFBSTtnQ0FBQyxDQUFPOzs7NkZBQ3RCQyxDQUFDOzs7Ozs7O3NDQUFFekIsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBRTBCLFdBQVc7Ozs7Ozs7QUFNckMsQ0FBQztHQTlCdUI1QixNQUFNOztRQUVYSixrREFBUzs7O0tBRkpJLE1BQU07QUFnQzlCLEVBQW1FO0FBQ25FLEVBQThDO0FBQzlDQSxNQUFNLENBQUM2QixlQUFlLElBQUcsUUFBUSxDQUFPQyxPQUFPO3lKQUF0QixRQUFRLFNBQU9BLE9BQU8sRUFBRSxDQUFDO1lBRXpCQSxNQUFhLFVBQTVCekIsS0FBSzs7OztvQkFBVXlCLE1BQWEsR0FBYkEsT0FBTyxDQUFDeEIsS0FBSyxXQUFid0IsTUFBYSxDQUE1QnpCLEtBQUssRUFBTEEsS0FBSyx1QkFBRyxDQUFFOzsyQkFDTFIsaURBQVksQ0FBRSxDQUUzQix1RkFBRyxDQUFDO3dCQUFDUSxLQUFLLEVBQUxBLEtBQUs7b0JBQUMsQ0FBQzs7Ozs7Ozs7SUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BsYXllci5qcz9kYzY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7Y2xpZW50LCB1cmxGb3J9IGZyb20gJy4uL2NsaWVudCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKHByb3BzKSB7XG4gICAgY29uc3QgWyBpdGVtLCBzZXRJdGVtIF0gPSB1c2VTdGF0ZSh7fSlcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IHBuYW1lIH0gPSByb3V0ZXIucXVlcnlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNsaWVudC5mZXRjaChgKltfdHlwZSA9PSBcInBsYXllclwiICYmIG5hbWUgPT0gJHtwbmFtZX1de1xuICAgICAgICAgICAgbmFtZSxtYWluSW1hZ2UsZGVzY3JpcHRpb24sZ2FtZVxuICAgICAgICB9YClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBzZXRJdGVtKGRhdGEpKVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcbiAgICB9LCBbXSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICB7LyogPGgzIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBUaGlzIHBhZ2UgaXMgYWJvdXQge3Byb3BzPy5uYW1lfVxuICAgICAgICA8L2gzPiAqL31cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbH0+XG4gICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IoaXRlbT8ubWFpbkltYWdlKS51cmwoKX0gY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsSW1hZ2V9Lz5cbiAgICAgICAgICAgICAgICA8aDI+e2l0ZW0/Lm5hbWV9ICZyYXJyOzwvaDI+XG4gICAgICAgICAgICAgICAgPHA+e2l0ZW0/LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG4vLyAgICAgY29uc3QgcG5hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KCdwbmFtZScpXG5QbGF5ZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xuICAgIFxuICBjb25zdCB7IHBuYW1lID0gJycgfSA9IGNvbnRleHQucXVlcnlcbiAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChgXG4gICpbX3R5cGUgPT0gXCJwbGF5ZXJcIiAmJiBuYW1lID09ICRwbmFtZV1bMF17bmFtZSxtYWluSW1hZ2UsZGVzY3JpcHRpb24sZ2FtZX1cbiAgYCwgeyBwbmFtZSB9KVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJjbGllbnQiLCJ1cmxGb3IiLCJzdHlsZXMiLCJQbGF5ZXIiLCJwcm9wcyIsIml0ZW0iLCJzZXRJdGVtIiwicm91dGVyIiwicG5hbWUiLCJxdWVyeSIsImZldGNoIiwidGhlbiIsImRhdGEiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1haW4iLCJkZXRhaWwiLCJhIiwiaW1nIiwic3JjIiwibWFpbkltYWdlIiwidXJsIiwiZGV0YWlsSW1hZ2UiLCJoMiIsIm5hbWUiLCJwIiwiZGVzY3JpcHRpb24iLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/player.js\n");

/***/ })

});