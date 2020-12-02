import React from "react";
import Table from "../../organisms/Table";
import Form from "../../organisms/Form";
import Dialog from "../../templates/Dialog";
import { exampleHeaderData } from "../../../exampleData";
import { useSelector } from "react-redux";
import { selectExpenses } from "../../../slices/ExpensesSlice";

const MainPage: React.FC = () => {
  const expenses = useSelector(selectExpenses);
  console.log(expenses);
  return (
    <>
      <Dialog/>
    </>
  );
};

export default MainPage;
