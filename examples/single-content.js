webpackJsonp([3],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rmc_tabs_assets_index_less__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rmc_tabs_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rmc_tabs_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src__ = __webpack_require__(38);





/* tslint:disable:no-console */




var tabData = [{ title: 't1' }, { title: 't2' }, { title: 't3' }, { title: 't4' }, { title: 't5' }];

var BasicDemo = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(BasicDemo, _React$Component);

    function BasicDemo(props) {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, BasicDemo);

        var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (BasicDemo.__proto__ || Object.getPrototypeOf(BasicDemo)).call(this, props));

        _this.renderContent = function (tab, index) {
            return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'p',
                    null,
                    'single content'
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'p',
                    null,
                    JSON.stringify({ index: index + Math.random(), tab: tab })
                )
            );
        };
        _this.state = {
            scData: JSON.stringify({ index: 0, tab: { title: 't1' } })
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(BasicDemo, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var baseStyle = {
                display: 'flex', flexDirection: 'column', marginTop: 10, marginBottom: 10, fontSize: 14
            };
            return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, baseStyle, { height: 240 }) },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'h2',
                        null,
                        'single content'
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_8__src__["a" /* Tabs */],
                        { tabs: tabData, onChange: function onChange(tab, index) {
                                _this2.setState({
                                    scData: JSON.stringify({ index: index + Math.random(), tab: tab })
                                });
                            } },
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            'div',
                            null,
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                this.state.scData
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, baseStyle, { height: 240 }) },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'h2',
                        null,
                        'single content function'
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_8__src__["a" /* Tabs */],
                        { tabs: tabData },
                        this.renderContent
                    )
                )
            );
        }
    }]);

    return BasicDemo;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(BasicDemo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(143);


/***/ })

},[314]);
//# sourceMappingURL=single-content.js.map