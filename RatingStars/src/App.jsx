import React from "react";
import { RatingStar } from "./RatingStar";
import "./App.css";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Rate this product:</h2>
      <RatingStar starCount={5} />
    </div>
  );
}

export default App;
