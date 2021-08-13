import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123-45-67' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

  const includesName = () => {
    for (let i = 0; i < persons.length; i += 1) {
      if (persons[i].name === newName) return true
    }

    return false
  }

  const addName = (event) => {
    event.preventDefault()

    if (includesName()) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons([...persons, { name: event.target.name.value, number: event.target.number.value }])
      setNewName('')
      setNewNumber('')
    }
  }

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  let regex = new RegExp(`${search}`, 'g');

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        <label htmlFor="search">Filter shown with:</label>

        <input
          id="search"
          name="search"
          value={search}
          onChange={handleChangeSearch}
        />
      </div>

      <h2>Add new</h2>

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

      <h2>Numbers</h2>

      <ul>
        { persons.filter(({name}) => name.match(regex)).map((p, index)=> <li key={index}>{p.name} {p.number}</li>) }
      </ul>
    </div>
  )
}

export default App
