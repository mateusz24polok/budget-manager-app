import { TableHeaderDataInterface } from "../interfaces";

export const headerData: Array<TableHeaderDataInterface> = [
  {
    name: "expense",
    label: "Expense",
    sortable: true,
  },

  {
    name: "cost",
    label: "Cost $",
    sortable: true,
  },

  {
    name: "category",
    label: "Category",
    sortable: true,
  },

  {
    name: "date",
    label: "Date",
    sortable: true,
  },

  {
    name: "actions",
    label: "Edit / Remove",
    sortable: false,
  },
];
