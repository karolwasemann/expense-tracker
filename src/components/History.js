import "./History.scss";
import { useContext, useState } from "react";
import { TransactionsContext } from "../context/TransactionsContext";
import TransactionItem from "./TransactionItem";

const History = () => {
  const [transactions, setTransactions] = useContext(TransactionsContext);
  console.log(transactions);
  return (
    <section className="history-container">
      <h5>History</h5>
      {transactions.map((item) => (
        <TransactionItem key={item.id} item={item} />
      ))}
    </section>
  );
};

export default History;
