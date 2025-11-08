import React, { useState, useMemo } from "react";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");

  // Sample data
  const users = [
    "Lucky Kumari",
    "Aarav Sharma",
    "Priya Mehta",
    "Rohan Verma",
    "Ishita Patel",
    "Rahul Singh",
    "Sneha Kapoor",
    "Arjun Yadav",
    "Kiran Das",
    "Neha Bansal"
  ];

  // 🔥 Optimize filtering with useMemo
  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]); // Only runs when users or search changes

  return (
    <div className="app">
      <h1>⚡ useMemo Optimization Demo</h1>
      <input
        type="text"
        className="search"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
