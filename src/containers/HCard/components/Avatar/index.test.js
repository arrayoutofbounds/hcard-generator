import React from "react";
import { shallow } from "enzyme";
import Avatar from ".";
import defaultAvatar from "../../../../assets/images/avatar.png";

describe("Avatar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Avatar imageSource="" />);
  });

  it("should render default image if no image source passed", () => {
    const imageWrapper = wrapper.find(".photo");
    expect(imageWrapper.prop("src")).toEqual(defaultAvatar);
  });
});
