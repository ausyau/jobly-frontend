import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Search from "./Search";

it("renders without crashing", function () {
  shallow(<Search />);
});

it("matches snapshot", function () {
  let wrapper = shallow(<Search />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
