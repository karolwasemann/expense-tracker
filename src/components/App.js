import { useContext, useEffect } from "react";
import { TransactionsContext } from "../context/TransactionsContext";
import "./App.css";
import Header from "./Header";
import History from "./History";
import Transactions from "./Transactions";
function App() {
  const [transactions, setTransactions] = useContext(TransactionsContext);
  return (
    <div className="App">
      <Header />
      <History />
      <Transactions />
    </div>
  );
}

export default App;
