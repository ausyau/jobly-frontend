import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import JobCard from "./JobCard";

it("renders without crashing", function () {
  shallow(<JobCard />);
});

it("matches snapshot", function () {
  let item = { title: "CEO", salary: 1000000, equity: 10 };
  let wrapper = shallow(<JobCard item={item} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
