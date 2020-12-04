import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { exampleBodyData } from "../data/exampleBodyData";
import { RootState } from "../store";
import { SingleExpenseInterface } from "../interfaces";

type ExpensesSliceState = {
  expenses: Array<SingleExpenseInterface>;
  isAddExpenseModalOpen: boolean;
  isEditExpenseModalOpen: boolean;
  newOrEditedExpense: SingleExpenseInterface;
  filtersOutExpensesValue: string;
};

const initialExpense: SingleExpenseInterface = {
  id: Math.random(),
  expense: "",
  cost: 0,
  category: "Electronics",
  date: new Date(),
};

const initialState: ExpensesSliceState = {
  expenses: exampleBodyData,
  isAddExpenseModalOpen: false,
  isEditExpenseModalOpen: false,
  newOrEditedExpense: initialExpense,
  filtersOutExpensesValue: "",
};

const ExpensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<SingleExpenseInterface>) => {
      state.expenses.push(action.payload);
    },

    editExpense: (state, action: PayloadAction<SingleExpenseInterface>) => {
      const indexOfEditedExpense = state.expenses.findIndex((expense) => expense.id === action.payload.id);
      state.expenses[indexOfEditedExpense] = {
        ...action.payload,
        id: state.newOrEditedExpense.id,
      };
    },

    removeExpense: (state, action: PayloadAction<number>) => {
      state.expenses = state.expenses.filter((expense) => expense.id !== action.payload);
    },

    openAddExpenseModal: (state) => {
      state.isAddExpenseModalOpen = true;
    },

    closeAddExpenseModal: (state) => {
      state.isAddExpenseModalOpen = false;
      state.newOrEditedExpense = initialExpense;
    },

    openEditExpenseModal: (state, action: PayloadAction<SingleExpenseInterface>) => {
      state.isEditExpenseModalOpen = true;
      state.newOrEditedExpense = action.payload;
    },

    closeEditExpenseModal: (state) => {
      state.isEditExpenseModalOpen = false;
      state.newOrEditedExpense = initialExpense;
    },

    handleFilteringExpenses: (state, action: PayloadAction<string>) => {
      state.filtersOutExpensesValue = action.payload;
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
export const selectFitersOutExpensesValue = (state: RootState) =>
  selectExpensesState(state).filtersOutExpensesValue;

export const {
  addExpense,
  editExpense,
  removeExpense,
  openAddExpenseModal,
  closeAddExpenseModal,
  openEditExpenseModal,
  closeEditExpenseModal,
  handleFilteringExpenses,
} = ExpensesSlice.actions;

export default ExpensesSlice.reducer;
