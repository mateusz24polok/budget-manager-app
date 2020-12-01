import React from "react";
import { Grid, Toolbar as MuiToolbar } from "@material-ui/core";
import SearchInput from "../../atoms/SearchInput";
import AddExpenseButton from "../../atoms/AddExpenseButton";
import { useStyles } from "./style";

const Toolbar = () => {
  const classes = useStyles();
  return (
    <MuiToolbar className={classes.margin}>
      <Grid container justify="space-between" alignItems="center">
        <SearchInput />
        <AddExpenseButton />
      </Grid>
    </MuiToolbar>
  );
};

export default Toolbar;
