import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { exampleData } from "../exampleData";
import { RootState } from "../store";
import { SingleExpense } from "../interfaces";

type ExpensesSliceState = {
  expenses: Array<SingleExpense>;
  isAddExpenseModalOpen: boolean;
  isEditExpenseModalOpen: boolean;
  newOrEditedExpense: SingleExpense;
};

const initialExpense: SingleExpense = {
    id: Math.random(),
    expense: "",
    cost: 0,
    category: "Electronics",
    date: new Date(),
}

const initialState: ExpensesSliceState = {
  expenses: exampleData,
  isAddExpenseModalOpen: false,
  isEditExpenseModalOpen: false,
  newOrEditedExpense: initialExpense,
};

const ExpensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<SingleExpense>) => {
      state.expenses.push(action.payload);
    },

    editExpense: (state, action: PayloadAction<SingleExpense>) => {
      const indexOfEditedExpense = state.expenses.findIndex(expense => expense.id === action.payload.id)
      state.expenses[indexOfEditedExpense] = {
        ...action.payload,
        id: state.newOrEditedExpense.id,
      };
    },

    removeExpense: (state, action: PayloadAction<number>) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },

    openAddExpenseModal: (state) => {
      state.isAddExpenseModalOpen = true;
    },

    closeAddExpenseModal: (state) => {
      state.isAddExpenseModalOpen = false;
      state.newOrEditedExpense = initialExpense;
    },

    openEditExpenseModal: (state, action: PayloadAction<SingleExpense>) => {
      state.isEditExpenseModalOpen = true;
      state.newOrEditedExpense = action.payload;
    },

    closeEditExpenseModal: (state) => {
      state.isEditExpenseModalOpen = false;
      state.newOrEditedExpense = initialExpense;
    },
  },
});

export const selectExpensesState = (state: RootState) => state.expenses;
export const selectExpenses = (state: RootState) =>
  selectExpensesState(state).expenses;
export const selectIsAddExpenseModalOpen = (state: RootState) =>
  selectExpensesState(state).isAddExpenseModalOpen;
export const selectIsEditExpenseModalOpen = (state: RootState) =>
  selectExpensesState(state).isEditExpenseModalOpen;
export const selectNewOrEditedExpense = (state: RootState) =>
  selectExpensesState(state).newOrEditedExpense;

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
