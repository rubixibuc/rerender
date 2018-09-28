import React from "react";
import renderer from "react-test-renderer";

import Both from "./Both";

test("should not render children when children are undefined", () => {
  const component = renderer.create(<Both />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should not render children when children are null", () => {
  const component = renderer.create(<Both>{null}</Both>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render children when children are defined", () => {
  const component = renderer.create(
    <Both>
      <div />
    </Both>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
