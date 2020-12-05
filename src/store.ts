import { configureStore } from "@reduxjs/toolkit";
import ExpensesSlice from "./slices/ExpensesSlice";
import sagaMiddleware from "redux-saga";
import { localStorageSaga } from "./sagas/localStorageSaga";
import { getDataFromLocalStorage } from "./helpers/localStorageHelpers";
import {initialExpense} from "./data/initialExpense";

const saga = sagaMiddleware();

const initialPreloadedState = {
  expenses: getDataFromLocalStorage(),
  isAddExpenseModalOpen: false,
  isEditExpenseModalOpen: false,
  newOrEditedExpense: initialExpense,
  filtersOutExpensesValue: "",
};

export const store = configureStore({
  reducer: {
    expenses: ExpensesSlice,
  },

  middleware: [saga],

  preloadedState: {
    expenses: initialPreloadedState,
  },
});

saga.run(localStorageSaga);

export type RootState = ReturnType<typeof store.getState>;
