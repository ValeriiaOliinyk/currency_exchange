import React from "react";
import "jest-styled-components";
import { shallow } from "enzyme";

// Components
import { Header } from "../../../styled";
import { Navigation } from "../../../components";

it("Navigation component renders correctly", () => {
  const tree = shallow(<Navigation />);
  expect(tree).toMatchSnapshot();
});

it("Navigation component renders correctly with other components", () => {
  const tree = shallow(<Navigation />);
  expect(tree.find(Header).length).toBe(1);
});
