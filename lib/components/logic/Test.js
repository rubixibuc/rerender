import React from "react";
import PropTypes from "prop-types";

const render = ({ children, value }) => (
  <React.Fragment>{children}</React.Fragment>
);

render.propTypes = {
  children: PropTypes.node,
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string
  ])
};

export default render;
