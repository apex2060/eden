import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import shared from "./shared";

const NoStyles = styled.ul`
  ${shared};
  list-style: none;
`;

const Unstyled = ({ children, ...props }) => (
  <NoStyles {...props}>{children}</NoStyles>
);

Unstyled.propTypes = {
  /** List items */
  children: PropTypes.node.isRequired
};

export default Unstyled;
