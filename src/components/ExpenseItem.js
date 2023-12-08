import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseItem = ({ cost, name }) => {
  const { currency, dispatch } = useContext(AppContext);

  return (
    <div className="grid grid-cols-5 justify-items-start border-gray-300 border-b-2">
      <span>{name}</span>
      <span>{currency} {cost}</span>
      <button onClick={() => dispatch({ type: 'ADD_EXPENSE', payload: { cost: 10, name } })} className="hover:bg-gray-100 text-gray-800 font-semibold px-1 border border-black rounded">+10</button>
      <button onClick={() => dispatch({ type: 'RED_EXPENSE', payload: { cost: 10, name } })} className="hover:bg-gray-100 text-gray-800 font-semibold px-1 border border-black rounded">-10</button>
      <button onClick={() => dispatch({ type: 'DELETE_EXPENSE', payload: name })} className="hover:bg-gray-100 text-gray-800 font-semibold px-1 border border-black rounded">❌</button>
    </div>
  )
}

export default ExpenseItem;