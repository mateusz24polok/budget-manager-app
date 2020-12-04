import React from "react";
import { Grid, Toolbar as MuiToolbar } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import SearchInput from "../../atoms/SearchInput";
import DialogButton from "../../atoms/DialogButton";
import { openAddExpenseModal } from "../../../slices/ExpensesSlice";
import { useStyles } from "./styles";

const Toolbar: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const openAddExpenseModalHandler = () => {
    dispatch(openAddExpenseModal());
  };

  return (
    <MuiToolbar className={classes.margin}>
      <Grid container justify="space-between" alignItems="center">
        <SearchInput />
        <DialogButton
          onClick={openAddExpenseModalHandler}
          variant="contained"
          color="primary"
          startIcon={<Add />}
        >
          Add Expense
        </DialogButton>
      </Grid>
    </MuiToolbar>
  );
};

export default Toolbar;
