import React from "react";
import renderer from "react-test-renderer";

import Match from "./Match";
import Test from "./Test";

test("should render all Tests (1, 4) with matching value", () => {
  const component = renderer.create(
    <Match expression={2 + 2} first={false}>
      <Test value={4}>1</Test>
      <Test value={2}>2</Test>
      <Test value={"4"}>3</Test>
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

test("should render only first Test (1) with matching value", () => {
  const component = renderer.create(
    <Match expression={2 + 2}>
      <Test value={4}>1</Test>
      <Test value={4}>2</Test>
    </Match>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render matching Test (1) when Match expression is function", () => {
  const component = renderer.create(
    <Match expression={() => 2 + 2}>
      <Test value={4}>1</Test>
    </Match>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render matching Test (2) when Match expression is null", () => {
  const component = renderer.create(
    <Match expression={null}>
      <Test value={1}>1</Test>
      <Test value={null}>2</Test>
    </Match>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
