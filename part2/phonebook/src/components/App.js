import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
      const newPerson = {
        name: newName,
        number: newNumber,
      }

      axios
        .post('http://localhost:3001/persons', newPerson)
        .then(response => {
          setPersons([...persons, newPerson])
        })
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

      <Filter search={search} handleChangeSearch={handleChangeSearch} />

      <h2>Add new</h2>

      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
      />

      <h2>Numbers</h2>

      <Persons persons={persons} regex={regex} />
    </div>
  )
}

export default App
