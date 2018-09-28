import React from "react";
import PropTypes from "prop-types";

import True from "./True";
import False from "./False";

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

render.propTypes = {
  children: PropTypes.arrayOf(
    (propValue, key, componentName, location, propFullName) => {
      return propValue[key].type === True || propValue[key].type === False;
    }
  ),
  condition: PropTypes.func.isRequired
};

export default render;
