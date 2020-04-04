import React from "react";
import { shallow } from "enzyme";
import Address from ".";

describe("Address", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Address
        country="country"
        street="street"
        suburb="suburb"
        state="state"
        houseName="houseName"
        postcode="postcode"
      />
    );
  });

  it("should show country, region, postcode and state", () => {
    expect(wrapper.find(".locality-region-wrapper")).toHaveLength(1);
    expect(wrapper.find(".country-code-wrapper")).toHaveLength(1);
  });
});
