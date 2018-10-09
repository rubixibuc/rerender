import React from "react";
import PropTypes from "prop-types";

const render = ({ children, filter, items }) =>
  items ? <React.Fragment>{children(items.filter(filter))}</React.Fragment> : null;

render.propTypes = {
  children: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  items: PropTypes.array
};

render.displayName = "Rerender.Filter";

export default render;
