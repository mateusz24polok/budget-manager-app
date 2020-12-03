export interface SingleExpense {
  id: number;
  expense: string;
  cost: number;
  category: string;
  date: Date;
}

export interface TableHeaderData {
  name: string;
  label: string;
  sortable: boolean;
}

export interface ErrorTypes {
  expense?: string;
  cost?: string;
}
