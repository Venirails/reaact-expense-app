import React from 'react';
import { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const NewExpense = (props) => {
  const [isToggle,setIsToggle] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData =  {
      ...enteredExpenseData,
       id: Math.random().toString()
      };
      props.onAddExpense(expenseData);
    };
  const startToggleHandler = () =>{
    setIsToggle(true);
  };
  const stopToggleHandler = () =>{
    setIsToggle(false);
  };
return <div className='new-expense'>
    {!isToggle && <button onClick={startToggleHandler}>Add New Expense</button>}
    {isToggle && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopToggleHandler}/>}
</div>
};

export default NewExpense;