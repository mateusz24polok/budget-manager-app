import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "./theme/theme";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
