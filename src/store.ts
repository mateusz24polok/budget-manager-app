import { configureStore } from "@reduxjs/toolkit";
import ExpensesSlice from "./slices/ExpensesSlice";

export const store = configureStore({
  reducer: {
    expenses: ExpensesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>