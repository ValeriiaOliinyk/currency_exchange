import React from "react";
import "jest-styled-components";
import { shallow } from "enzyme";

import { EmptyFavorites } from "../../../components/styled";
import theme from "../../../styles/theme";

it("EmptyFavorites component works", () => {
  const tree = shallow(
    <EmptyFavorites theme={theme}>No favorite currencies</EmptyFavorites>
  );
  expect(tree).toMatchSnapshot();
});
