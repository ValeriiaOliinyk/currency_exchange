import React from "react";
import * as reactRedux from "react-redux";
import { shallow, ShallowWrapper } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { currencyResponse } from "../../helpers/fakeResponse";
import { CurrencyRow } from "../../components";

const initialState = {
  currency: currencyResponse,
  rates: { from: "EUR", to: "RUB" },
  rate: 1.558,
  updatedData: { base: "EUR", date: "2020-11-04", rates: { CAD: 1.5411 } },
};

describe("CurrencyRow component renders correctly", async () => {
  let tree: ShallowWrapper<any>;
  let store: any = configureStore()(initialState);
  beforeEach(() => {
    jest
      .spyOn(reactRedux, "useSelector")
      .mockImplementation((state) => store.getState().getCurrency);
    jest
      .spyOn(reactRedux, "useSelector")
      .mockImplementation((state) => store.getState().updatedData);
    jest
      .spyOn(reactRedux, "useSelector")
      .mockImplementation((state) => store.getState().currency);
    jest
      .spyOn(reactRedux, "useSelector")
      .mockImplementation((state) => store.getState().rates);

    jest
      .spyOn(reactRedux, "useDispatch")
      .mockImplementation(() => store.dispatch);

    tree = shallow(
      <Provider store={store}>
        <CurrencyRow />
      </Provider>
    )
      .dive()
      .dive();
  });

  test("Component renders correctly", async () => {
    expect(tree).toMatchSnapshot();
  });
});
