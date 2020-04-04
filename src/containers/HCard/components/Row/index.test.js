import React from "react";
import { shallow } from "enzyme";
import Row from ".";

describe("Row", () => {
  let wrapper;

  function genrateRow(hideLabel) {
    if (hideLabel) {
      return shallow(
        <Row>
          <div>Testing</div>
        </Row>
      );
    } else {
      return shallow(
        <Row label="Test">
          <div>Testing</div>
        </Row>
      );
    }
  }

  it("should display row label and body", () => {
    wrapper = genrateRow(false);
    expect(wrapper.find(".row-label")).toHaveLength(1);
    expect(wrapper.find(".row-body")).toHaveLength(1);
  });

  it("should not display label if not given", () => {
    wrapper = genrateRow(true);
    expect(wrapper.find(".row-label").prop("hide")).toBe(true);
  });
});
