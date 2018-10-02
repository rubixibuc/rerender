import React from "react";
import renderer from "react-test-renderer";

import Path from "./Test";

test("should not render children when children are undefined", () => {
  const component = renderer.create(<Path />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should not render children when children are null", () => {
  const component = renderer.create(<Path>{null}</Path>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render children when children are defined", () => {
  const component = renderer.create(
    <Path>
      <div />
    </Path>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
