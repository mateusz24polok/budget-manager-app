import React from "react";
import {
  Dialog as MuiDialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Button,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import Form from "../../organisms/Form";
import ActionButton from "../../atoms/ActionButton";
import { Close } from "@material-ui/icons";

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
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MuiDialog
      open={open}
      onClose={handleClose}
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            Tytuł
          </Typography>
          <ActionButton onClick={()=>{}} color="secondary">
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
