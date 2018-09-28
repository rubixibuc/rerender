import React from "react";
import PropTypes from "prop-types";

import False from "./False";
import True from "./True";

const render = ({ children, condition }) =>
  children
    ? React.Children.map(
        children,
        child =>
          (condition() && child.type === True) ||
          (!condition() && child.type === False)
            ? child
            : null
      )
    : null;

const TrueFalsePropType = (props, key) =>
  props[key].type === True || props[key].type === False;

render.propTypes = {
  children: PropTypes.oneOfType([
    TrueFalsePropType,
    PropTypes.arrayOf(TrueFalsePropType)
  ]),
  condition: PropTypes.func.isRequired
};

export default render;
