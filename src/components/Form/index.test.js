import React from "react";
import { shallow } from "enzyme";
import Form from ".";

describe("Form", () => {
  let wrapper;
  let mockSubmit;
  beforeEach(() => {
    mockSubmit = jest.fn();
    wrapper = shallow(
      <Form onSubmit={mockSubmit}>
        <div>Div 1</div>
        <div>Div 2</div>
      </Form>
    );
  });

  it("should invoke callback when submitted", () => {
    wrapper.simulate("submit");
    expect(mockSubmit).toHaveBeenCalled();
  });
});
