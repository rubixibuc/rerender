import React from "react";
import PropTypes from "prop-types";

const render = ({ children, filter, items }) =>
  items ? children(items.filter(filter)) : null;

render.propTypes = {
  children: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  items: PropTypes.array
};

render.displayName = "Rerender.Filter";

export default render;
