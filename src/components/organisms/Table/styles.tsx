import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: "20px",
    margin: theme.spacing(4),
  },

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

  pagination: {
    fontSize: "14px",
  },

  "@media (max-width: 670px)": {
    root: {
      paddingTop: "10px",
      margin: theme.spacing(0),
      minHeight: "100vh",
      
    "& .MuiTablePagination-caption, .MuiTablePagination-input, .MuiTablePagination-select":{
      fontSize: "11px",
    }
    },

    table: {
      "& thead th": {
        fontSize: "11px",
        padding: "4px",
      },
      "& tbody td": {
        fontSize: "11px",
        padding: "4px",
      },

      "& tfoot td": {
        fontSize: "11px",
        padding: "4px",
      },
    },
  },

  "@media (max-width: 347px)": {
    root: {
    "& .MuiTablePagination-toolbar":{
      padding: "4px", 
    },

    "& .MuiTablePagination-caption, .MuiTablePagination-input, .MuiTablePagination-select":{
      fontSize: "10px",
    }
    },

    table: {
      "& thead th": {
        fontSize: "10px",
        padding: "2px",
      },
      "& tbody td": {
        fontSize: "10px",
        padding: "2px",
      },

      "& tfoot td": {
        fontSize: "10px",
        padding: "2px",
      },
    },
  },
}));
