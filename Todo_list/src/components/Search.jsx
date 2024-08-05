import React, { useState } from 'react';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearchChange}
      placeholder="Search tasks"
      className="p-2 border rounded"
    />
  );
}

export default Search;
