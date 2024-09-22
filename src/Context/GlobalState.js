import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: []
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Action to add a transaction
    const addTransaction = (transaction) => {
      console.log('Dispatching ADD_TRANSACTION', transaction);
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
        console.log('Current state:', state)
    };

    // Action to delete a transaction
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    };

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
};
