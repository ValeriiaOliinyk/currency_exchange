import { call, put, takeEvery } from "redux-saga/effects";
import { LOAD_DATA } from "./currency-reducers";

export function* sagaWatcher() {
  yield takeEvery(LOAD_DATA, sagaWorker);
}

function* sagaWorker() {
  const payload = yield call(fetchAvailableCurrency);
  yield put({ type: LOAD_DATA, payload });
}

async function fetchAvailableCurrency() {
  const response = await fetch(
    "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
  );
  return await response.json();
}

// 15 min
