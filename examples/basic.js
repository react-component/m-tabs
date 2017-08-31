webpackJsonp([2],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rmc_tabs_assets_index_less__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rmc_tabs_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rmc_tabs_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src__ = __webpack_require__(50);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* tslint:disable:no-console */




var en = location.search.indexOf('en') !== -1;

var BasicDemo = function (_React$Component) {
    _inherits(BasicDemo, _React$Component);

    function BasicDemo(props) {
        _classCallCheck(this, BasicDemo);

        return _possibleConstructorReturn(this, (BasicDemo.__proto__ || Object.getPrototypeOf(BasicDemo)).call(this, props));
    }

    _createClass(BasicDemo, [{
        key: 'renderContent',
        value: function renderContent() {
            var pStyle = { margin: 0, padding: 10 };
            return [__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { key: 't1', style: { background: '#ADFFD7' } },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 1 1'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 1 2'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 1 3'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 1 4'
                )
            ), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { key: 't2', style: { background: '#ADFFD7' } },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 2 1'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 2 2'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 2 3'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 2 4'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 2 5'
                )
            ), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { key: 't3', style: { background: '#ADFFD7' } },
                'tab 3'
            ), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { key: 't4', style: { background: '#ADFFD7' } },
                'tab 4'
            ), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { key: 't5', style: { background: '#ADFFD7' } },
                'tab 5'
            )];
        }
    }, {
        key: 'render',
        value: function render() {
            var baseStyle = {
                display: 'flex', flexDirection: 'column', marginTop: 10, marginBottom: 10, fontSize: 14
            };
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { style: baseStyle },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h2',
                        null,
                        'normal'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3__src__["a" /* Tabs */],
                        { tabs: [{ key: 't1', title: 't1' }, { key: 't2', title: 't2' }, { key: 't3', title: 't3' }, { key: 't4', title: 't4' }, { key: 't5', title: 't5' }], initalPage: 't2' },
                        this.renderContent()
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { style: baseStyle },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h2',
                        null,
                        'bottom'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3__src__["a" /* Tabs */],
                        { tabs: [{ key: 't1', title: 't1' }, { key: 't2', title: 't2' }, { key: 't3', title: 't3' }, { key: 't4', title: 't4' }], initalPage: 't2', tabBarPosition: 'bottom' },
                        this.renderContent()
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { style: _extends({}, baseStyle, { height: 240 }) },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h2',
                        null,
                        'fixed height'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3__src__["a" /* Tabs */],
                        { tabs: [{ title: 't1' }, { title: 't2' }, { title: 't3' }, { title: 't4' }, { title: 't5' }], initalPage: 1, prerenderingSiblingsNumber: 1 },
                        this.renderContent()
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { style: _extends({}, baseStyle, { height: 240 }) },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h2',
                        null,
                        'no animate'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3__src__["a" /* Tabs */],
                        { tabs: [{ title: 't1' }, { title: 't2' }, { title: 't3' }, { title: 't4' }, { title: 't5' }], animated: false },
                        this.renderContent()
                    )
                )
            );
        }
    }]);

    return BasicDemo;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(BasicDemo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(130);


/***/ })

},[289]);
//# sourceMappingURL=basic.js.map