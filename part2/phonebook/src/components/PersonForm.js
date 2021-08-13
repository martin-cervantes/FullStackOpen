import React from 'react'

const PersonForm = ({ addName, newName, newNumber, handleChangeName, handleChangeNumber }) => (
  <form onSubmit={addName}>
    <div>
      <label htmlFor="name">Name:</label>

      <input
        id="name"
        name="name"
        value={newName}
        onChange={handleChangeName}
      />
    </div>

    <div>
      <label htmlFor="number">Number:</label>

      <input
        id="number"
        name="number"
        value={newNumber}
        onChange={handleChangeNumber}
      />
    </div>

    <div>
      <button type="submit">Add New</button>
    </div>
  </form>
)

export default PersonForm
