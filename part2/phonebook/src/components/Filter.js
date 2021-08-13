import React from 'react'

const Filter = ({ search, handleChangeSearch }) => (
  <div>
    <label htmlFor="search">Filter shown with:</label>

    <input
      id="search"
      name="search"
      value={search}
      onChange={handleChangeSearch}
    />
  </div>
)

export default Filter
