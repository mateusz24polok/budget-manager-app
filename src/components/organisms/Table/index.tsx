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
  TableSortLabel,
} from "@material-ui/core";
import { EditOutlined, Delete } from "@material-ui/icons";
import { useStyles } from "./styles";
import { SingleExpense, TableHeaderData } from "../../../interfaces";
import Toolbar from "../../molecules/Toolbar";
import ActionButton from "../../atoms/ActionButton";
import { getComparator, stableSort } from "./helpers";
import { useDispatch } from "react-redux";
import { removeExpense } from "../../../slices/ExpensesSlice";

interface TableProps {
  bodyData: Array<SingleExpense>;
  headData: Array<TableHeaderData>;
}

const Table: React.FC<TableProps> = ({ bodyData, headData }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleRemoveExpense = (id: number) => {
    dispatch(removeExpense(id));
  };

  //Pagination variables of state

  const rowsPerPageOptions = [5, 10, 25];
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(
    rowsPerPageOptions[page]
  );

  //Pagination handle functions

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

  //Sorting variables of state
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<string>("");

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedAndPagingData = stableSort<any>(
    bodyData,
    getComparator(order, orderBy)
  ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper>
      <Toolbar />
      <TableContainer>
        <MuiTable className={classes.table}>
          <TableHead>
            <TableRow>
              {headData.map((dataHeadCell) => (
                <TableCell key={dataHeadCell.name}>
                  <TableSortLabel
                    active={orderBy === dataHeadCell.name}
                    direction={orderBy === dataHeadCell.name ? order : "asc"}
                    onClick={() => handleRequestSort(dataHeadCell.name)}
                    disabled={!dataHeadCell.sortable}
                  >
                    {dataHeadCell.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedAndPagingData.map((costDataRow) => (
              <TableRow key={costDataRow.id}>
                <TableCell>{costDataRow.expense}</TableCell>
                <TableCell>{costDataRow.cost}</TableCell>
                <TableCell>{costDataRow.category}</TableCell>
                <TableCell>{costDataRow.date.toLocaleDateString()}</TableCell>
                <TableCell>
                  <ActionButton onClick={()=> console.log("Here will be expense adit functionality")} color="primary">
                    <EditOutlined />
                  </ActionButton>
                  <ActionButton onClick={()=>handleRemoveExpense(costDataRow.id)} color="secondary">
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
