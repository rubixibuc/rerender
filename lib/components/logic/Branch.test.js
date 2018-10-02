import React from "react";
import renderer from "react-test-renderer";

import Branch from "./Branch";
import Path from "./Path";

test("should render nothing when children are undefined", () => {
  const component = renderer.create(<Branch />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render nothing when children are undefined and taking every path", () => {
  const component = renderer.create(<Branch first={false} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render first Path (2) with true condition in Branch", () => {
  const component = renderer.create(
    <Branch>
      <Path condition={false}>1</Path>
      <Path condition={true}>2</Path>
      <Path condition={true}>3</Path>
      <Path condition={false}>4</Path>
    </Branch>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render first Path (2) with function condition returning true in Branch", () => {
  const component = renderer.create(
    <Branch>
      <Path condition={false}>1</Path>
      <Path condition={() => true}>2</Path>
      <Path condition={true}>3</Path>
    </Branch>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render all Paths (2, 3) with true condition in Branch", () => {
  const component = renderer.create(
    <Branch first={false}>
      <Path condition={false}>1</Path>
      <Path condition={true}>2</Path>
      <Path condition={true}>3</Path>
      <Path condition={false}>4</Path>
    </Branch>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render no Paths because none match", () => {
  const component = renderer.create(
    <Branch first={false}>
      <Path condition={false}>1</Path>
      <Path condition={false}>2</Path>
      <Path condition={false}>3</Path>
      <Path condition={false}>4</Path>
    </Branch>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render no Paths because none match when taking every path", () => {
  const component = renderer.create(
    <Branch first={false}>
      <Path condition={false}>1</Path>
      <Path condition={false}>2</Path>
      <Path condition={false}>3</Path>
      <Path condition={false}>4</Path>
    </Branch>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render Path (3) with no condition because all other Path conditions are false", () => {
  const component = renderer.create(
    <Branch first={false}>
      <Path condition={false}>1</Path>
      <Path condition={false}>2</Path>
      <Path>3</Path>
    </Branch>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
