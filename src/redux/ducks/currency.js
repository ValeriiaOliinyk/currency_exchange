import { call, put, takeEvery, select } from "redux-saga/effects";
const BASE_URL = "https://api.exchangeratesapi.io/latest";

// Selectors

export const getCurrency = (state) => state.currency.currencyTypes;

export const getCurrencyArray = (state) => {
  const currency = getCurrency(state);
  if (currency.rates && currency.base) {
    return [currency.base, ...Object.keys(currency.rates)];
  }
};

export const getFromCurrency = (state) => {
  const currency = getCurrency(state);
  if (currency.base) {
    return currency.base;
  }
};

export const getToCurrency = (state) => {
  const currency = getCurrency(state);
  if (currency.rates) {
    return Object.keys(currency.rates)[0];
  }
};

export const getFavorites = (state) => state.favorite;
export const getNumberOfFavorites = (state) => state.favorite.length;
export const getRegularCurrency = (state) => {
  const currency = getCurrencyArray(state);
  const favorites = getFavorites(state);
  if (currency) {
    return currency.filter((n) => favorites.indexOf(n) === -1);
  }
};

export const getExchangeRate = (state) => state.rate;
export const getDataUrl = (state) => state.data;
export const getUpdatedData = (state) => state.updatedData;

// Actions
export const EXCHANGE_RATE = "EXCHANGE_RATE";
export const ADD_FAV = "ADD_FAV";
export const DELETE_FAV = "DELETE_FAV";
export const FETCH_CURRENCY = "GET_CURRENCY";
export const LOAD_DATA = "LOAD_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const FETCH_UPDATED_CURRENCY = "FETCH_UPDATED_CURRENCY";

export function addFavorite(text) {
  return {
    type: ADD_FAV,
    payload: text,
  };
}

export function deleteFavorite(text) {
  return {
    type: DELETE_FAV,
    payload: text,
  };
}

export function addExchangeRate(rate) {
  return {
    type: EXCHANGE_RATE,
    payload: rate,
  };
}

export function fetchCurrency(data) {
  return {
    type: FETCH_CURRENCY,
    payload: data,
  };
}

export function loadData() {
  return {
    type: LOAD_DATA,
  };
}

export function updateData(first, second) {
  return {
    type: UPDATE_DATA,
    payload: {
      from: first,
      to: second,
    },
  };
}

// Reducers

export const exchangeRateReducer = (state = 0, action) => {
  switch (action.type) {
    case EXCHANGE_RATE:
      return action.payload;
    default:
      return state;
  }
};

export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FAV:
      return [...state, action.payload];
    case DELETE_FAV:
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};

const initialState = {
  currencyTypes: [],
};

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCY:
      return { ...state, currencyTypes: action.payload };
    default:
      return state;
  }
};

const updateState = {
  from: "EUR",
  to: "CAD",
};

export const updateDataReducer = (state = updateState, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return { from: action.payload.from, to: action.payload.to };
    default:
      return state;
  }
};

export function fetchUpdatedCurrency(data) {
  return {
    type: FETCH_UPDATED_CURRENCY,
    payload: data,
  };
}

export const putUpdatedDataReducer = (state = [], action) => {
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
  console.log(`From ${from} To ${to}`);
  if (from !== "undefined" && to) {
    return yield fetch(`${BASE_URL}?base=${from}&symbols=${to}`)
      .then((response) => response.json())
      .catch((err) => console.log(err));
  }
}
