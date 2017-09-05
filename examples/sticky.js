webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(107)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(203)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Channel = function Channel(data) {
  _classCallCheck(this, Channel);

  var listeners = [];
  data = data || {};

  this.subscribe = function (fn) {
    listeners.push(fn);
  };

  this.unsubscribe = function (fn) {
    var idx = listeners.indexOf(fn);
    if (idx !== -1) listeners.splice(idx, 1);
  };

  this.update = function (fn) {
    if (fn) fn(data);
    listeners.forEach(function (l) {
      return l(data);
    });
  };
};

exports.default = Channel;
module.exports = exports['default'];

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rmc_tabs_assets_index_less__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rmc_tabs_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rmc_tabs_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_sticky__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_sticky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_sticky__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src__ = __webpack_require__(45);




/* tslint:disable:no-console */





var en = location.search.indexOf('en') !== -1;

var BasicDemo = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(BasicDemo, _React$Component);

    function BasicDemo(props) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, BasicDemo);

        return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (BasicDemo.__proto__ || Object.getPrototypeOf(BasicDemo)).call(this, props));
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(BasicDemo, [{
        key: 'renderContent',
        value: function renderContent() {
            var pStyle = { margin: 0, padding: 10 };
            return [__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { key: 't1', style: { background: '#ADFFD7' } },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 1 1'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 1 2'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 1 3'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 1 4'
                )
            ), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { key: 't2', style: { background: '#ADFFD7' } },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 2 1'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 2 2'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 2 3'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 2 4'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 2 5'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 2 6'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 2 7'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 2 8'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 2 9'
                )
            ), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { key: 't3', style: { background: '#ADFFD7' } },
                'tab 3'
            ), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { key: 't4', style: { background: '#ADFFD7' } },
                'tab 4'
            ), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
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
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'div',
                    { style: baseStyle },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        'h2',
                        null,
                        'Sticky'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_react_sticky__["StickyContainer"],
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_8__src__["a" /* Tabs */],
                            { tabs: [{ key: 't1', title: 't1' }, { key: 't2', title: 't2' }, { key: 't3', title: 't3' }, { key: 't4', title: 't4' }, { key: 't5', title: 't5' }], initialPage: 't2', renderTabBar: function renderTabBar(props) {
                                    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_7_react_sticky__["Sticky"],
                                        { style: { zIndex: 1 } },
                                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__src__["b" /* DefaultTabBar */], props)
                                    );
                                } },
                            this.renderContent()
                        )
                    )
                )
            );
        }
    }]);

    return BasicDemo;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(BasicDemo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(8);
var invariant = __webpack_require__(1);
var ReactPropTypesSecret = __webpack_require__(72);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(108);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _channel = __webpack_require__(132);

var _channel2 = _interopRequireDefault(_channel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container(props) {
    _classCallCheck(this, Container);

    var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));

    _this.updateOffset = function (_ref) {
      var inherited = _ref.inherited,
          offset = _ref.offset;

      _this.channel.update(function (data) {
        data.inherited = inherited + offset;
      });
    };

    _this.channel = new _channel2.default({ inherited: 0, offset: 0, node: null });
    return _this;
  }

  _createClass(Container, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { 'sticky-channel': this.channel };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var parentChannel = this.context['sticky-channel'];
      if (parentChannel) parentChannel.subscribe(this.updateOffset);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var node = _reactDom2.default.findDOMNode(this);
      this.channel.update(function (data) {
        data.node = node;
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.channel.update(function (data) {
        data.node = null;
      });

      var parentChannel = this.context['sticky-channel'];
      if (parentChannel) parentChannel.unsubscribe(this.updateOffset);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        this.props,
        this.props.children
      );
    }
  }]);

  return Container;
}(_react2.default.Component);

Container.contextTypes = {
  'sticky-channel': _propTypes2.default.any
};
Container.childContextTypes = {
  'sticky-channel': _propTypes2.default.any
};
exports.default = Container;
module.exports = exports['default'];

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Channel = exports.StickyContainer = exports.Sticky = undefined;

var _sticky = __webpack_require__(277);

var _sticky2 = _interopRequireDefault(_sticky);

var _container = __webpack_require__(275);

var _container2 = _interopRequireDefault(_container);

var _channel = __webpack_require__(132);

