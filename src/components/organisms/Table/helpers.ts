import {SortingOrder, SingleExpenseInterface} from "../../../interfaces";

type Order = SortingOrder.Ascending | SortingOrder.Descending;

// Standard functions from Material-UI library for sorting table values 

const descendingComparator = <T>(a: T, b: T, orderBy: keyof T) => {
if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
};
  
export const getComparator = <Key extends keyof any>(
    order: Order,
    orderBy: Key,
  ): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number => {
    return order === SortingOrder.Descending
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
};
  
export const stableSort = <T>(array: T[], comparator: (a: T, b: T) => number) => {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
};

//Helper functions for calculate summary expenses and filter expenses in the table

export const calculateSummaryExpenses = (expenses: Array<SingleExpenseInterface>) => {
  return expenses.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.cost;
  },0)
}

export const filterExpenses = (data: Array<SingleExpenseInterface>, filteredValue: string) => {
  return data.filter(element=> element.expense.toLowerCase().includes(filteredValue.toLowerCase()))
};