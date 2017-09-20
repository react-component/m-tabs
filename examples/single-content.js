webpackJsonp([2],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rmc_tabs_assets_index_less__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rmc_tabs_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rmc_tabs_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src__ = __webpack_require__(31);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* tslint:disable:no-console */




var tabData = [{ title: 't1' }, { title: 't2' }, { title: 't3' }, { title: 't4' }, { title: 't5' }];

var BasicDemo = function (_React$Component) {
    _inherits(BasicDemo, _React$Component);

    function BasicDemo(props) {
        _classCallCheck(this, BasicDemo);

        var _this = _possibleConstructorReturn(this, (BasicDemo.__proto__ || Object.getPrototypeOf(BasicDemo)).call(this, props));

        _this.renderContent = function (tab, index) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    null,
                    'single content'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
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

    _createClass(BasicDemo, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var baseStyle = {
                display: 'flex', flexDirection: 'column', marginTop: 10, marginBottom: 10, fontSize: 14
            };
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { style: _extends({}, baseStyle, { height: 240 }) },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h2',
                        null,
                        'single content'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3__src__["a" /* Tabs */],
                        { tabs: tabData, onChange: function onChange(tab, index) {
                                _this2.setState({
                                    scData: JSON.stringify({ index: index + Math.random(), tab: tab })
                                });
                            } },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'div',
                            null,
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'p',
                                null,
                                this.state.scData
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { style: _extends({}, baseStyle, { height: 240 }) },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h2',
                        null,
                        'single content function'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3__src__["a" /* Tabs */],
                        { tabs: tabData },
                        this.renderContent
                    )
                )
            );
        }
    }]);

    return BasicDemo;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(BasicDemo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(134);


/***/ })

},[293]);
//# sourceMappingURL=single-content.js.map