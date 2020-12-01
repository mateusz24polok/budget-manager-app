import React from "react";
import { Paper, TableContainer, Table as MuiTable } from "@material-ui/core";
import { SingleExpense } from "../../../interfaces";

interface TableProps {
  bodyData: Array<SingleExpense>;
}

const Table: React.FC<TableProps> = ({ bodyData }) => {
  return (
    <Paper>
      <TableContainer>
        <MuiTable></MuiTable>
      </TableContainer>
    </Paper>
  );
};

export default Table;
