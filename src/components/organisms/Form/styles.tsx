import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    "& .MuiFormControl-root": {
      width: "100%",
      margin: "16px 0",
      display: "flex",
      flexDirection: "column",
    },
  },
});
