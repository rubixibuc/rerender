import React from "react";
import renderer from "react-test-renderer";

import False from "./False";

test("should not render children when children are undefined", () => {
  const component = renderer.create(<False />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should not render children when children are null", () => {
  const component = renderer.create(<False>{null}</False>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render children when children are defined", () => {
  const component = renderer.create(
    <False>
      <div />
    </False>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
