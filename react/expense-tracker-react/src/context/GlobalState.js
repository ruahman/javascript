import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state

const initialState = {
  transactions: [
    { id: 1, text: "item 1", amount: 10 },
    { id: 3, text: "item 2", amount: 11 },
    { id: 5, text: "item 3", amount: -12 },
    { id: 7, text: "item 4", amount: 13 },
    { id: 9, text: "item 5", amount: 14 },
  ],
};

export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
