import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
  const { budget, currency, remaining } = useContext(AppContext);

  return (
    <div className='bg-blue-200 p-[0.5rem] rounded-sm text-blue-700'>
      Spent so far: {currency} {budget - remaining}
    </div>
  )
}

export default ExpenseTotal;