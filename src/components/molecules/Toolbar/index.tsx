import React from "react";
import { Grid, Toolbar as MuiToolbar } from "@material-ui/core";
import SearchInput from "../../atoms/SearchInput";
import AddExpenseButton from "../../atoms/AddExpenseButton";
import { useStyles } from "./style";
import { useDispatch } from "react-redux";
import { openAddExpenseModal } from "../../../slices/ExpensesSlice";

const Toolbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const openAddExpenseModalHandler = () => {
    dispatch(openAddExpenseModal());
  };

  return (
    <MuiToolbar className={classes.margin}>
      <Grid container justify="space-between" alignItems="center">
        <SearchInput />
        <AddExpenseButton onClick={openAddExpenseModalHandler} />
      </Grid>
    </MuiToolbar>
  );
};

export default Toolbar;
