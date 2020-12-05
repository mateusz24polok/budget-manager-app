import { SingleExpenseInterface } from "../interfaces";

export const initialExpense: SingleExpenseInterface = {
  id: Math.random(),
  expense: "",
  cost: 0,
  category: "Electronics",
  date: new Date(),
};
