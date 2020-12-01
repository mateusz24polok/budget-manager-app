import { SingleExpense, TableHeaderData } from "./interfaces";

export const exampleData: Array<SingleExpense> = [
  {
    id: 0,
    expense: "New TV",
    cost: 2000,
    category: "Electronics",
    date: new Date(),
  },

  {
    id: 1,
    expense: "Fruits and Vegetable",
    cost: 10,
    category: "Grocery",
    date: new Date(),
  },

  {
    id: 2,
    expense: "Electicity",
    cost: 250,
    category: "Bills",
    date: new Date(),
  },

  {
    id: 3,
    expense: "Vinyls",
    cost: 300,
    category: "Hobby",
    date: new Date(),
  },

  {
    id: 4,
    expense: "Shampoo",
    cost: 20,
    category: "Hygiene",
    date: new Date(),
  },
];

export const exampleHeaderData: Array<TableHeaderData> = [
  {
    name: "expense",
    label: "Expense",
  },

  {
    name: "cost",
    label: "Cost $",
  },

  {
    name: "category",
    label: "Category",
  },

  {
    name: "date",
    label: "Date",
  },

  {
    name: "actions",
    label: "Edit / Remove",
  },
];
