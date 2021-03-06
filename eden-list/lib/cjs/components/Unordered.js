"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shared = _interopRequireDefault(require("./shared"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var unorderedStyles = {
  disc: "disc",
  circle: "circle",
  square: "square"
};

var Ul = _styledComponents.default.ul.withConfig({
  componentId: "sc-1rgl7mg-0"
})(["", ";list-style-type:", ";"], _shared.default, function (_ref) {
  var listStyle = _ref.listStyle;
  return unorderedStyles[listStyle];
});

var Unordered = function Unordered(_ref2) {
  var children = _ref2.children,
      _ref2$listStyle = _ref2.listStyle,
      listStyle = _ref2$listStyle === void 0 ? "disc" : _ref2$listStyle,
      props = _objectWithoutProperties(_ref2, ["children", "listStyle"]);

  return _react.default.createElement(Ul, _extends({
    listStyle: listStyle
  }, props), children);
};

Unordered.propTypes = {
  /** List items */
  children: _propTypes.default.node.isRequired,

  /** What to display before each list item */
  listStyle: _propTypes.default.oneOf(Object.keys(unorderedStyles))
};
var _default = Unordered;
exports.default = _default;