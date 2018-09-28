import React from "react";
import PropTypes from "prop-types";

import Both from "./Both";
import False from "./False";
import True from "./True";

const render = ({ children, condition }) =>
  children
    ? React.Children.map(
        children,
        child =>
          (condition() && child.type === True) ||
          (!condition() && child.type === False) ||
          child.type === Both
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
) =>
  props[propName].type !== True &&
  props[propName].type !== False &&
  props[propName] !== Both
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
  children: PropTypes.oneOfType([
    TrueFalsePropType,
    PropTypes.arrayOf(TrueFalsePropType)
  ]),
  condition: PropTypes.func.isRequired
};

export default render;
