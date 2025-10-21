import React from "react";
import FormManager from "./formReducer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="title">🧾 User Information Form</h1>
      
      <FormManager />
    </div>
  );
}

export default App;
