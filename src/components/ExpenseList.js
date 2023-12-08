import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <div>
      <h2>Allocation</h2>
      <div className="grid grid-cols-5 border-gray-300 border-b-2 font-bold">
        <span>Department</span>
        <span>Allocated Budget</span>
        <span>Increase by 10</span>
        <span>Decrease by 10</span>
        <span>Delete</span>
      </div>
      <div className="allocation-table__table">
        {expenses.map(({ id, cost, name }) => (<ExpenseItem key={id} cost={cost} name={name} />))}
      </div>
    </div>
  )
}

export default ExpenseList;