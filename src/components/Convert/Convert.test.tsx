import React from "react";
import "jest-styled-components";
import { Container, Title } from "../../styled";
import { ThemeProvider } from "styled-components";
import Theme from "../../styles/theme";
import { Provider } from "react-redux";
import store from "../../redux/store";

import { CurrencyRow } from "../CurrencyRow/CurrencyRow";

import theme from "../../styles/theme";
import { shallow } from "enzyme";

it("CurrencyRow component works", () => {
  const tree = shallow(
    <ThemeProvider theme={Theme}>
      <Provider store={store.store}>
        <CurrencyRow />
      </Provider>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});

it("Container component works", () => {
  const tree = shallow(<Container />);
  expect(tree).toMatchSnapshot();
});

it("Renders correctly", () => {
  const tree = shallow(<Title theme={theme}>Convert</Title>);
  expect(tree).toMatchSnapshot();
});