var _channel2 = _interopRequireDefault(_channel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Sticky = _sticky2.default;
exports.StickyContainer = _container2.default;
exports.Channel = _channel2.default;
exports.default = _sticky2.default;

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(108);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sticky = function (_React$Component) {
  _inherits(Sticky, _React$Component);

  function Sticky(props) {
    _classCallCheck(this, Sticky);

    var _this = _possibleConstructorReturn(this, (Sticky.__proto__ || Object.getPrototypeOf(Sticky)).call(this, props));

    _this.updateContext = function (_ref) {
      var inherited = _ref.inherited,
          node = _ref.node;

      _this.containerNode = node;
      _this.setState({
        containerOffset: inherited,
        distanceFromBottom: _this.getDistanceFromBottom()
      });
    };

    _this.recomputeState = function () {
      var isSticky = _this.isSticky();
      var height = _this.getHeight();
      var width = _this.getWidth();
      var xOffset = _this.getXOffset();
      var distanceFromBottom = _this.getDistanceFromBottom();
      var hasChanged = _this.state.isSticky !== isSticky;

      _this.setState({ isSticky: isSticky, height: height, width: width, xOffset: xOffset, distanceFromBottom: distanceFromBottom });

      if (hasChanged) {
        if (_this.channel) {
          _this.channel.update(function (data) {
            data.offset = isSticky ? _this.state.height : 0;
          });
        }

        _this.props.onStickyStateChange(isSticky);
      }
    };

    _this.state = {};
    return _this;
  }

  _createClass(Sticky, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.channel = this.context['sticky-channel'];
      this.channel.subscribe(this.updateContext);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.on(['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'], this.recomputeState);
      this.recomputeState();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.recomputeState();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.off(['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'], this.recomputeState);
      this.channel.unsubscribe(this.updateContext);
    }
  }, {
    key: 'getXOffset',
    value: function getXOffset() {
      return this.refs.placeholder.getBoundingClientRect().left;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.refs.placeholder.getBoundingClientRect().width;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      return _reactDom2.default.findDOMNode(this.refs.children).getBoundingClientRect().height;
    }
  }, {
    key: 'getDistanceFromTop',
    value: function getDistanceFromTop() {
      return this.refs.placeholder.getBoundingClientRect().top;
    }
  }, {
    key: 'getDistanceFromBottom',
    value: function getDistanceFromBottom() {
      if (!this.containerNode) return 0;
      return this.containerNode.getBoundingClientRect().bottom;
    }
  }, {
    key: 'isSticky',
    value: function isSticky() {
      if (!this.props.isActive) return false;

      var fromTop = this.getDistanceFromTop();
      var fromBottom = this.getDistanceFromBottom();

      var topBreakpoint = this.state.containerOffset - this.props.topOffset;
      var bottomBreakpoint = this.state.containerOffset + this.props.bottomOffset;

      return fromTop <= topBreakpoint && fromBottom >= bottomBreakpoint;
    }
  }, {
    key: 'on',
    value: function on(events, callback) {
      events.forEach(function (evt) {
        window.addEventListener(evt, callback);
      });
    }
  }, {
    key: 'off',
    value: function off(events, callback) {
      events.forEach(function (evt) {
        window.removeEventListener(evt, callback);
      });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(newProps, newState) {
      var _this2 = this;

      // Have we changed the number of props?
      var propNames = Object.keys(this.props);
      if (Object.keys(newProps).length != propNames.length) return true;

      // Have we changed any prop values?
      var valuesMatch = propNames.every(function (key) {
        return newProps.hasOwnProperty(key) && newProps[key] === _this2.props[key];
      });
      if (!valuesMatch) return true;

      // Have we changed any state that will always impact rendering?
      var state = this.state;
      if (newState.isSticky !== state.isSticky) return true;

      // If we are sticky, have we changed any state that will impact rendering?
      if (state.isSticky) {
        if (newState.height !== state.height) return true;
        if (newState.width !== state.width) return true;
        if (newState.xOffset !== state.xOffset) return true;
        if (newState.containerOffset !== state.containerOffset) return true;
        if (newState.distanceFromBottom !== state.distanceFromBottom) return true;
      }

      return false;
    }

    /*
     * The special sauce.
     */

  }, {
    key: 'render',
    value: function render() {
      var placeholderStyle = { paddingBottom: 0 };
      var className = this.props.className;

      // To ensure that this component becomes sticky immediately on mobile devices instead
      // of disappearing until the scroll event completes, we add `transform: translateZ(0)`
      // to 'kick' rendering of this element to the GPU
      // @see http://stackoverflow.com/questions/32875046
      var style = _extends({}, { transform: 'translateZ(0)' }, this.props.style);

      if (this.state.isSticky) {
        var _stickyStyle = {
          position: 'fixed',
          top: this.state.containerOffset,
          left: this.state.xOffset,
          width: this.state.width
        };

        var bottomLimit = this.state.distanceFromBottom - this.state.height - this.props.bottomOffset;
        if (this.state.containerOffset > bottomLimit) {
          _stickyStyle.top = bottomLimit;
        }

        placeholderStyle.paddingBottom = this.state.height;

        className += ' ' + this.props.stickyClassName;
        style = _extends({}, style, _stickyStyle, this.props.stickyStyle);
      }

      var _props = this.props,
          topOffset = _props.topOffset,
          isActive = _props.isActive,
          stickyClassName = _props.stickyClassName,
          stickyStyle = _props.stickyStyle,
          bottomOffset = _props.bottomOffset,
          onStickyStateChange = _props.onStickyStateChange,
          props = _objectWithoutProperties(_props, ['topOffset', 'isActive', 'stickyClassName', 'stickyStyle', 'bottomOffset', 'onStickyStateChange']);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { ref: 'placeholder', style: placeholderStyle }),
        _react2.default.createElement(
          'div',
          _extends({}, props, { ref: 'children', className: className, style: style }),
          this.props.children
        )
      );
    }
  }]);

  return Sticky;
}(_react2.default.Component);

Sticky.propTypes = {
  isActive: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  stickyClassName: _propTypes2.default.string,
  stickyStyle: _propTypes2.default.object,
  topOffset: _propTypes2.default.number,
  bottomOffset: _propTypes2.default.number,
  onStickyStateChange: _propTypes2.default.func
};
Sticky.defaultProps = {
  isActive: true,
  className: '',
  style: {},
  stickyClassName: 'sticky',
  stickyStyle: {},
  topOffset: 0,
  bottomOffset: 0,
  onStickyStateChange: function onStickyStateChange() {}
};
Sticky.contextTypes = {
  'sticky-channel': _propTypes2.default.any
};
exports.default = Sticky;
module.exports = exports['default'];

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(140);


/***/ })

},[294]);
//# sourceMappingURL=sticky.js.map