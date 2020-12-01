import React from "react";
import Table from "../../organisms/Table";
import { exampleHeaderData } from "../../../exampleData";
import { useSelector } from "react-redux";
import { selectExpenses } from "../../../slices/ExpensesSlice";

const MainPage: React.FC = () => {
    const expenses = useSelector(selectExpenses);
    console.log(expenses);
    return(
        <Table bodyData={expenses} headData={exampleHeaderData} />
    )
}


export default MainPage;
