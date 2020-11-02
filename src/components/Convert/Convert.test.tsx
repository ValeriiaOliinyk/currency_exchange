import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Container, Title } from "../../styled";
import { ThemeProvider } from "styled-components";
import Theme from "../../styles/theme";
import { Provider } from "react-redux";
import store from "../../redux/store";

import { CurrencyRow } from "../CurrencyRow/CurrencyRow";

import theme from "../../styles/theme";
import { shallow } from "enzyme";

describe("Convert component renders correctly", () => {
  it("CurrencyRow component works", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={Theme}>
          <Provider store={store.store}>
            <CurrencyRow />
          </Provider>
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Container component works", () => {
    const tree = shallow(<Container />);
    expect(tree).toMatchSnapshot();
  });

  it("Renders correctly", () => {
    const tree = renderer.create(<Title theme={theme}>Convert</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
