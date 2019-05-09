import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import shared from "./shared";

const unorderedStyles = {
  disc: "disc",
  circle: "circle",
  square: "square"
};

const Ul = styled.ul`
  ${shared};
  list-style-type: ${({ listStyle }) => unorderedStyles[listStyle]};
`;

const Unordered = ({ children, listStyle = "disc", ...props }) => (
  <Ul listStyle={listStyle} {...props}>
    {children}
  </Ul>
);

Unordered.propTypes = {
  /** List items */
  children: PropTypes.node.isRequired,

  /** What to display before each list item */
  listStyle: PropTypes.oneOf(Object.keys(unorderedStyles))
};

export default Unordered;
