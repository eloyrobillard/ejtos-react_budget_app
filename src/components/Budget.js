import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const app = useContext(AppContext);
  const [budget, setBudget] = useState(app.budget);
  const [currency, setCurrency] = useState(app.currency);

  /**
   * @param {Event} e
   */
  const changeCurrency = (e) => {
    e.preventDefault();

    setCurrency(e.currentTarget.value)
  }

  /**
   * @param {Event} e
   */
  const changeBudget = (e) => {
    e.preventDefault();

    const newBudget = parseInt(e.currentTarget.value);

    if (!isNaN(newBudget) && newBudget >= 0) {
      setBudget(newBudget);
    }
  }

  return (
    <div className='bg-gray-300 p-[0.5rem] rounded-sm flex justify-between'>
      <label>Budget: {currency}</label>
      <input type='number' name='budget' placeholder='Please enter your budget' value={budget} onChange={changeBudget} className='hover:bg-gray-100 text-gray-800 border border-black rounded'/>
    </div>
  )
}

export default Budget;