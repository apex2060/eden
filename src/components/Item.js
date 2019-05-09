import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { spacing8 } from "@lds/eden-style-constants";

const Li = styled.li`
  &:not(:last-child) {
    margin-bottom: ${spacing8};
  }
`;

const Item = ({ children, ...props }) => <Li {...props}>{children}</Li>;

Item.propTypes = {
  /** Item contents */
  children: PropTypes.node.isRequired
};

export default Item;
