/* eslint-disable jest/valid-describe */
import React from "react";
import * as reactRedux from "react-redux";
import { shallow, ShallowWrapper } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { Formik } from "formik";
import { Container } from "react-bootstrap";

import {
  currencyResponse,
  rates,
  updatedData,
  rate,
} from "../../../helpers/fakeResponse";
import { CurrencyRow } from "../../../components";

const initialState = {
  currency: currencyResponse,
  rates,
  rate,
  updatedData,
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

  it("Component renders with Container component", () => {
    expect(tree.find(Container)).toHaveLength(1);
  });

  it("Component renders with Formik component", () => {
    expect(tree.find(Formik)).toHaveLength(1);
  });
});
