import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./config/persist-config";

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof persistedReducer>;
export type AppDispatch = typeof store.dispatch;
