export interface SingleExpenseInterface {
  id: number;
  expense: string;
  cost: number;
  category: string;
  date: Date;
}

export interface TableHeaderDataInterface {
  name: string;
  label: string;
  sortable: boolean;
}

export interface ErrorTypes {
  expense?: string;
  cost?: string;
}

export enum CategoriesTypes {
  Bills = "Bills",
  Electronics = "Electronics",
  Grocery = "Grocery",
  Hobby = "Hobby",
  Hygiene = "Hygiene",
  Another = "Another",
}

export enum DataIdTypes {
  Expense = "expense",
  Cost = "cost",
  Category = "category",
  Date = "date",
  id = "id",
}

export enum SortingOrder {
  Ascending = "asc",
  Descending = "desc",
}
