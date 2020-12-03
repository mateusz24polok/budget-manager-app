import React from "react";
import {
  Dialog as MuiDialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import Form from "../../organisms/Form";
import ActionButton from "../../atoms/ActionButton";
import { Close } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import {
  closeAddExpenseModal,
  closeEditExpenseModal,
} from "../../../slices/ExpensesSlice";

interface DialogProps {
  actionType: "edit" | "add";
}

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

const Dialog: React.FC<DialogProps> = ({ actionType }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClose = () => {
    if (actionType === "add") {
      dispatch(closeAddExpenseModal());
    } else if (actionType === "edit") {
      dispatch(closeEditExpenseModal());
    }
  };

  return (
    <MuiDialog open={true} classes={{ paper: classes.dialogWrapper }}>
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h5" component="h2" style={{ flexGrow: 1 }}>
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
