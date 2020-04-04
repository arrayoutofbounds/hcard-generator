import React from "react";
import { mount } from "enzyme";
import Section from ".";

describe("Section", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Section name="Test">
        <div>Test</div>
      </Section>
    );
  });

  it("should render with children and correct props", () => {
    expect(wrapper.find("span").text()).toBe("Test");
  });
});
