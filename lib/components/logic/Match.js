import React from 'react';
import PropTypes from 'prop-types';

import Test from './Test'

const render = ({ children, matcher, value }) =>
    children
        ? React.Children.map(
        children,
        child =>
            matcher(child.props.test, value)
                ? child
                : null
        )
        : null;

const TestPropType = (
    props,
    propName,
    componentName,
    location,
    propFullName
) =>
    props[propName].type !== Test
        ? new Error(
        "Invalid prop `" +
        propFullName +
        "` supplied to" +
        " `" +
        componentName +
        "`. Validation failed."
        )
        : undefined;

render.propTypes = {
  children: PropTypes.oneOfType([
    TestPropType,
    PropTypes.arrayOf(TestPropType)
  ]),
  matcher: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string
  ])
};

render.defaultProps = {

}

export default render