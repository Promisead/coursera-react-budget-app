import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  /* const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10, // Change here to increment by 10
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10, // Change here to decrement by 10
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>£{props.cost}</td>
            <td>
                <button onClick={event => increaseAllocation(props.name)} className="btn btn-success rounded-circle mr-2">
                    <FontAwesomeIcon icon={faPlus} className="text-white" />
                </button>
                <button onClick={event => decreaseAllocation(props.name)} className="btn btn-danger rounded-circle">
                    <FontAwesomeIcon icon={faMinus} className="text-white" />
                </button>
            </td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
 */

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>£{props.cost}</td>
      <td>
        <button
          className="btn btn-success rounded-circle mr-2"
          onClick={() => increaseAllocation(props.name)}
        >
          <i className="fas fa-plus text-white"></i>
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger rounded-circle"
          onClick={() => props.decreaseAllocation(props.name)}
        >
          <i className="fas fa-minus text-white"></i>
        </button>
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </td>
    </tr>
  );
};

export default ExpenseItem;
