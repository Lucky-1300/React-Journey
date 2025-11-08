import React, { useMemo, useState } from "react";

const FilteredList = ({ items }) => {
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    console.log("🔍 Filtering...");
    return items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

  return (
    <div className="filtered-list">
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>✅ {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
