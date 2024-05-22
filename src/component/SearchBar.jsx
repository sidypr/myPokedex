import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${searchTerm}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      onSearch(data);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter Pokemon ID"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
