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

render.propTypes = {};

export default render;
