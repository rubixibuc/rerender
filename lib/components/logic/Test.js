import React from "react";
import PropTypes from "prop-types";

const render = ({ children, value }) => (
  <React.Fragment>{children}</React.Fragment>
);

render.propTypes = {
  children: PropTypes.node,
  value: PropTypes.any
};

render.displayName = "Rerender.Test";

export default render;
