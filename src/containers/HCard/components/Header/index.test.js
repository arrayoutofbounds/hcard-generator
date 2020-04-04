import React from "react";
import { shallow } from "enzyme";
import Header from ".";

describe("Header", () => {
  let wrapper;

  it("should render children", () => {
    wrapper = shallow(
      <Header>
        <div>child</div>
      </Header>
    );

    expect(wrapper.children()).toHaveLength(1);
  });
});
