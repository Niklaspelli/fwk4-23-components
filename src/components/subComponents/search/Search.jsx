import React, { useState } from "react";
import styles from "./Search.module.css";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div>
      <input className={styles.inputsearch}
        type="text"
        placeholder="Your search here..."
        value={query}
        onChange={handleInputChange}
      />
      <button className={styles.buttonsearch} onClick={() => onSearch(query)}>Search</button>
    </div>
  );
};

export default Search;
