import React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";
import { EmptyFavorites } from "../../styled";

import theme from "../../styles/theme";

it("EmptyFavorites component works", () => {
  const tree = shallow(
    <EmptyFavorites theme={theme}>No favorite currencies</EmptyFavorites>
  );
  expect(tree).toMatchSnapshot();
});
