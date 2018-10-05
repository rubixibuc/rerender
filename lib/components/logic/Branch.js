import React from "react";
import PropTypes from "prop-types";

import True from "./True";
import False from "./False";

const render = ({ children, condition }) => {
  const result = typeof condition === "function" ? condition() : condition;

  return children
    ? React.Children.map(
        children, 
        child => 
          (result && child.type === True) ||
          (!result && child.type === False)
          ? child
          : null
      )
    : null;
};

const TrueFalsePropType = (
  props,
  propName,
  componentName,
  location,
  propFullName
) =>
  props[propName].type !== True &&
  props[propName].type !== False &&
  props[propName].type !== Both
    ? new Error(
        "Invalid prop `" +
          propFullName +
          "` supplied to" +
          " `" +
          componentName +
          "`. Validation failed."
      )
    : undefined; 

render.propTypes = {
  children: PropTypes.oneOfType([TrueFalsePropType, PropTypes.arrayOf(TrueFalsePropType)])
    .isRequired,
  condition: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired
};

render.defaultProps = {}

render.displayName = "Rerender.Branch";

export default render;
