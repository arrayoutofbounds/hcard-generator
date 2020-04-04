import React from "react";
import { shallow } from "enzyme";
import App from ".";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
