import Header from "./Header";
import History from "./History";
import Transactions from "./Transactions";
import LogContainer from "./LogContainer";
const Main = (props) => {
  return (
    <>
      <LogContainer />
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
