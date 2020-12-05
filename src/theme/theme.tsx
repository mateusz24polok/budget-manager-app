import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          boxSizing: "border-box",
        },

        body: {
          margin: "0 auto",
          maxWidth: "1000px",
          
        },
      },
    },
  },
});
