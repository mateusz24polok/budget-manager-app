import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  table: {
    border: "2px solig green",
    marginTop: theme.spacing(3),
    "& thead th": {
      fontWeight: "600",
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
    },
    "& tbody td": {
      fontWeight: "300",
    },
    "& tbody tr:hover": {
      backgroundColor: "#fffbf2",
      cursor: "pointer",
    },
  },

  "@media (max-width: 960px)": {
    table: {
      "& thead th": {
        fontSize: "10px",
      },
      "& tbody td": {
        fontSize: "10px",
      },
    },
  },

  newButton: {
    textTransform: "capitalize",
  },

  newInput: {
    width: "100%",
    padding: "10px",
  },
}));
