import "./Transactions.scss";
import { useContext, useState } from "react";
import { TransactionsContext } from "../context/TransactionsContext";
import { v4 as uuid } from "uuid";

const Transactions = () => {
  const [transactions, setTransactions] = useContext(TransactionsContext);
  const [transaction, setTransaction] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setTransactions([...transactions, transaction]);
    e.target.reset();
  };
  return (
    <section className="transactions">
      <h5>Add new transaction</h5>
      <form action="#" onSubmit={submitHandler}>
        <div className="radio">
          <label htmlFor="income">
            Income
            <input
              required
              id="income"
              type="radio"
              value="income"
              name="radio"
              onChange={(e) => setTransaction({ type: e.target.value })}
            />
          </label>

          <label htmlFor="expense">
            Expense
            <input
              required
              id="expense"
              type="radio"
              value="expense"
              name="radio"
              onChange={(e) => setTransaction({ type: e.target.value })}
            />
          </label>
        </div>

        <label htmlFor="text">Text: </label>
        <input
          required
          type="text"
          name="text"
          onChange={(e) =>
            setTransaction({ ...transaction, name: e.target.value })
          }
        />

        <label htmlFor="amount">Amount: </label>
        <input
          required
          type="number"
          step="0.01"
          name="amount"
          onChange={(e) =>
            setTransaction({
              ...transaction,
              amount: e.target.value,
              id: uuid(),
            })
          }
        />
        <button type="submit">Add transaction</button>
      </form>
    </section>
  );
};

export default Transactions;
