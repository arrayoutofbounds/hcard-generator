import React from "react";
import { mount } from "enzyme";
import Header from ".";

describe("Header", () => {
  let wrapper;

  it("should render children", () => {
    wrapper = mount(
      <Header>
        <div>child</div>
      </Header>
    );

    expect(wrapper.children()).toHaveLength(1);
  });
});
