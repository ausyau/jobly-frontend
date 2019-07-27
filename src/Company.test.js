import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Company from "./Company";

it("renders without crashing", function () {
  shallow(<Company currentUser={{}} />);
});

it("matches snapshot while loading", function () {
  let wrapper = shallow(<Company currentUser={{}} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it("matches snapshot after loading", function () {
  let wrapper = shallow(<Company currentUser={{}} />);
  wrapper.setState({
    company: { name: "Specialty's", description: "zomg cookies", jobs: [] }
  });
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
