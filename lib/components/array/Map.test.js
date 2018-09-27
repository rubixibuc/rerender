import React from "react";
import Map from "./Map";
import renderer from "react-test-renderer";

test("should render nothing when items is undefined", () => {
  const component = renderer.create(
    <Map items={undefined}>{items => <div>{items}</div>}</Map>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render nothing when items is null", () => {
  const component = renderer.create(
      <Map items={null}>{items => <div>{items}</div>}</Map>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render nothing when items is empty", () => {
  const component = renderer.create(
      <Map items={[]}>{items => <div>{items}</div>}</Map>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render child for each item in items", () => {
  const component = renderer.create(
      <Map items={[1, 2]}>{(items, index) => <div key={index}>{items}</div>}</Map>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
