import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { TransactionsContextProvider } from "./context/TransactionsContext";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <TransactionsContextProvider>
      <App />
    </TransactionsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
