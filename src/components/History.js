import "./History.scss";
import { useContext, useState } from "react";
import { TransactionsContext } from "../context/TransactionsContext";
import TransactionItem from "./TransactionItem";
import { db } from "./firebase-config";
import { deleteDoc, doc } from "firebase/firestore";

const History = (props) => {
  const [transactions, setTransactions] = useContext(TransactionsContext);
  console.log(transactions);

  const deleteTransaction = async (id) => {
    console.log("ID:", id);
    const transactionDoc = doc(db, "transactions", id);
    await deleteDoc(transactionDoc);
    props.getTransactions();
  };
  return (
    <section className="history-container">
      <h5>History</h5>
      {transactions.map((item) => (
        <TransactionItem
          key={item.id}
          item={item}
          deleteTransaction={deleteTransaction}
        />
      ))}
    </section>
  );
};

export default History;
