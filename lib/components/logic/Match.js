import React from "react";
import PropTypes from "prop-types";

import defaultMatcher from "./defaultMatcher";
import Test from "./Test";

const render = ({ children, matcher, expression }) =>
  React.Children.map(
    children,
    child =>
      matcher(
        typeof expression === "function" ? expression() : expression,
        typeof child.props.value === "function"
          ? child.props.value()
          : child.props.value
      )
        ? child
        : null
  );

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
  children: PropTypes.oneOfType([TestPropType, PropTypes.arrayOf(TestPropType)])
    .isRequired,
  matcher: PropTypes.func,
  expression: PropTypes.any
};

render.defaultProps = {
  matcher: defaultMatcher
};

render.displayName = "Rerender.Match";

export default render;
