import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch, currency, expenses } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    const value = parseInt(event.target.value);
    setNewBudget(value);
  };

  const saveBudget = () => {
    const totalExpenses = expenses.reduce(
      (total, item) => total + item.cost,
      0
    );

    if (newBudget > 20000) {
      alert("The budget cannot exceed 20000");
      return;
    }

    if (newBudget < totalExpenses) {
      alert("The budget cannot be less than the spending");
      return;
    }

    dispatch({
      type: "SET_BUDGET",
      payload: newBudget,
    });
  };

  const handleCurrencyChange = (event) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: event.target.value,
    });
  };

  return (
    <div className="alert alert-secondary">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">{currency}</span>
        </div>
        <input
          type="number"
          className="form-control"
          value={newBudget}
          onChange={handleBudgetChange}
        />
        {/*  <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={saveBudget}
          >
            Save
          </button>
        </div> */}
      </div>
      {/*   <div className="mt-2">
        <div className="dropdown">
          <select
            value={currency}
            onChange={handleCurrencyChange}
            className="form-control custom-select"
            style={{ backgroundColor: "lightgreen" }}
          >
            <option className="currency-option" value="$">
              Dollar ($)
            </option>
            <option className="currency-option" value="£">
              Pound (£)
            </option>
            <option className="currency-option" value="€">
              Euro (€)
            </option>
            <option className="currency-option" value="₹">
              Rupee (₹)
            </option>
          </select>
        </div>
      </div> */}
    </div>
  );
};

export default Budget;
