import React from "react";
import { shallow } from "enzyme";
import Body from ".";

describe("Body", () => {
  let wrapper;

  it("should render children", () => {
    wrapper = shallow(
      <Body>
        <div>child</div>
      </Body>
    );

    expect(wrapper.children()).toHaveLength(1);
  });
});
