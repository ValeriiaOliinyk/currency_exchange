// import { takeEvery, put, call, select } from "redux-saga/effects";
// import { getDataUrl } from "./currency-selectors";
// const BASE_URL = "https://api.exchangeratesapi.io/latest";

// export const UPDATE_DATA = "UPDATE_DATA";
// export const FETCH_UPDATED_CURRENCY = "GET_CURRENCY";

// export function updateData(first, second) {
//   return {
//     type: UPDATE_DATA,
//     payload: {
//       from: first,
//       to: second,
//     },
//   };
// }

// const initialState = {
//   from: "EUR",
//   to: "CAD",
// };

// export const updateDataReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case UPDATE_DATA:
//       return { from: action.payload.from, to: action.payload.to };
//     default:
//       return state;
//   }
// };

// export function fetchUpdatedCurrency(data) {
//   return {
//     type: FETCH_UPDATED_CURRENCY,
//     payload: data,
//   };
// }

// export const putUpdatedDataReducer = (state = [], action) => {
//   switch (action.type) {
//     case FETCH_UPDATED_CURRENCY:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// // Saga

// export function* workerUpdateData() {
//   const data = yield call(updateCurrency);
//   yield put(fetchUpdatedCurrency(data));
//   console.log(data);
// }

// export function* watchUpdateData() {
//   yield takeEvery(UPDATE_DATA, workerUpdateData);
// }

// function* updateCurrency() {
//   let { from, to } = yield select(getDataUrl);

//   if (from !== "undefined" && to && "undefined") {
//     return yield fetch(
//       `${BASE_URL}?base=${from}&symbols=${to}`
//     ).then((response) => response.json());
//   }
// }
