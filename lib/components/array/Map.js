import React from "react";
import PropTypes from "prop-types";

const render = ({ children, items }) => (items ? items.map(children) : null);

render.propTypes = {
  children: PropTypes.func.isRequired,
  items: PropTypes.array
};

render.displayName = "Rerender(Map)";

export default render;
