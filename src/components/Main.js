import Header from "./Header";
import History from "./History";
import Transactions from "./Transactions";

const Main = (props) => {
  return (
    <>
      <Header />
      <History getTransactions={props.getTransactions} />
      <Transactions
        getTransactions={props.getTransactions}
        transactionsCollectionRef={props.transactionsCollectionRef}
      />
    </>
  );
};

export default Main;
