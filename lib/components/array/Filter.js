import React from "react";
import PropTypes from "prop-types";

const render = ({ children, filter, items }) =>
  (items || null) && children(items.filter(filter));

render.propTypes = {
  children: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  items: PropTypes.array
};

export default render;
