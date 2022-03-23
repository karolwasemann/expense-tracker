import "./Transactions.scss";

const Transactions = () => {
  return (
    <section className="transactions">
      <h3>Add new transaction</h3>
      <form action="#">
        <label htmlFor="text">Text: </label>
        <input type="text" name="text" />

        <label htmlFor="amount">Amount: </label>
        <input type="number" name="amount" />
        <button type="submit">Add transaction</button>
      </form>
    </section>
  );
};

export default Transactions;
