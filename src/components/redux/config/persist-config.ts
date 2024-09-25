import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import rootReducer from "../reducers/root-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['scene'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
