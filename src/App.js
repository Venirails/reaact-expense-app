import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Printing Paper",
    amount: 94.12,
    date: new Date(2020, 11, 14),
  },
  { id: "e2",
   title: "New TV", 
   amount: 799.49,
    date: new Date(2020, 6, 12) 
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseValue) => {
    setExpense((prevExpense) => {
      return [expenseValue, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
