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
          <Typography variant="h5" component="h2" style={{ flexGrow: 1 }}>
            Add / edit expense
          </Typography>
          <ActionButton onClick={() => {}} color="secondary">
            <Close />
          </ActionButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <Form />
      </DialogContent>
      <DialogActions>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={5}>
            <DialogButton
              variant="contained"
              onClick={handleClose}
              color="primary"
              fullWidth
            >
              Reset
            </DialogButton>
          </Grid>
          <Grid item xs={5}>
            <DialogButton
              variant="contained"
              onClick={handleClose}
              color="primary"
              fullWidth
            >
              Add
            </DialogButton>
          </Grid>
        </Grid>
      </DialogActions>
    </MuiDialog>
  );
};

export default Dialog;
