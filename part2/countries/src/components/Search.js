import React from 'react'

const Search = ({ search, handleChangeSearch }) => (
  <div>
    <label htmlFor="search">Find contries:</label>

    <input
      id="search"
      name="search"
      value={search}
      onChange={handleChangeSearch}
    />
  </div>
)

export default Search
