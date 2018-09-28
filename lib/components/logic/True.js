import React from "react";
import PropTypes from "prop-types";

const render = ({ children }) => <React.Fragment>{children}</React.Fragment>;

render.propTypes = {
  children: PropTypes.node
};

export default render;
