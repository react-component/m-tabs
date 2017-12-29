webpackJsonp([1],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rmc_tabs_assets_index_less__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rmc_tabs_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rmc_tabs_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(10);
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
        { key: '1', style: { background: '#ADFFD7' } },
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
        { key: '2', style: { background: '#ADFFD7' } },
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
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          { style: pStyle },
          'tab 2 6'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          { style: pStyle },
          'tab 2 7'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          { style: pStyle },
          'tab 2 8'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          { style: pStyle },
          'tab 2 9'
        )
      ), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { key: '3', style: { background: '#ADFFD7' } },
        'tab 3'
      ), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { key: '4', style: { background: '#ADFFD7' } },
        'tab 4'
      ), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { key: '5', style: { background: '#ADFFD7' } },
        'tab 5'
      ), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { key: '6', style: { background: '#ADFFD7' } },
        'tab 6'
      ), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { key: '7', style: { background: '#ADFFD7' } },
        'tab 7'
      ), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { key: '8', style: { background: '#ADFFD7' } },
        'tab 8'
      ), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { key: '9', style: { background: '#ADFFD7' } },
        'tab 9'
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
            'vertical'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__src__["a" /* Tabs */],
            { tabs: [{ title: 't1' }, { title: 't2' }, { title: 't3' }, { title: 't4' }, { title: 't5' }], tabBarPosition: 'left' },
            this.renderContent()
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { style: _extends({}, baseStyle, { height: 200 }) },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h2',
            null,
            'vertical fixed height'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__src__["a" /* Tabs */],
            { tabs: [{ title: 't1' }, { title: 't2' }, { title: 't3' }, { title: 't4' }, { title: 't5' }], tabBarPosition: 'left', tabDirection: 'vertical' },
            this.renderContent()
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { style: _extends({}, baseStyle, { height: 200 }) },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h2',
            null,
            'vertical right'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__src__["a" /* Tabs */],
            { tabs: [{ title: 't1' }, { title: 't2' }, { title: 't3' }, { title: 't4' }, { title: 't5' }], tabBarPosition: 'right', tabDirection: 'vertical' },
            this.renderContent()
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { style: _extends({}, baseStyle, { height: 200 }) },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h2',
            null,
            'no paged'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__src__["a" /* Tabs */],
            { tabs: [{ title: 't1' }, { title: 't2' }, { title: 't3' }, { title: 't4' }, { title: 't5' }], tabBarPosition: 'right', tabDirection: 'vertical', usePaged: false },
            this.renderContent()
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { style: _extends({}, baseStyle, { height: 200 }) },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h2',
            null,
            'vertical right'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__src__["a" /* Tabs */],
            { tabs: [{ title: 't1' }, { title: 't2' }, { title: 't3' }, { title: 't4' }, { title: 't5' }, { title: 't6' }, { title: 't7' }, { title: 't8' }], tabBarPosition: 'left', tabDirection: 'vertical' },
            this.renderContent()
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { style: _extends({}, baseStyle, { height: 200 }) },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h2',
            null,
            'useLeftInsteadTransform'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__src__["a" /* Tabs */],
            { tabs: [{ title: 't1' }, { title: 't2' }, { title: 't3' }, { title: 't4' }, { title: 't5' }, { title: 't6' }, { title: 't7' }, { title: 't8' }], tabBarPosition: 'left', tabDirection: 'vertical', useLeftInsteadTransform: true },
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

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(136);


/***/ })

},[298]);
//# sourceMappingURL=vertical.js.map