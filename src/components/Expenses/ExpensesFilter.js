import React,{useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [enteredYear, setEnteredYear] = useState("");
  const yearChangeHandler = (event) => {
    setEnteredYear(event.target.value);
  };
  const filterYear = {
    year: enteredYear
  };
  console.log(filterYear);
  props.onChangedYear(filterYear);
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={yearChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
