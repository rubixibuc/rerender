import React from "react";
import PropTypes from "prop-types";

import True from "./True";
import False from "./False";

const render = ({ children, condition }) =>
  React.Children.map(
    children,
    child =>
      (condition() && child.type === True) ||
      (!condition() && child.type === False)
        ? child
        : null
  );

render.propTypes = {};

export default render;
