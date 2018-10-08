import React from "react";
import renderer from "react-test-renderer";

import Branch from "./Branch";
import False from "./False";
import True from "./True";

test("should render nothing when Branch contains one True child and condition is false", () => {
  const component = renderer.create(
    <Branch condition={false}>
      <True>true</True>
    </Branch>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render nothing when Branch contains one False child and condition is true", () => {
  const component = renderer.create(
    <Branch condition={true}>
      <False>false</False>
    </Branch>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render all false child components when condition is false", () => {
  const component = renderer.create(
    <Branch condition={false}>
      <True>
        <div>true</div>
        <div>true</div>
      </True>
      <True>
        <div>true</div>
        <div>true</div>
      </True>
      <False>
        <div>false</div>
        <div>false</div>
      </False>
      <False>
        <div>false</div>
        <div>false</div>
      </False>
    </Branch>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render all false child components when condition function returns false", () => {
  const component = renderer.create(
    <Branch condition={() => false}>
      <True>
        <div>true</div>
        <div>true</div>
      </True>
      <True>
        <div>true</div>
        <div>true</div>
      </True>
      <False>
        <div>false</div>
        <div>false</div>
      </False>
      <False>
        <div>false</div>
        <div>false</div>
      </False>
    </Branch>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render all True child components when condition is true", () => {
  const component = renderer.create(
    <Branch condition={true}>
      <True>
        <div>true</div>
        <div>true</div>
      </True>
      <True>
        <div>true</div>
        <div>true</div>
      </True>
      <False>
        <div>false</div>
        <div>false</div>
      </False>
      <False>
        <div>false</div>
        <div>false</div>
      </False>
    </Branch>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render all True child components when condition function returns true", () => {
  const component = renderer.create(
    <Branch condition={() => true}>
      <True>
        <div>true</div>
        <div>true</div>
      </True>
      <True>
        <div>true</div>
        <div>true</div>
      </True>
      <False>
        <div>false</div>
        <div>false</div>
      </False>
      <False>
        <div>false</div>
        <div>false</div>
      </False>
    </Branch>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
