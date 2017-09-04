webpackJsonp([2],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rmc_tabs_assets_index_less__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rmc_tabs_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rmc_tabs_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src__ = __webpack_require__(45);





/* tslint:disable:no-console */




var en = location.search.indexOf('en') !== -1;
var tabData = [{ title: 'tit 1' }, { title: 'tit 2' }, { title: 'tit 3' }, { title: 'tit 4' }, { title: 'tit 5' }, { title: 'tit 6' }, { title: 'tit 7' }, { title: 'tit 8' }, { title: 'tit 9' }];

var BasicDemo = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(BasicDemo, _React$Component);

    function BasicDemo(props) {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, BasicDemo);

        var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (BasicDemo.__proto__ || Object.getPrototypeOf(BasicDemo)).call(this, props));

        _this.renderContent = function (index, tab) {
            return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'p',
                    null,
                    'scrollable tab'
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'p',
                    null,
                    JSON.stringify({ index: index + Math.random(), tab: tab })
                )
            );
        };
        _this.state = {
            scData: JSON.stringify({ index: 0, tab: { title: 't1' } }),
            scData2: JSON.stringify({ index: 0, tab: { title: 't1' } })
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
                    { style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, baseStyle) },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'h2',
                        null,
                        'normal'
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_8__src__["a" /* Tabs */],
                        { tabs: tabData, onChangeTab: function onChangeTab(index, tab) {
                                _this2.setState({
                                    scData: JSON.stringify({ index: index + Math.random(), tab: tab })
                                });
                            }, renderTabBar: function renderTabBar(props) {
                                return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__src__["b" /* DefaultTabBar */], props);
                            } },
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            'div',
                            { style: { padding: 10, background: '#ADFFD7' } },
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                this.state.scData
                            ),
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'h2',
                        null,
                        'page'
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_8__src__["a" /* Tabs */],
                        { tabs: tabData, onChangeTab: function onChangeTab(index, tab) {
                                _this2.setState({
                                    scData2: JSON.stringify({ index: index + Math.random(), tab: tab })
                                });
                            }, renderTabBar: function renderTabBar(props) {
                                return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__src__["b" /* DefaultTabBar */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { page: 4 }));
                            } },
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            'div',
                            { style: { padding: 10, background: '#ADFFD7' } },
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                this.state.scData2
                            ),
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return BasicDemo;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(BasicDemo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(138);


/***/ })

},[291]);
//# sourceMappingURL=scroll-tab.js.map