import React from "react";
import PropTypes from "prop-types";

const render = ({ items, children }) => (items || null) && items.map(chilren);

render.propTypes = {
  items: PropTypes.array,
  children: PropTypes.func.isRequired
};

export default render;
