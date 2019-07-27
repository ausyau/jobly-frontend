import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Card from "./Card";

it("renders without crashing", function () {
  shallow(<Card />);
});

it("matches snapshot for company", function () {
  let item = {
    handle: "rithm",
    name: "Rithm School",
    description: "Become an exceptional developer in 16 weeks.",
    logo_url: "https://pbs.twimg.com/profile_images/770491761412173826/ZUeIa4tw_400x400.jpg"
  };
  let wrapper = shallow(<Card item={item} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it("matches snapshot for job", function () {
  let item = { title: "CEO", salary: 1000000, equity: 10 };
  let wrapper = shallow(<Card item={item} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
