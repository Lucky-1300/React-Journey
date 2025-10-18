import React, { useReducer } from "react";
import "./App.css";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <div className="counter-display">{state.count}</div>
      <div className="counter-buttons">
        <button className="btn" onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button className="btn" onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button className="btn" onClick={() => dispatch({ type: "increment" })}>+</button>
      </div>
    </div>
  );
}

export default Counter;
