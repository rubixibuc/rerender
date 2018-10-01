import React from "react";
import PropTypes from "prop-types";

const render = ({ children, items, predicate }) => {
  if(items && items.length > 0) {
    const found = items.find(predicate);

    if (found) {
      return children(found);
    }
  }

  return null;
}

render.propTypes = {
  children: PropTypes.func.isRequired,
  predicate: PropTypes.func.isRequired,
  items: PropTypes.array
}

render.displayName = "Rerender.Find";

export default render;

