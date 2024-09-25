import React from "react";
import React, { useState } from "react";
import UniversalButton from "../universalButton/UniversalButton";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <UniversalButton title="search" type="submit" />
    </div>
  );
};

export default Search;
