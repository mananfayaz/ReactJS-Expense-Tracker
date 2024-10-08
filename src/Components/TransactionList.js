import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transact from './Transact';
const Transaction = () => {

  const {transactions}= useContext(GlobalContext);

  return (
    <>
        <h3>History</h3>
        <ul className="list">
          {transactions.map(transaction=>(<Transact key={transaction.id} transaction={transaction}/>))}
      </ul>
    </>
  )
}

export default Transaction
