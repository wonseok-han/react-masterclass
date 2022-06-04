import "./index.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  textColor: "whitesmoke",
  backgroudColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroudColor: "whitesmoke",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
