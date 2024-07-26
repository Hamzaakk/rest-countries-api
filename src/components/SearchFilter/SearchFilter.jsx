import React from 'react';
import './searchFilter.css';

const SearchFilter = ({ searchTerm, setSearchTerm, region, setRegion }) => {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="region-select"
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SearchFilter;