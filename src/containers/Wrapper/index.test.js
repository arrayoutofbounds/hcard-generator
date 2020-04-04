import React from "react";
import { mount } from "enzyme";
import Wrapper from ".";

describe("Wrapper", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Wrapper />);
  });

  it("should render form and hcard", () => {
    expect(wrapper.find("DetailsForm")).toHaveLength(1);
    expect(wrapper.find("HCard")).toHaveLength(1);
  });
});
