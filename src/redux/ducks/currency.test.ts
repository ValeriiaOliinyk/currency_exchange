import {
  exchangeRateReducer,
  addExchangeRate,
  addFavorite,
  favoriteReducer,
  deleteFavorite,
  updateDataReducer,
  updateData,
  putUpdatedDataReducer,
  fetchUpdatedCurrency,
} from "./currency";

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
  let action = fetchUpdatedCurrency({
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
