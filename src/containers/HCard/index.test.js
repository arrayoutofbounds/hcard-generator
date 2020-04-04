import React from "react";
import { mount } from "enzyme";
import HCard from ".";

describe("HCard", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <HCard
        givenName="givenName"
        surname="surname"
        email="email"
        phone="phone"
        houseName="houseName"
        street="street"
        suburb="suburb"
        state="state"
        postcode="postcode"
        country="country"
        avatar="avatar"
      />
    );
  });

  it("should render header and body", () => {
    expect(wrapper.find("Header")).toHaveLength(1);
    expect(wrapper.find("Body")).toHaveLength(1);
  });
});
