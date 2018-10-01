import React from "react";
import PropTypes from "prop-types";

import Path from "./Path";

const render = ({ children, first }) => {
  let met = false;

  return children
    ? React.Children.map(children, child => {
        if (!met && (!("condition" in child.props) || child.props.condition)) {
          met = first && true;
          return child;
        } else {
          return null;
        }
      })
    : null;
};

const PathPropType = (props, propName, componentName, location, propFullName) =>
  props[propName].type !== Path
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
    PathPropType,
    PropTypes.arrayOf(PathPropType)
  ]),
  first: PropTypes.bool
};

render.defaultProps = {
  first: true
};

export default render;
