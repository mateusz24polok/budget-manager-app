import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "./theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
