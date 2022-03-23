const Header = () => {
  return (
    <header className="heading">
      <h1>Expense Tracker</h1>
      <h2>Your Balance: </h2>
      <section className="balance">
        <div className="income">
          <h5>Income</h5>
          <p>1000€</p>
        </div>
        <div className="expense">
          <h5>Expense</h5>
          <p>100€</p>
        </div>
      </section>
    </header>
  );
};

export default Header;
