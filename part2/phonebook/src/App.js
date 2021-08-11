import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    setPersons([...persons, { name: event.target.name.value }])
    setNewName('')
  }

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addName}>
        <div>
          <label htmlFor="name">Name:</label>

          <input
            id="name"
            name="name"
            value={newName}
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="submit">Add New</button>
        </div>
      </form>

      <h2>Numbers</h2>

      <ul>
        { persons.map((p, index)=> <li key={index}>{p.name}</li>) }
      </ul>
    </div>
  )
}

export default App
