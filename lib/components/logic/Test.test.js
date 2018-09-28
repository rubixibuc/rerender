import React from "react";
import renderer from "react-test-renderer";

import Test from "./Test";

test("should not render children when children are undefined", () => {
  const component = renderer.create(<Test />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should not render children when children are null", () => {
  const component = renderer.create(<Test>{null}</Test>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render children when children are defined", () => {
  const component = renderer.create(
    <Test>
      <div />
    </Test>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
