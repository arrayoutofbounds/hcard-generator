import React from "react";
import { shallow } from "enzyme";
import Button from ".";
import { constants } from "../../utils";
import "jest-styled-components";

describe("Button", () => {
  let mockCallback;
  let wrapper;
  beforeEach(() => {
    mockCallback = jest.fn();
    wrapper = shallow(
      <Button
        type="text"
        styleClass="primary"
        onClick={mockCallback}
        text="Test"
      />
    );
  });

  it("should render button with correct props", () => {
    expect(wrapper.prop("type")).toEqual("text");
    expect(wrapper.prop("styleClass")).toEqual("primary");
    expect(wrapper.prop("onClick")).toEqual(mockCallback);
    expect(wrapper.text()).toEqual("Test");
  });

  it("should invoke callback when clicked", () => {
    wrapper.simulate("click");
    expect(mockCallback).toHaveBeenCalled();
  });

  it("should display primary colour when style is primary", () => {
    expect(wrapper).toHaveStyleRule(
      "background-color",
      constants.primaryButtonColor
    );
  });

  it("should display secondary colour when style is secondary", () => {
    wrapper.setProps({ styleClass: "secondary" });
    expect(wrapper).toHaveStyleRule(
      "background-color",
      constants.secondayButtonColour
    );
  });
});
