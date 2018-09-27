import React from "react";
import Reduce from "./Reduce";
import renderer from "react-test-renderer";

test("should render nothing when items is undefined", () => {
  const component = renderer.create(
    <Reduce reducer={i => i} items={undefined}>
      {items => <div>{items}</div>}
    </Reduce>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render nothing when items is null", () => {
  const component = renderer.create(
    <Reduce reducer={i => i} items={null}>
      {items => <div>{items}</div>}
    </Reduce>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render nothing when items is empty", () => {
  const component = renderer.create(
    <Reduce reducer={i => i} items={[]}>
      {items => <div>{JSON.stringify(items)}</div>}
    </Reduce>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render reduced items is when items is not empty", () => {
  const component = renderer.create(
    <Reduce
      reducer={(accumulator, value) => {
        accumulator[value] = value;
        return accumulator;
      }}
      items={[1, 2]}
    >
      {items => <div>{JSON.stringify(items)}</div>}
    </Reduce>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
