import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  // console.log(transactions);
  let netBalance = 0;
  transactions.map(
    (transaction) => (netBalance = netBalance + transaction.amount)
  );
  console.log("Net Balance:", netBalance)
  const sign = netBalance < 0 ? '-' : '+'
  return (
    <>
      <h4>Your Balance</h4>
      <h1>{sign}${Math.abs(netBalance).toFixed(2)}</h1>
    </>
  );
}

export default Balance;
