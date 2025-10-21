import React, { useReducer } from "react";

const initialState = { name: "", email: "", age: "" };

function reducer(state, action) {
  switch (action.type) {
    case "update_field":
      return { ...state, [action.field]: action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default function FormManager() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "update_field",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted!\n\nName: ${state.name}\nEmail: ${state.email}\nAge: ${state.age}`);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <label>Age</label>
        <input
          name="age"
          type="number"
          value={state.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />
      </div>

      <div className="button-group">
        <button type="submit" className="submit-btn">
          Submit
        </button>
        <button
          type="button"
          className="reset-btn"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>

      <div className="preview">
        <h3>Live Preview</h3>
        <p><strong>Name:</strong> {state.name || "—"}</p>
        <p><strong>Email:</strong> {state.email || "—"}</p>
        <p><strong>Age:</strong> {state.age || "—"}</p>
      </div>
    </form>
  );
}
