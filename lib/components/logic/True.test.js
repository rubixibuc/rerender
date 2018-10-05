import React from "react";
import renderer from "react-test-renderer";

import True from "./True";

test("should not render children when children are undefined", () => {
  const component = renderer.create(<True />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should not render children when children are null", () => {
  const component = renderer.create(<True>{null}</True>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render children when children are defined", () => {
  const component = renderer.create(
    <True>
      <div />
    </True>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
