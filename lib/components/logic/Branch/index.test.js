import React from "react";
import renderer from "react-test-renderer";

import Branch from "./index";
import False from "./False";
import True from "./True";

test("should all True child components when condition is true", () => {
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
