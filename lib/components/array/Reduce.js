import React from "react";
import PropTypes from "prop-types";

const render = ({ children, initial, items, reducer }) =>
  (items || null) && children(items.reduce(reducer, initial));

render.propTypes = {
  children: PropTypes.func.isRequired,
  initial: PropTypes.any,
  items: PropTypes.array,
  reducer: PropTypes.func.isRequired
};

render.defaultProps = {
  initial: {}
};

export default render;
