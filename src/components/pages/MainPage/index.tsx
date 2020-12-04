import React from "react";
import Table from "../../organisms/Table";
import Dialog from "../../templates/Dialog";
import { headerData } from "../../../data/headersData";
import { useSelector } from "react-redux";
import {
  selectExpenses,
  selectIsEditExpenseModalOpen,
  selectIsAddExpenseModalOpen,
} from "../../../slices/ExpensesSlice";

const MainPage: React.FC = () => {
  const expenses = useSelector(selectExpenses);
  const isAddExpenseModalOpen = useSelector(selectIsAddExpenseModalOpen);
  const isEditExpenseModalOpen = useSelector(selectIsEditExpenseModalOpen);

  return (
    <>
      <Table bodyData={expenses} headData={headerData} />
      {isAddExpenseModalOpen && <Dialog actionType="add" />}
      {isEditExpenseModalOpen && <Dialog actionType="edit" />}
    </>
  );
};

export default MainPage;
