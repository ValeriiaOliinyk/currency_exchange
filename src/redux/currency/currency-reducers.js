import { call, put, takeEvery } from "redux-saga/effects";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

export const FETCH_CURRENCY = "GET_CURRENCY";
export const LOAD_DATA = "LOAD_DATA";

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

const initialState = {
  currencyTypes: [],
};

// Reducers

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCY:
      return { ...state, currencyTypes: action.payload };
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

// MUST export default a function called reducer()
// MUST export its action creators as functions
// MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
// MAY export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library
