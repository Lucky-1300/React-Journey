import React from "react";
import useFetchData from "../hooks/useFetchData.jsx";
import FilteredList from "./FilteredList.jsx";

const UserList = () => {
  const { data: users, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p className="loading">⏳ Loading users...</p>;
  if (error) return <p className="error">❌ Error: {error}</p>;

  const userNames = users.map((user) => user.name);

  return (
    <div className="user-list">
      <h2>👥 Users</h2>
      <FilteredList items={userNames} />
    </div>
  );
};

export default UserList;
