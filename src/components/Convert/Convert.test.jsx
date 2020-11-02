import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Container, Title } from "../../styled";

import theme from "../../styles/theme";

describe("Convert component renders correctly", () => {
  it("Container component works", () => {
    const tree = renderer.create(<Container />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Title theme={theme}>Convert</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
