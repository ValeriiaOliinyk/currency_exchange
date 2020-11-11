import { runSaga } from "redux-saga";
import expect from "expect";
import { takeEvery } from "redux-saga/effects";

import {
  exchangeRateReducer,
  addExchangeRate,
  addFavorite,
  favoriteReducer,
  deleteFavorite,
  updateDataReducer,
  updateData,
  putUpdatedDataReducer,
  getUpdatedDatas,
  getData,
  getDataUrl,
  watchUpdateData,
  workerUpdateData,
  sagaWatcher,
  sagaWorker
} from "../../../redux/ducks/currency";
import { apiService } from "../../../api/service";
import { currencyResponse } from "../../../helpers/fakeResponse";

it("Exchange rate should be changed to 209", () => {
  let action = addExchangeRate(209);
  let newState = exchangeRateReducer(0, action);
  expect(newState).toBe(209);
});

it("should add currency to favorite currencies", () => {
  let action = addFavorite("UKR");
  let newState = favoriteReducer([], action);
  expect(newState).toStrictEqual(["UKR"]);
});

it("should delete currency from favorite currencies array", () => {
  let action = deleteFavorite("UKR");
  let newState = favoriteReducer([], action);
  expect(newState).toStrictEqual([]);
});

it("should update from and to currencies", () => {
  let action = updateData("CAD", "EUR");
  let newState = updateDataReducer({ from: "EUR", to: "CAD" }, action);
  expect(newState).toStrictEqual({ from: "CAD", to: "EUR" });
});

it("should add data", () => {
  let action = getUpdatedDatas({
    date: "30.10.2020",
    base: "UKR",
    rates: { value: "USD" }
  });

  let newState = putUpdatedDataReducer([], action);
  expect(newState).toStrictEqual({
    date: "30.10.2020",
    base: "UKR",
    rates: { value: "USD" }
  });
});

describe("Check that sagas working", () => {
  const genObject = sagaWatcher();
  const genObjectUpdate = watchUpdateData();

  test("Selector gives back datas", () => {
    const data: object = { from: "EUR", to: "CAD" };
    const state: any = { data };
    const result = getDataUrl(state);
    expect(result).toBe(data);
  });

  test("It should take action and call sagaWorker function", () => {
    expect(genObject.next().value).toEqual(takeEvery("LOAD_DATA", sagaWorker));
  });

  test("It should load currency data", async () => {
    const data = jest
      .spyOn(apiService, "getData")
      .mockImplementation(() => Promise.resolve(currencyResponse));

    const dispatched: any[] = [];
    const fakeStore = {
      dispatch: (action: any) => dispatched.push(action)
    };

    await runSaga(fakeStore, sagaWorker).toPromise();

    expect(dispatched[0]).toEqual(getData(currencyResponse));
    data.mockClear();
  });

  test("It should take action and call watchUpdateData function", () => {
    expect(genObjectUpdate.next().value).toEqual(
      takeEvery("UPDATE_DATA", workerUpdateData)
    );
  });

  it("should be done on next iteration", () => {
    expect(genObjectUpdate.next().done).toBeTruthy();
  });
});
