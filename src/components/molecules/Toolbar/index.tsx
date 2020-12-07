import React from "react";
import { Grid, Toolbar as MuiToolbar } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import SearchInput from "../../atoms/SearchInput";
import DialogButton from "../../atoms/DialogButton";
import { useStyles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  openAddExpenseModal,
  handleFilteringExpenses,
  selectFitersOutExpensesValue,
} from "../../../slices/ExpensesSlice";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Toolbar: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const filteringExpenses = useSelector(selectFitersOutExpensesValue);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const openAddExpenseModalHandler = () => {
    dispatch(openAddExpenseModal());
  };

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    dispatch(handleFilteringExpenses(event.currentTarget.value));
  };

  return (
    <MuiToolbar className={classes.margin}>
      <Grid
        container
        direction={matches ? "row" : "column"}
        justify="space-between"
        alignItems="center"
      >
        <SearchInput
          value={filteringExpenses}
          onChange={handleSearchInputChange}
          size={matches ? "medium" : "small"}
          style={matches ? undefined : { width: "242px"}}
        />
        <DialogButton
          onClick={openAddExpenseModalHandler}
          variant="contained"
          color="primary"
          startIcon={<Add />}
          style={matches ? undefined : { width: "242px" }}
        >
          Add Expense
        </DialogButton>
      </Grid>
    </MuiToolbar>
  );
};

export default Toolbar;
