import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  // console.log(transactions);

  let income = 0;
  let expense = 0;
  // transactions.map((transaction) => (
  //   if (transaction.amount < 0) {
  //       expense = expense + transaction.amount
  // }))

  // traverse using for loop
  // for(let i=0; i<transactions.length; i++){
  //   console.log(transactions[i])
  // }

  // traverse using foreach
  transactions.forEach((transaction) => {
    // console.log(transaction.amount);
    if (transaction.amount < 0) {
      expense = expense + transaction.amount;
    } else {
      income = income + transaction.amount;
    }
  });
  // console.log("expenses: ", expense)
  // console.log("income: ",income)


  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(expense).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
