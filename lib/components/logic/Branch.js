import React from "react";
import PropTypes from "prop-types";

import False from "./False";
import True from "./True";

const render = ({ children, condition }) => {
  const result = typeof condition === "function" ? condition() : condition;

  return (
    <>
      {React.Children.map(
        children,
        child =>
          (result && child.type === True) || (!result && child.type === False)
            ? child
            : null
      )}
    </>
  );
};

const TrueFalsePropType = (
  props,
  propName,
  componentName,
  location,
  propFullName
) =>
  props[propName].type !== True && props[propName].type !== False
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
  ]).isRequired,
  condition: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired
};

render.defaultProps = {};

render.displayName = "Rerender.Branch";

export default render;
