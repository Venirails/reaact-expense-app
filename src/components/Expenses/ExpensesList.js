import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = props => {

    if(props.items.length === 0){
      return <h2 class="expenses-list__fallback">No Expense Found</h2>
    }
   return <ul class="expenses-list">
   {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
   </ul>
};


export default ExpensesList;