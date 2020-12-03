import React from "react";
import Table from "../../organisms/Table";
import Dialog from "../../templates/Dialog";
import { exampleHeaderData } from "../../../exampleData";
import { useSelector } from "react-redux";
import { selectExpenses } from "../../../slices/ExpensesSlice";

const MainPage: React.FC = () => {
  const expenses = useSelector(selectExpenses);
  return (
    <>
      <Table bodyData={expenses} headData={exampleHeaderData}/>
      <Dialog/>
    </>
  );
};

export default MainPage;
