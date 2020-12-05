import { SingleExpenseInterface } from "../interfaces";

export const getDataFromLocalStorage = () => {
  try {
    const localStorageExpenses: string | null = localStorage.getItem("Expenses");
    const initialExpenses: Array<any> = localStorageExpenses ? JSON.parse(localStorageExpenses) : [];
    const dateFormattedExpenses: Array<SingleExpenseInterface> = initialExpenses.map(
      (element: any) => ({ ...element, date: new Date(element.date) })
    );
    return dateFormattedExpenses;
  } catch (error) {
    console.log(error);
    return [];
  };
};
