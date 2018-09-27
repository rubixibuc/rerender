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
