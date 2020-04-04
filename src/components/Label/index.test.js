import React from "react";
import { shallow } from "enzyme";
import Label from ".";

describe("Label", () => {
  it("should render with correct props", () => {
    shallow(<Label forField="test" value="Test" />);
  });
});
