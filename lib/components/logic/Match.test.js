import React from "react";
import renderer from "react-test-renderer";

import Match from "./Match";
import Test from "./Test";

test("should render nothing when children are undefined", () => {
  const component = renderer.create(<Match expression={0} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render Tests with matching value", () => {
  const component = renderer.create(
    <Match expression={2 + 2}>
      <Test value={4}>4</Test>
      <Test value={2}>2</Test>
      <Test value={"4"}>'4'</Test>
      <Test value={4}>4</Test>
    </Match>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render Tests with matching value when value is function", () => {
  const component = renderer.create(
    <Match expression={2 + 2}>
      <Test value={() => 4}>4</Test>
      <Test value={2}>2</Test>
    </Match>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
