import React, { useState, useEffect } from 'react'
import personsService from '../services/persons'

import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(returnedPersons => {
        setPersons(returnedPersons)
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

      personsService
        .create(newPerson)
        .then(returnedPersons => {
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

  const handleDelete = (id) => {
    const result = window.confirm('Are you sure you want to delete this item?')

    if (result) {
      personsService
        .drop(id)
        .then(returnedPersons => {
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  let regex = new RegExp(`${search}`, 'g');

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        search={search}
        handleChangeSearch={handleChangeSearch}
      />

      <h2>Add new</h2>

      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
      />

      <h2>Numbers</h2>

      <Persons
        persons={persons}
        regex={regex}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App
