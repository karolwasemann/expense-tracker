import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { TransactionsContextProvider } from "./context/TransactionsContext";

ReactDOM.render(
  <React.StrictMode>
    <TransactionsContextProvider>
      <App />
    </TransactionsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
