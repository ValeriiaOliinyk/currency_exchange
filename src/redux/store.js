import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { exchangeRateReducer } from "./currency/currency-reducers";
import { updateDataReducer } from "./currency/dataUrl-reducer";
import { favoriteReducer } from "./currency/favorite-reducer";
import { currencyReducer } from "./currency/fetch-reducer";
import { sagaWatcher } from "./currency/fetch-reducer";
// import { watchUpdateData } from "./currency/dataUrl-reducer";
import { putUpdatedDataReducer } from "./currency/dataUrl-reducer";

const saga = createSagaMiddleware();

const persistConfig = {
  key: "favoritesList",
  storage,
  blacklist: ["currency", "data", "updatedData"],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
  saga,
];

const rootReducer = combineReducers({
  currency: currencyReducer,
  favorite: favoriteReducer,
  data: updateDataReducer,
  rate: exchangeRateReducer,
  updatedData: putUpdatedDataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

saga.run(sagaWatcher);
// saga.run(watchUpdateData);

const persistor = persistStore(store);

export default { store, persistor };
