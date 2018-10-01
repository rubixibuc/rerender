import React from "react";
import PropTypes from "prop-types";

import Test from "./Test";

const render = ({ children, matcher, expression }) =>
  children
    ? React.Children.map(
        children,
        child =>
          matcher(
            typeof child.props.value === "function"
              ? child.props.value()
              : child.props.value,
            expression
          )
            ? child
            : null
      )
    : null;

const TestPropType = (props, propName, componentName, location, propFullName) =>
  props[propName].type !== Test
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
    TestPropType,
    PropTypes.arrayOf(TestPropType)
  ]),
  matcher: PropTypes.func,
  expression: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string
  ])
};

render.defaultProps = {
  matcher: (a, b) => a === b
};

export default render;
