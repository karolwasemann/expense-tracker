import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { TransactionsContextProvider } from "./context/TransactionsContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <TransactionsContextProvider>
        <App />
      </TransactionsContextProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
