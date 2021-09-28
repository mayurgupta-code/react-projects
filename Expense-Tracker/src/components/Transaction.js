import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  // console.log(deleteTransaction);
  // console.log(transaction);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={sign === "-" ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  );
}

export default Transaction;
