import React from "react";
import { shallow } from "enzyme";
import Title from ".";
import "jest-styled-components";

describe("Title", () => {
  let wrapper;
  const fontSize = "24px";
  const fontWeight = "bold";
  beforeEach(() => {
    wrapper = shallow(<Title fontSize={fontSize}>Test</Title>);
  });

  it("should render the props correctly", () => {
    expect(wrapper.text()).toBe("Test");
  });

  it("should ensure prop styles are applied correctly", () => {
    expect(wrapper).toHaveStyleRule("font-size", fontSize);
  });

  it("should update font size as per prop", () => {
    wrapper.setProps({ fontWeight: "bold" });
    expect(wrapper).toHaveStyleRule("font-weight", fontWeight);
  });
});
