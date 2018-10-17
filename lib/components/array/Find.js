import React from "react";
import PropTypes from "prop-types";

const render = ({ children, items, predicate }) =>
  items ? children(items.find(predicate)) : null;

render.propTypes = {
  children: PropTypes.func.isRequired,
  predicate: PropTypes.func.isRequired,
  items: PropTypes.array
};

render.displayName = "Rerender.Find";

export default render;
