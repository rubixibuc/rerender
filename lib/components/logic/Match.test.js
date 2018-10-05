import React from "react";
import renderer from "react-test-renderer";

import Match from "./Match";
import Test from "./Test";

test("should render all Test(s) (3, 4) with value matching expression", () => {
  const component = renderer.create(
    <Match expression={2 + 2}>
      <Test value={2}>1</Test>
      <Test value={"4"}>2</Test>
      <Test value={4}>3</Test>
      <Test value={4}>4</Test>
    </Match>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render all Test(s) (2, 3) with value matching expression function", () => {
  const component = renderer.create(
    <Match expression={() => 2 + 2}>
      <Test value={2}>1</Test>
      <Test value={4}>2</Test>
      <Test value={4}>3</Test>
    </Match>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render all Test(s) (2, 3) with value function matching expression", () => {
  const component = renderer.create(
    <Match expression={() => 2 + 2}>
      <Test value={2}>1</Test>
      <Test value={() => 4}>2</Test>
      <Test value={4}>3</Test>
    </Match>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render all Test(s) (2) with function matching null expression", () => {
  const component = renderer.create(
    <Match expression={null}>
      <Test value={2}>1</Test>
      <Test value={null}>2</Test>
      <Test value={4}>3</Test>
    </Match>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
