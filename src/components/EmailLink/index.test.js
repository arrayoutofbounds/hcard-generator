import React from "react";
import { shallow } from "enzyme";
import EmailLink from ".";

describe("EmailLink", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EmailLink email="test@mail.com" />);
  });

  it("should render with correct props", () => {
    expect(wrapper.text()).toEqual("test@mail.com");
  });

  it("should display href property", () => {
    expect(wrapper.prop("href")).toEqual("mailto: test@mail.com");
  });
});
