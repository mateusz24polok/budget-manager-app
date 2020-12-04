import React from "react";
import { Grid, Toolbar as MuiToolbar } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import SearchInput from "../../atoms/SearchInput";
import DialogButton from "../../atoms/DialogButton";
import { useStyles } from "./styles";
import { useDispatch } from "react-redux";
import { openAddExpenseModal } from "../../../slices/ExpensesSlice";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Toolbar: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const openAddExpenseModalHandler = () => {
    dispatch(openAddExpenseModal());
  };

  return (
    <MuiToolbar className={classes.margin}>
      <Grid container direction={matches ? "row" : "column"} justify="space-between" alignItems="center">
        <SearchInput size={matches ? "medium" : "small"}/>
        <DialogButton
          onClick={openAddExpenseModalHandler}
          variant="contained"
          color="primary"
          startIcon={<Add />}
          style={matches ? undefined : {width: 242 + "px"}}
        >
          Add Expense
        </DialogButton>
      </Grid>
    </MuiToolbar>
  );
};

export default Toolbar;
