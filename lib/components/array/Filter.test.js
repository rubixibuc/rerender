import React from "react";
import Filter from "./Filter";
import renderer from "react-test-renderer";

test("should render nothing when items is undefined", () => {
  const component = renderer.create(
    <Filter filter={i => i} items={undefined}>
      {items => <div>{items}</div>}
    </Filter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render nothing when items is null", () => {
  const component = renderer.create(
    <Filter filter={i => i} items={null}>
      {items => <div>{items}</div>}
    </Filter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render nothing when items is empty", () => {
  const component = renderer.create(
    <Filter filter={i => i} items={[]}>
      {items => <div>{items}</div>}
    </Filter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render filtered items is when items is not empty", () => {
  const component = renderer.create(
    <Filter filter={i => i > 1} items={[1, 2]}>
      {items => <div>{items}</div>}
    </Filter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
