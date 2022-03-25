import "./History.scss";
import { useContext, useState } from "react";
import { TransactionsContext } from "../context/TransactionsContext";
import TransactionItem from "./TransactionItem";
import { db } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

const History = (props) => {
  const { currentUser } = useAuth();
  const [transactions, setTransactions] = useContext(TransactionsContext);

  const deleteTransaction = async (id) => {
    console.log("ID:", id);
    const transactionDoc = doc(
      db,
      `${currentUser === null ? null : currentUser.email}`,
      id
    );
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
