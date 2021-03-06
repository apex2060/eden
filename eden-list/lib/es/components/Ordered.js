function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import shared from "./shared";
var orderedStyles = {
  decimal: "decimal",
  upperLatin: "upper-latin",
  upperRoman: "upper-roman",
  lowerLatin: "lower-latin"
};
var Ol = styled.ol.withConfig({
  componentId: "as9w2i-0"
})(["", ";list-style-type:", ";"], shared, function (_ref) {
  var listStyle = _ref.listStyle;
  return orderedStyles[listStyle];
});

var Ordered = function Ordered(_ref2) {
  var children = _ref2.children,
      _ref2$listStyle = _ref2.listStyle,
      listStyle = _ref2$listStyle === void 0 ? "decimal" : _ref2$listStyle,
      props = _objectWithoutProperties(_ref2, ["children", "listStyle"]);

  return React.createElement(Ol, _extends({
    listStyle: listStyle
  }, props), children);
};

Ordered.propTypes = {
  /** List items */
  children: PropTypes.node.isRequired,

  /** What to display before each list item */
  listStyle: PropTypes.oneOf(Object.keys(orderedStyles))
};
export default Ordered;