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
import {
  exchangeRateReducer,
  updateDataReducer,
  favoriteReducer,
  currencyReducer,
  sagaWatcher,
  putUpdatedDataReducer,
  watchUpdateData,
} from "./ducks/currency";
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

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

saga.run(sagaWatcher);
saga.run(watchUpdateData);

const persistor = persistStore(store);

export default { store, persistor };
