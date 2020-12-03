import React from "react";
import {
  Dialog as MuiDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import Form from "../../organisms/Form";
import ActionButton from "../../atoms/ActionButton";
import DialogButton from "../../atoms/DialogButton";
import { Close } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsAddExpenseModalOpen,
  selectIsEditExpenseModalOpen,
  closeAddExpenseModal,
  closeEditExpenseModal,
} from "../../../slices/ExpensesSlice";

const useStyles = makeStyles((theme: Theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },

  dialogTitle: {
    padding: "0px",
  },
}));

const Dialog = () => {
  const dispatch = useDispatch();
  const isAddExpenseModalOpen = useSelector(selectIsAddExpenseModalOpen);
  const isEditExpenseModalOpen = useSelector(selectIsEditExpenseModalOpen);
  const classes = useStyles();

  const handleClose = () => {
    if (isAddExpenseModalOpen) {
      dispatch(closeAddExpenseModal());
    } else if (isEditExpenseModalOpen) {
      dispatch(closeEditExpenseModal());
    }
  };

  return (
    <MuiDialog
      open={isAddExpenseModalOpen || isEditExpenseModalOpen}
      onClose={() => {}}
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h5" component="h2" style={{ flexGrow: 1 }}>
            {isAddExpenseModalOpen ? "Add Expense" : "Edit Expense"}
          </Typography>
          <ActionButton onClick={handleClose} color="secondary">
            <Close />
          </ActionButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <Form />
      </DialogContent>
    </MuiDialog>
  );
};

export default Dialog;
