import { call, put, takeEvery, select } from "redux-saga/effects";
import { AppStateType } from "../store";
const BASE_URL = "https://api.exchangeratesapi.io/latest";

// Selectors

export const getCurrency = (state: AppStateType) =>
  state.currency.currencyTypes;

export const getCurrencyArray = (state: AppStateType) => {
  const currency: any = getCurrency(state);
  if (currency.rates && currency.base) {
    return [currency.base, ...Object.keys(currency.rates)];
  }
};

export const getFromCurrency = (state: AppStateType) => {
  const currency: any = getCurrency(state);
  if (currency.base) {
    return currency.base;
  }
};

export const getToCurrency = (state: AppStateType) => {
  const currency: any = getCurrency(state);
  if (currency.rates) {
    return Object.keys(currency.rates)[0];
  }
};

export const getFavorites = (state: AppStateType) => state.favorite;
export const getNumberOfFavorites = (state: AppStateType) =>
  state.favorite.length;
export const getRegularCurrency = (state: AppStateType) => {
  const currency: any = getCurrencyArray(state);
  const favorites: any = getFavorites(state);
  if (currency) {
    return currency.filter((n: string) => favorites.indexOf(n) === -1);
  }
};

export const getExchangeRate = (state: AppStateType) => state.rate;
export const getDataUrl = (state: AppStateType) => state.data;
export const getUpdatedData = (state: AppStateType) => state.updatedData;

// Actions
export const EXCHANGE_RATE = "EXCHANGE_RATE";
export const ADD_FAV = "ADD_FAV";
export const DELETE_FAV = "DELETE_FAV";
export const FETCH_CURRENCY = "GET_CURRENCY";
export const LOAD_DATA = "LOAD_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const FETCH_UPDATED_CURRENCY = "FETCH_UPDATED_CURRENCY";

type AddFavoriteActionType = {
  type: typeof ADD_FAV;
  payload: string;
};

export function addFavorite(text: string): AddFavoriteActionType {
  return {
    type: ADD_FAV,
    payload: text,
  };
}

type DeleteFavoriteActionType = {
  type: typeof DELETE_FAV;
  payload: string;
};

export function deleteFavorite(text: string): DeleteFavoriteActionType {
  return {
    type: DELETE_FAV,
    payload: text,
  };
}

type AddExchangeRateActionType = {
  type: typeof EXCHANGE_RATE;
  payload: number;
};

export function addExchangeRate(rate: number): AddExchangeRateActionType {
  return {
    type: EXCHANGE_RATE,
    payload: rate,
  };
}

type FetchCurrencyActionType = {
  type: typeof FETCH_CURRENCY;
  payload: string;
};

export function fetchCurrency(data: string): FetchCurrencyActionType {
  return {
    type: FETCH_CURRENCY,
    payload: data,
  };
}

type LoadDataActionType = {
  type: typeof LOAD_DATA;
};

export function loadData(): LoadDataActionType {
  return {
    type: LOAD_DATA,
  };
}

type SetPayloadTypesUpdateData = {
  from: string;
  to: string;
};

type UpdateDataActionType = {
  type: typeof UPDATE_DATA;
  payload: SetPayloadTypesUpdateData;
};

export function updateData(
  first: string,
  second: string
): UpdateDataActionType {
  return {
    type: UPDATE_DATA,
    payload: {
      from: first,
      to: second,
    },
  };
}

type FetchUpdatedCurrencyActionType = {
  type: typeof FETCH_UPDATED_CURRENCY;
  payload: number;
};

export function fetchUpdatedCurrency(
  data: number
): FetchUpdatedCurrencyActionType {
  return {
    type: FETCH_UPDATED_CURRENCY,
    payload: data,
  };
}

// Reducers

export const exchangeRateReducer = (
  state: number = 0,
  action: AddExchangeRateActionType
) => {
  switch (action.type) {
    case EXCHANGE_RATE:
      return action.payload;
    default:
      return state;
  }
};

export const favoriteReducer = (
  state: Array<string> = [],
  action: AddFavoriteActionType | DeleteFavoriteActionType
) => {
  switch (action.type) {
    case ADD_FAV:
      return [...state, action.payload];
    case DELETE_FAV:
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};

type InitialStateType = {
  currencyTypes: Array<string>;
};

const initialState: InitialStateType = {
  currencyTypes: [],
};

export const currencyReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case FETCH_CURRENCY:
      return { ...state, currencyTypes: action.payload };
    default:
      return state;
  }
};

type UpdateStateType = {
  from: string;
  to: string;
};

const updateState: UpdateStateType = {
  from: "EUR",
  to: "CAD",
};

export const updateDataReducer = (
  state = updateState,
  action: UpdateDataActionType
) => {
  switch (action.type) {
    case UPDATE_DATA:
      return { from: action.payload.from, to: action.payload.to };
    default:
      return state;
  }
};

export const putUpdatedDataReducer = (
  state: Array<string> = [],
  action: FetchUpdatedCurrencyActionType
) => {
  switch (action.type) {
    case FETCH_UPDATED_CURRENCY:
      return action.payload;
    default:
      return state;
  }
};

// Saga

export function* sagaWatcher() {
  yield takeEvery(LOAD_DATA, sagaWorker);
}

function* sagaWorker() {
  const data = yield call(fetchAvailableCurrency);
  yield put(fetchCurrency(data));
}

function* fetchAvailableCurrency() {
  return yield fetch(BASE_URL)
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

export function* workerUpdateData() {
  const data = yield call(updateCurrency);
  yield put(fetchUpdatedCurrency(data));
}

export function* watchUpdateData() {
  yield takeEvery(UPDATE_DATA, workerUpdateData);
}

function* updateCurrency() {
  let { from, to } = yield select(getDataUrl);
  if (from !== "undefined" && to) {
    return yield fetch(`${BASE_URL}?base=${from}&symbols=${to}`)
      .then((response) => response.json())
      .catch((err) => console.log(err));
  }
}
