import { select, all, takeLatest } from "redux-saga/effects";
import { addExpense, editExpense, removeExpense, selectExpenses } from "../slices/ExpensesSlice";

function* localStorageActionHandler() {
  const expenses = yield select(selectExpenses);
  yield localStorage.setItem("Expenses", JSON.stringify(expenses))
}

export function* localStorageSaga() {
    yield all([
        takeLatest(addExpense.type, localStorageActionHandler),
        takeLatest(editExpense.type, localStorageActionHandler),
        takeLatest(removeExpense.type, localStorageActionHandler)
    ])
;
}
