import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Profile from "./Profile";

it("renders without crashing", function () {
  shallow(<Profile currentUser={{}} />);
});

it("matches snapshot", function () {
  let wrapper = shallow(<Profile currentUser={{}} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
