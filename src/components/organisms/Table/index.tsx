import React from "react";
import {
  Paper,
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@material-ui/core";
import { SingleExpense, TableHeaderData } from "../../../interfaces";
import Toolbar from "../../molecules/Toolbar";

interface TableProps {
  bodyData: Array<SingleExpense>;
  headData: Array<TableHeaderData>;
}

const Table: React.FC<TableProps> = ({ bodyData, headData }) => {
  return (
    <Paper>
      <Toolbar />
      <TableContainer>
        <MuiTable>
          <TableHead>
            <TableRow>
              {headData.map((dataHeadCell) => (
                <TableCell key={dataHeadCell.name}>
                  {dataHeadCell.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {bodyData.map((costDataRow) => (
              <TableRow key={costDataRow.id}>
                <TableCell>{costDataRow.expense}</TableCell>
                <TableCell>{costDataRow.cost}</TableCell>
                <TableCell>{costDataRow.category}</TableCell>
                <TableCell>{costDataRow.date.toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Paper>
  );
};

export default Table;
