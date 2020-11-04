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
  sagaWorker,
} from "./currency";
import { runSaga } from "redux-saga";
import expect from "expect";
import { takeEvery } from "redux-saga/effects";
import { apiService } from "../../api/service";

const currencyResponse: any = {
  base: "EUR",
  date: "2020-11-03",
  rates: {
    AUD: 1.6406,
    BGN: 1.9558,
    BRL: 6.6742,
    CAD: 1.5385,
    CHF: 1.0709,
    CNY: 7.8198,
    CZK: 26.913,
    DKK: 7.4462,
    GBP: 0.90042,
    HKD: 9.0694,
    HRK: 7.5595,
    HUF: 363.82,
    IDR: 16946.31,
    ILS: 3.997,
    INR: 87.0695,
    ISK: 163.7,
    JPY: 122.56,
    KRW: 1323.74,
    MXN: 24.7581,
    MYR: 4.8634,
    NOK: 11.0103,
    NZD: 1.7531,
    PHP: 56.584,
    PLN: 4.568,
    RON: 4.8675,
    RUB: 92.8975,
    SEK: 10.3835,
    SGD: 1.5931,
    THB: 36.329,
    TRY: 9.984,
    USD: 1.1702,
    ZAR: 18.7681,
  },
};

it("Exchange rate should be changed to 209", () => {
  let action = addExchangeRate(209);
  let newState = exchangeRateReducer(0, action);
  expect(newState).toBe(209);
});

it("It should add currency to favorite currencies", () => {
  let action = addFavorite("UKR");
  let newState = favoriteReducer([], action);
  expect(newState).toStrictEqual(["UKR"]);
});

it("It should delete currency from favorite currencies array", () => {
  let action = deleteFavorite("UKR");
  let newState = favoriteReducer([], action);
  expect(newState).toStrictEqual([]);
});

it("It should update from and to currencies", () => {
  let action = updateData("CAD", "EUR");
  let newState = updateDataReducer({ from: "EUR", to: "CAD" }, action);
  expect(newState).toStrictEqual({ from: "CAD", to: "EUR" });
});

it("It should add data", () => {
  let action = getUpdatedDatas({
    date: "30.10.2020",
    base: "UKR",
    rates: { value: "USD" },
  });

  let newState = putUpdatedDataReducer([], action);
  expect(newState).toStrictEqual({
    date: "30.10.2020",
    base: "UKR",
    rates: { value: "USD" },
  });
});

// Saga test

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
      dispatch: (action: any) => dispatched.push(action),
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

  test("It should update currency data", async () => {
    const data = jest
      .spyOn(apiService, "getUpdatedDatas")
      .mockImplementation(() => Promise.resolve(currencyResponse));

    const dispatched: any[] = [];

    const fakeStore = {
      dispatch: (action: any) => dispatched.push(action),
    };

    await runSaga(fakeStore, workerUpdateData).toPromise();

    expect(dispatched[0]).toEqual(getUpdatedDatas(currencyResponse));
    data.mockClear();
  });
});
