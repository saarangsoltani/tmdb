import React from "react";
import { default as Enzyme, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LoadingSpinner from "../../components/LoadingSpinner";

Enzyme.configure({ adapter: new Adapter() });

describe("LoadingSpinner", () => {
  it("Should render without errors", () => {
    const wrapper = shallow(<LoadingSpinner />);
    expect(wrapper.find(".spinner").length).toBe(1);
  });
});
