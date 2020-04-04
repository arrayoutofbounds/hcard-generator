import React from "react";
import { mount } from "enzyme";
import Input from ".";

describe("Input", () => {
  let wrapper;
  let mockChange;
  beforeEach(() => {
    mockChange = jest.fn();
    wrapper = mount(
      <Input label="Test" name="test" type="text" onChange={mockChange} />
    );
  });

  it("should invoke callback on input change", () => {
    wrapper.find("input").simulate("change");
    expect(mockChange).toHaveBeenCalled();
  });

  it("should render label with the correct text", () => {
    const labelText = wrapper.find("label").text();
    expect(labelText).toBe("Test");
  });
});
