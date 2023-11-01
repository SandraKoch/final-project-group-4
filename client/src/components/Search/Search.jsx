import React, { useState } from 'react';
import styles from './Search.module.css';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className={styles['search-container']}>
    
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles['search-Input']}
        />
        <button onClick={handleSearch} className={styles['search-button']}>
          Search
        </button>
      
    </div>
  );
};

export default Search;
