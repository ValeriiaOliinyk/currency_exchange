import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import { CurrencyList } from "../../components";
import store from "../../redux/store";

import Theme from "../../styles/theme";

test("CurrencyList component render", async () => {
  const { getByText } = render(
    <ThemeProvider theme={Theme}>
      <Provider store={store.store}>
        <CurrencyList />
      </Provider>
    </ThemeProvider>
  );
});
