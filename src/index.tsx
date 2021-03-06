import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import App from "./App";
import { theme } from "./theme/theme";
import { store } from "./store";

ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>,
  document.getElementById("root")
);
