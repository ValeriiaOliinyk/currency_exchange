import React from "react";
import "jest-styled-components";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "../../../redux/store";
import theme from "../../../styles/theme";

import { Container, Title } from "../../../components/styled";
import { CurrencyRow } from "../../../components";
import Theme from "../../../styles/theme";

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
