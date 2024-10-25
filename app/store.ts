import { configureStore } from "@reduxjs/toolkit";
import userTextReducer from "./features/text/textSlice";

export const dataStore = configureStore({
  reducer: {
    userText: userTextReducer,
  },
});
export type DataStore = typeof dataStore;
export type RootState = ReturnType<DataStore["getState"]>;
export type StoreDispatch = DataStore["dispatch"];
