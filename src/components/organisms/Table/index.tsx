import React, { useState } from "react";
import {
  Paper,
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  TablePagination,
} from "@material-ui/core";
import { EditOutlined, Delete } from "@material-ui/icons";
import { useStyles } from "./styles";
import { SingleExpense, TableHeaderData } from "../../../interfaces";
import Toolbar from "../../molecules/Toolbar";
import ActionButton from "../../atoms/ActionButton";

interface TableProps {
  bodyData: Array<SingleExpense>;
  headData: Array<TableHeaderData>;
}

const Table: React.FC<TableProps> = ({ bodyData, headData }) => {
  const classes = useStyles();

  const rowsPerPageOptions = [5, 10, 25];
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(
    rowsPerPageOptions[page]
  );

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  return (
    <Paper>
      <Toolbar />
      <TableContainer>
        <MuiTable className={classes.table}>
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
            {bodyData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((costDataRow) => (
                <TableRow key={costDataRow.id}>
                  <TableCell>{costDataRow.expense}</TableCell>
                  <TableCell>{costDataRow.cost}</TableCell>
                  <TableCell>{costDataRow.category}</TableCell>
                  <TableCell>{costDataRow.date.toLocaleDateString()}</TableCell>
                  <TableCell>
                    <ActionButton color="primary">
                      <EditOutlined />
                    </ActionButton>
                    <ActionButton color="secondary">
                      <Delete />
                    </ActionButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        count={bodyData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Table;
