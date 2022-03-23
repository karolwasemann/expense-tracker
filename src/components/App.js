import { useContext, useEffect } from "react";
import { BalanceContext } from "../context/BalanceContext";
import "./App.css";
import Header from "./Header";
import History from "./History";
import Transactions from "./Transactions";
function App() {
  const [balance, setBalance] = useContext(BalanceContext);
  // console.log(balance);
  return (
    <div className="App">
      <Header />
      <History />
      <Transactions />
    </div>
  );
}

export default App;
