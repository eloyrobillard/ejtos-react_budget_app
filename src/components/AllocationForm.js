import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllocationForm = () => {
  const { dispatch } = useContext(AppContext);

  const [department, setDepartment] = useState("");
  const [action, setAction] = useState("add");
  const [cost, setCost] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (action === 'add') {
      dispatch({ type: "ADD_EXPENSE", payload: { cost, name: department } })
    }
    else {
      dispatch({ type: "RED_EXPENSE", payload: { cost, name: department } });
    }
  }

  const handleDepartment = (e) => {
    e.preventDefault();

    setDepartment(e.target.value);
  }

  const handleAction = (e) => {
    e.preventDefault();

    if (action === 'add' || action === 'reduce') {
      setAction(e.target.value);
    }
  }

  const handleCost = (e) => {
    e.preventDefault();

    const value = Number(e.target.value);

    if (!isNaN(value) && value >= 0) {
      setCost(value);
    }
  }

  return (
    <form onSubmit={handleSubmit} >
      <h2>Change allocation</h2>
      <div className="flex justify-between w-[70vw]">
        <label className="hover:bg-gray-100 bg-gray-200 text-gray-800 p-1 border border-black rounded-sm">
          <span className="p-1">Department</span>
          <select id="department-select" onChange={handleDepartment} value={department}>
            <option value="">Choose...</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="Sales">Sales</option>
            <option value="Human Resource">Human Resource</option>
            <option value="IT">IT</option>
          </select>
        </label>
        <label className="hover:bg-gray-100 bg-gray-200 text-gray-800 p-1 border border-black rounded-sm">
        <span className="p-1">Action</span>
          <select id="allocation-select" onChange={handleAction} value={action}>
            <option value="add">Add</option>
            <option value="reduce">Reduce</option>
          </select>
        </label>
        <input type="number" placeholder="Enter cost..." onInput={handleCost} value={cost} className="hover:bg-gray-100 text-gray-800 border border-black rounded" />
        <button type="submit" className="px-2 py-1 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500" >Save</button>
      </div>
    </form>
  )
}

export default AllocationForm;
