import React from "react";
import renderer from "react-test-renderer";

import False from "./True";

test("should render children when children is undefined", () => {
  const component = renderer.create(
    <False>
      <div />
    </False>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render children when children is null", () => {
  const component = renderer.create(
    <False>
      <div />
    </False>
  );
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
