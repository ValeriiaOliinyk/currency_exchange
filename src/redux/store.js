import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { currencyReducer } from "./currency/currency-reducers";
import { sagaWatcher } from "./currency/currency-saga";

const saga = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
  saga,
];

const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// saga.run(sagaWatcher);

const persistor = persistStore(store);

export default { store, persistor };
