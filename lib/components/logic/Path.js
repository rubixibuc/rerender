import React from "react";
import PropTypes from "prop-types";

const render = ({ children, condition }) => (
  <React.Fragment>{children}</React.Fragment>
);

render.propTypes = {
  children: PropTypes.node,
  condition: PropTypes.bool
};

export default render;
