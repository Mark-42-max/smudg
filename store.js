import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "./slices/optionSlice";

export const store = configureStore({
  reducer: {
    options: optionReducer,
  },
});
