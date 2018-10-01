import React from "react";
import PropTypes from "prop-types";

const render = ({ children, initial, items, reducer }) =>
  items ? children(items.reduce(reducer, initial)) : null;

render.propTypes = {
  children: PropTypes.func.isRequired,
  initial: PropTypes.any,
  items: PropTypes.array,
  reducer: PropTypes.func.isRequired
};

render.defaultProps = {
  initial: {}
};

render.displayName = "Rerender(Reduce)";

export default render;
