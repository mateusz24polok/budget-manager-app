import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { exampleData } from "../exampleData";
import { RootState } from "../store";
import { SingleExpense } from "../interfaces";

type ExpensesSliceState = {
  expenses: Array<SingleExpense>;
  isAddExpenseModalOpen: boolean;
  isEditExpenseModalOpen: boolean;
};

const initialState: ExpensesSliceState = {
  expenses: exampleData,
  isAddExpenseModalOpen: false,
  isEditExpenseModalOpen: false,
};

const ExpensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: () => {},

    editExpense: () => {},

    removeExpense: (state, action: PayloadAction<number>) => {
      state.expenses = state.expenses.filter((expense) => expense.id !== action.payload);
    },

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
export const selectExpenses = (state: RootState) => selectExpensesState(state).expenses;
export const selectisAddExpenseModalOpen = (state: RootState) => selectExpensesState(state).isAddExpenseModalOpen;
export const selectisEditExpenseModalOpen = (state: RootState) => selectExpensesState(state).isEditExpenseModalOpen;

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
