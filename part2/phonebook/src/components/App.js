import React, { useState, useEffect } from 'react'
import personsService from '../services/persons'

import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import Notification from './Notification'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')
  const [ message, setMessage ] = useState(null)
  const [ alert, setAlert ] = useState(true)

  useEffect(() => {
    personsService
      .getAll()
      .then(returnedPersons => {
        setPersons(returnedPersons)
      })
      .catch(error => console.log(error))
  }, [])

  const includesName = () => {
    for (let i = 0; i < persons.length; i += 1) {
      if (persons[i].name === newName) {
        const result = window.confirm(`${persons[i].name} is already added to phonebook, Replace the old number with the new one ??`)

        if (result) {
          const changedNote = {...persons[i], number: newNumber}
          const id = changedNote.id

          personsService
            .update(id, changedNote)
            .then(response => {
              setPersons(persons.map(p => p.id !== id ? p : response.data))

              handlerMessage(false, 'Person successfully updated :)')
            })
            .catch(error => console.log(error))
        }

        return true
      }
    }

    return false
  }

  const addName = (event) => {
    event.preventDefault()

    if (!includesName()) {
      const newPerson = {
        name: newName,
        number: newNumber,
      }

      personsService
        .create(newPerson)
        .then(returnedPersons => {
          setPersons([...persons, newPerson])

          handlerMessage(false , 'Person successfully created :)')
        })
        .catch(error => handlerMessage(true, 'Person has already been deleted :('))

      setNewName('')
      setNewNumber('')
    }
  }

  const deleteName = (id) => {
    const result = window.confirm('Are you sure you want to delete this item?')

    if (result) {
      personsService
      .drop(id)
      .then(returnedPersons => {
        setPersons(persons.filter(p => p.id !== id))

        handlerMessage(false, 'Person successfully deleted :)')
      })
      .catch(error => handlerMessage(true, 'Person has already been deleted :('))
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

  const handlerMessage = (alert, message) => {
    setAlert(alert)
    setMessage(message)
    setTimeout(() => { setMessage(null) }, 5000)
  }

  let regex = new RegExp(`${search}`, 'g');

  return (
    <div>
      <Notification alert={alert} message={message} />

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
        deleteName={deleteName}
      />
    </div>
  )
}

export default App
