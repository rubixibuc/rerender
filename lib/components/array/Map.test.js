import React from 'react'

test('should render nothing when items is undefined', () => {
  const component = renderer.create(
      <Link page="http://www.facebook.com">Facebook</Link>,
);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});