import React from "react";
import { default as Enzyme, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Poster from "../../components/Poster";

Enzyme.configure({ adapter: new Adapter() });

describe("Poster", () => {
  let props = { path: "gBGUL1UTUNmdRQT8gA1LUV4yg39.jpg" };

  it("Should render without errors", () => {
    const wrapper = shallow(<Poster {...props} />);
    expect(wrapper.find(".poster").length).toBe(1);
  });

  it("Sets the image source based on path prop", () => {
    const wrapper = shallow(<Poster {...props} />);
    expect(wrapper.find(".poster").prop("src")).toMatch(props.path);
  });

  it("Sets the placeholder as image source if path prop is absent", () => {
    const wrapper = shallow(<Poster />);
    expect(wrapper.find(".poster").prop("src")).toMatch("placeholder.png");
  });

  it("Uses w185 as the image size by default", () => {
    const wrapper = shallow(<Poster {...props} />);
    expect(wrapper.find(".poster").prop("src")).toMatch("w185");
  });

  it("Inlcudes the image size in url if size prop is given", () => {
    props.size = "w300";
    const wrapper = shallow(<Poster {...props} />);
    expect(wrapper.find(".poster").prop("src")).toMatch(props.size);
  });
});
