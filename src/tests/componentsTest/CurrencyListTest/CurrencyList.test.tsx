import React from "react";
import * as reactRedux from "react-redux";
import { shallow, ShallowWrapper } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import {
  currencyResponse,
  rates,
  updatedData,
  rate,
  favorite,
} from "../../../helpers/fakeResponse";

import { CurrencyList } from "../../../components";
import { ListFavorite } from "../../../styled";

const initialState = {
  currency: currencyResponse,
  rates,
  updatedData,
  rate,
  favorite,
};

describe("CurrencyList component renders correctly", async () => {
  let wrapper: ShallowWrapper<any>;
  let store: any = configureStore()(initialState);
  beforeEach(() => {
    jest
      .spyOn(reactRedux, "useSelector")
      .mockImplementation((state) => store.getState().getCurrency);

    jest
      .spyOn(reactRedux, "useDispatch")
      .mockImplementation(() => store.dispatch);

    wrapper = shallow(
      <Provider store={store}>
        <CurrencyList />
      </Provider>
    )
      .dive()
      .dive();
  });

  test("Component renders correctly", async () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Component renders with ListFavorite components", () => {
    expect(wrapper.find(ListFavorite)).toHaveLength(2);
  });
});
