import { RootRef } from "@material-ui/core";
import { createSlice } from "@reduxjs/toolkit";
import { exampleData } from "../exampleData";
import { RootState } from "../store";

const ExpensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: exampleData,
    isAddExpenseModalOpen: false,
    isEditExpenseModalOpen: false,
  },
  reducers: {
    addExpense: () => {},

    editExpense: () => {},

    removeExpense: () => {},

    openAddExpenseModal: (state) => {
      state.isAddExpenseModalOpen = true;
    },

    closeAddExpenseModal: (state) => {
      state.isAddExpenseModalOpen = false;
    },

    openEditExpenseModal: (state) => {
      state.isEditExpenseModalOpen = true;
    },

    closeEditExpenseModal: (state) => {
      state.isEditExpenseModalOpen = false;
    },
  },
});

export const selectExpensesState = (state: RootState) => state.expenses;
export const selectExpenses = (state: RootState) =>
  selectExpensesState(state).expenses;
export const selectisAddExpenseModalOpen = (state: RootState) =>
  selectExpensesState(state).isAddExpenseModalOpen;
export const selectisEditExpenseModalOpen = (state: RootState) =>
  selectExpensesState(state).isEditExpenseModalOpen;

export const {
  addExpense,
  editExpense,
  removeExpense,
  openAddExpenseModal,
  closeAddExpenseModal,
  openEditExpenseModal,
  closeEditExpenseModal,
} = ExpensesSlice.actions;

export default ExpensesSlice.reducer;
