import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { EmptyFavorites } from "../../styled";

import theme from "../../styles/theme";

it("EmptyFavorites component works", () => {
  const tree = renderer
    .create(
      <EmptyFavorites theme={theme}>No favorite currencies</EmptyFavorites>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
