import React from "react";
import { shallow } from "enzyme";
import Wrapper from ".";

describe("Wrapper", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Wrapper />);
  });

  it("should render form and hcard", () => {
    expect(wrapper.find("DetailsForm")).toHaveLength(1);
    expect(wrapper.find("HCard")).toHaveLength(1);
  });
});
