import React from "react";
import { mount } from "enzyme";
import DetailsForm from ".";
import { helpers } from "../../utils";

describe("DetailsForm", () => {
  let wrapper;
  let mockChange;
  let mockSetAvatar;
  beforeEach(() => {
    mockChange = jest.fn();
    mockSetAvatar = jest.fn();
    wrapper = mount(
      <DetailsForm handleFieldChange={mockChange} setAvatar={mockSetAvatar} />
    );
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render form items", () => {
    expect(wrapper.find("Form")).toHaveLength(1);
    expect(wrapper.find("Title")).toHaveLength(1);
    expect(wrapper.find("Section")).toHaveLength(2);
    expect(wrapper.find("Button")).toHaveLength(2);
  });

  it("should call on fields change when user enters input", () => {
    wrapper.find("input").first().simulate("change");
    expect(mockChange).toHaveBeenCalled();
  });

  it("should open file choosen when upload button clicked", () => {
    const fileInput = wrapper.find("input").last().instance();
    const clickInputSpy = jest.spyOn(fileInput, "click");
    wrapper.find("Button").first().simulate("click");
    expect(clickInputSpy).toHaveBeenCalled();
  });

  it("should call mock helper function when converting hcard to xml", () => {
    helpers.hCardConverter = jest.fn().mockReturnValue("xml");
    wrapper.find("Button").last().simulate("click");
    expect(helpers.hCardConverter).toHaveBeenCalled();
  });
});
