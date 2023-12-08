import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const { budget, currency, expenses } = useContext(AppContext);

  return (
    <div className='bg-green-200 p-[0.5rem] rounded-sm text-green-700'>
      Remaining: {currency} {budget - expenses.reduce(
        (previousExp, currentExp) =>
          previousExp + currentExp.cost
        , 0
      )}
    </div>
  )
}

export default Remaining;