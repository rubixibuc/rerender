import React from "react";
import renderer from "react-test-renderer";

import Both from "./True";

test("should render children when children is undefined", () => {
  const component = renderer.create(
    <Both>
      <div />
    </Both>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render children when children is null", () => {
  const component = renderer.create(
    <Both>
      <div />
    </Both>
  );
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
