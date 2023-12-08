import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

// Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import { AppProvider } from './context/AppContext';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';

const App = () => {
  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>Company&lsquo;s Budget Allocation</h1>
        <div className='row mt-3'>
          <div className='grid grid-cols-3 gap-x-5'>
            <Budget />
            <Remaining />
            <ExpenseTotal />
          </div>

          {
            /* Add ExpenseList component here */
            <ExpenseList />
          }

          {
            /* Add ExpenseItem component here */
          }

          {
            /* Add AllocationForm component here under */
            <AllocationForm />
          }

        </div>
      </div>
    </AppProvider>
  );
};
export default App;
