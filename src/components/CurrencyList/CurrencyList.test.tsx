import React from "react";
import { shallow, render, mount } from "enzyme";
import { Provider } from "react-redux";

import { CurrencyList } from "../../components";
import store from "../../redux/store";
import { Value } from "../../styled";

const setUp = () =>
  shallow(
    <Provider store={store.store}>
      <CurrencyList />
    </Provider>
  );

describe("CurrencyList component renders correctly", async () => {
  let component: any = null;
  beforeEach(() => {
    component = setUp();
  });

  test("Component renders correctly", async () => {
    expect(component).toMatchSnapshot();
  });

  // test("Component renders with Value component", () => {
  //   console.log(component.debug());
  //   expect(component.find("p")).toBe(1);
  // });
});

// Попробовать другую библиотеку
