import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import shared from "./shared";

const orderedStyles = {
  decimal: "decimal",
  upperLatin: "upper-latin",
  upperRoman: "upper-roman",
  lowerLatin: "lower-latin"
};

const Ol = styled.ol`
  ${shared};
  list-style-type: ${({ listStyle }) => orderedStyles[listStyle]};
`;

const Ordered = ({ children, listStyle = "decimal", ...props }) => (
  <Ol listStyle={listStyle} {...props}>
    {children}
  </Ol>
);

Ordered.propTypes = {
  /** List items */
  children: PropTypes.node.isRequired,

  /** What to display before each list item */
  listStyle: PropTypes.oneOf(Object.keys(orderedStyles))
};

export default Ordered;
