import React from "react";
import { useDispatch } from "react-redux";
import { Close } from "@material-ui/icons";
import { Dialog as MuiDialog, DialogTitle, DialogContent, Typography, useMediaQuery } from "@material-ui/core";
import Form from "../../organisms/Form";
import ActionButton from "../../atoms/ActionButton";
import { closeAddExpenseModal, closeEditExpenseModal } from "../../../slices/ExpensesSlice";
import { useStyles } from "./styles";

interface DialogProps {
  actionType: "edit" | "add";
}

const Dialog: React.FC<DialogProps> = ({ actionType }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const matches = useMediaQuery('(max-height: 550px) and (orientation: landscape)');

  const handleClose = () => {
    if (actionType === "add") {
      dispatch(closeAddExpenseModal());
    } else if (actionType === "edit") {
      dispatch(closeEditExpenseModal());
    }
  };

  return (
    <MuiDialog open classes={{ paper: classes.dialogWrapper }}>
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant={matches ? "h6" : "h5"} component="h2" style={{ flexGrow: 1 }}>
            {actionType === "add" ? "Add Expense" : "Edit Expense"}
          </Typography>
          <ActionButton onClick={handleClose} color="secondary">
            <Close />
          </ActionButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <Form formType={actionType} />
      </DialogContent>
    </MuiDialog>
  );
};

export default Dialog;
