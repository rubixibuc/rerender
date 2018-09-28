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

const TrueFalsePropType = (
  props,
  propName,
  componentName,
  location,
  propFullName
) => {
  if (!props[propName].type) {
    return new Error(
      "Invalid prop `" +
        propFullName +
        "` supplied to" +
        " `" +
        componentName +
        "`. Validation failed."
    );
  } else if (props[propName].type !== True && props[propName].type !== False) {
    return new Error(
      "Invalid prop `" +
        propFullName +
        "` supplied to" +
        " `" +
        componentName +
        "`. Validation failed."
    );
  }
};

render.propTypes = {
  children: PropTypes.oneOfType([
    TrueFalsePropType,
    PropTypes.arrayOf(TrueFalsePropType)
  ]),
  condition: PropTypes.func.isRequired
};

export default render;
