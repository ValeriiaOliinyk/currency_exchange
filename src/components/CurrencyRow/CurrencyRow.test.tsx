import React from "react";
import { shallow } from "enzyme";

import { Provider } from "react-redux";

import { CurrencyRow } from "../../components";

import store from "../../redux/store";

const setUp = ({ children }: any) =>
  shallow(<Provider store={store.store}>{children}</Provider>);

test("Component renders correctly", async () => {
  const tree = setUp(<CurrencyRow />);
  expect(tree).toMatchSnapshot();
});
