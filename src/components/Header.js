import "./Header.scss";
import { useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext";
const Header = () => {
  const [transactions, setTransactions] = useContext(TransactionsContext);

  const income = transactions.reduce((acc, currentItem) => {
    if (currentItem.type === "income") {
      acc += parseFloat(currentItem.amount);
    }
    return acc;
  }, 0);

  const expense = transactions.reduce((acc, currentItem) => {
    if (currentItem.type === "expense") {
      acc += parseFloat(currentItem.amount);
    }
    return acc;
  }, 0);

  const balance = (income - expense).toFixed(2);
  return (
    <header className="heading">
      <h1>Expense Tracker</h1>
      <h2>
        Your Balance:{" "}
        <strong className={balance > 0 ? "green" : "red"}>{balance}</strong>
      </h2>
      <section className="balance">
        <div className="income">
          <h5>Income</h5>
          <p>{income}</p>
        </div>
        <div className="expense">
          <h5>Expense</h5>
          <p>{expense}</p>
        </div>
      </section>
    </header>
  );
};

export default Header;
