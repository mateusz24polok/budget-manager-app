import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditOutlined, Delete } from "@material-ui/icons";
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
  TableFooter,
  Typography,
} from "@material-ui/core";
import {
  SingleExpenseInterface,
  TableHeaderDataInterface,
  SortingOrder,
} from "../../../interfaces";
import Toolbar from "../../molecules/Toolbar";
import ActionButton from "../../atoms/ActionButton";
import {
  removeExpense,
  openEditExpenseModal,
  selectFitersOutExpensesValue,
} from "../../../slices/ExpensesSlice";
import { getComparator, stableSort, calculateSummaryExpenses, filterExpenses } from "./helpers";
import { useStyles } from "./styles";


interface TableProps {
  bodyData: Array<SingleExpenseInterface>;
  headData: Array<TableHeaderDataInterface>;
}

const Table: React.FC<TableProps> = ({ bodyData, headData }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const filtersOutExpensesValue = useSelector(selectFitersOutExpensesValue);

  const handleRemoveExpense = (id: number) => {
    dispatch(removeExpense(id));
  };

  const handleOpenEditExpenseModal = (
    editedExpense: SingleExpenseInterface
  ) => {
    dispatch(openEditExpenseModal(editedExpense));
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
  const [order, setOrder] = useState<
    SortingOrder.Ascending | SortingOrder.Descending
  >(SortingOrder.Ascending);
  const [orderBy, setOrderBy] = useState<string>("");

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === SortingOrder.Ascending;
    setOrder(isAsc ? SortingOrder.Descending : SortingOrder.Ascending);
    setOrderBy(property);
  };

  const sortedAndPagingData = stableSort<any>(
    filterExpenses(bodyData, filtersOutExpensesValue),
    getComparator(order, orderBy)
  ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper className={classes.root}>
      <Typography variant="h3" component="h1" align="center">
        Budget Manager
      </Typography>
      <Toolbar />
      <TableContainer>
        <MuiTable className={classes.table}>
          <TableHead>
            <TableRow>
              {headData.map((dataHeadCell) => (
                <TableCell key={dataHeadCell.name}>
                  <TableSortLabel
                    active={orderBy === dataHeadCell.name}
                    direction={
                      orderBy === dataHeadCell.name
                        ? order
                        : SortingOrder.Ascending
                    }
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
                  <ActionButton
                    onClick={() => handleOpenEditExpenseModal(costDataRow)}
                    color="primary"
                  >
                    <EditOutlined />
                  </ActionButton>
                  <ActionButton
                    onClick={() => handleRemoveExpense(costDataRow.id)}
                    color="secondary"
                  >
                    <Delete />
                  </ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell variant="head">Summary Expenses</TableCell>
              <TableCell variant="head">{calculateSummaryExpenses(bodyData)}</TableCell>
            </TableRow>
          </TableFooter>
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
