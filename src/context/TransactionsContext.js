import { useState, createContext } from "react";
export const TransactionsContext = createContext();

export const TransactionsContextProvider = (props) => {
  const [transactionsContext, setTransactionsContext] = useState([]);

  return (
    <TransactionsContext.Provider
      value={[transactionsContext, setTransactionsContext]}
    >
      {props.children}
    </TransactionsContext.Provider>
  );
};
