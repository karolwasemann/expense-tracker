import { useState, createContext } from "react";
export const BalanceContext = createContext();

export const CommentsContextProvider = (props) => {
  const [balanceContext, setBalanceContext] = useState([]);

  return (
    <BalanceContext.Provider value={[balanceContext, setBalanceContext]}>
      {props.children}
    </BalanceContext.Provider>
  );
};
