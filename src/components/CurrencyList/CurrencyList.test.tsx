import React from "react";
import { shallow } from "enzyme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import { CurrencyList } from "../../components";
import store from "../../redux/store";

import Theme from "../../styles/theme";

test("CurrencyList component render", async () => {
  shallow(
    <ThemeProvider theme={Theme}>
      <Provider store={store.store}>
        <CurrencyList />
      </Provider>
    </ThemeProvider>
  );
});
