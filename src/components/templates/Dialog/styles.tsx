import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
  },

  dialogTitle: {
    padding: 0,
  },

  "@media (max-height: 550px) and (orientation: landscape)": {
    dialogWrapper: {
      maxHeight: "100%",
    },
  },
}));
