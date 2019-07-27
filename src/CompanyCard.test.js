import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CompanyCard from "./CompanyCard";

it("renders without crashing", function () {
  shallow(<CompanyCard />);
});

it("matches snapshot with logo", function () {
  let item = {
    handle: "rithm",
    name: "Rithm School",
    description: "Become an exceptional developer in 16 weeks.",
    logo_url: "https://pbs.twimg.com/profile_images/770491761412173826/ZUeIa4tw_400x400.jpg"
  };
  let wrapper = shallow(<CompanyCard item={item} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it("matches snapshot without logo", function () {
  let item = {
    handle: "algo",
    name: "Algo School",
    description: "Become a mediocre developer in 160 weeks."
  };
  let wrapper = shallow(<CompanyCard item={item} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
