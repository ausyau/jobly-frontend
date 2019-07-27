import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CardList from "./CardList";

it("renders without crashing", function () {
  shallow(<CardList />);
});

it("matches snapshot", function () {
  let wrapper = shallow(<CardList cards={["card1", "card2"]} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
