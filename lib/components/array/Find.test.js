import React from "react";
import Find from "./Find";
import renderer from "react-test-renderer";

test("should render nothing when items is undefined", () => {
  const component = renderer.create(
    <Find predicate={() => true} items={undefined}>
      {item => <div>{item}</div>}
    </Find>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render nothing when items is null", () => {
  const component = renderer.create(
    <Find predicate={() => true} items={null}>
      {item => <div>{item}</div>}
    </Find>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render empty div when items is empty", () => {
  const component = renderer.create(
    <Find predicate={() => true} items={[]}>
      {item => <div>{item}</div>}
    </Find>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render empty div if no items match", () => {
  const component = renderer.create(
    <Find predicate={num => num % 2 === 0} items={[1, 3]}>
      {item => <div>{item}</div>}
    </Find>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render first item that matches", () => {
  const component = renderer.create(
    <Find predicate={num => num % 2 === 0} items={[1, 2, 3, 4]}>
      {item => <div>{item}</div>}
    </Find>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
