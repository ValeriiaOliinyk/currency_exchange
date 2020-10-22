import { call, put, takeEvery, select } from "redux-saga/effects";
import { getDataUrl } from "./currency-selectors";
const BASE_URL = "https://api.exchangeratesapi.io/latest";

export const FETCH_CURRENCY = "GET_CURRENCY";
export const LOAD_DATA = "LOAD_DATA";
export const GET_DATA_URL = "GET_DATA_URL";
export const ADD_FAV = "ADD_FAV";
export const DELETE_FAV = "DELETE_FAV";
export const UPDATE_DATA = "UPDATE_DATA";
export const EXCHANGE_RATE = "EXCHANGE_RATE";

// Actions

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

export function loadDataUrl() {
  return {
    type: GET_DATA_URL,
  };
}

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

export function updateData(url) {
  return {
    type: UPDATE_DATA,
    payload: url,
  };
}

// Reducers

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

export const updateDataReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const exchangeRateReducer = (state = 0, action) => {
  switch (action.type) {
    case EXCHANGE_RATE:
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

function fetchAvailableCurrency() {
  return fetch(BASE_URL).then((response) => response.json());
}

// Saga second

// export function* sagaWatcher() {
//   yield takeEvery(LOAD_DATA, sagaWorker);
// }

// function* sagaWorker() {
//   const data = yield call(fetchAvailableCurrency);
//   yield put(fetchCurrency(data));
// }

// function fetchAvailableCurrency() {
//   return fetch(BASE_URL).then((response) => response.json());

function* sampleSaga() {
  if (true) {
    const data = yield select(getDataUrl);
    yield 1;
    yield data;
  }
}

const prac = sampleSaga();

console.log(`Оно ${prac.next()}`);
