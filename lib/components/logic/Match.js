import React from "react";
import PropTypes from "prop-types";

import Test from "./Test";

const render = ({ children, first, matcher, expression }) => {
  let met = false;

  return children
    ? React.Children.map(children, child => {
        if (
          !met &&
          matcher(
            typeof child.props.value === "function"
              ? child.props.value()
              : child.props.value,
            typeof expression === "function" ? expression() : expression
          )
        ) {
          met = first && true;
          return child;
        }
        return null;
      })
    : null;
};

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
  first: PropTypes.bool,
  matcher: PropTypes.func,
  expression: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
    PropTypes.func
  ])
};

render.defaultProps = {
  first: true,
  matcher: (a, b) => a === b
};

render.displayName = "Rerender(Match)";

export default render;
