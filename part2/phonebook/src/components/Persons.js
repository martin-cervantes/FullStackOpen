import React from 'react'

const Persons = ({ persons, regex, handleDelete }) => (
  <ul>
    {
      persons
        .filter(({name}) => name.match(regex))
        .map((p, index) => (
          <li key={index}>
            {p.name} {p.number}
            <button onClick={() => handleDelete(p.id)}>Delete</button>
          </li>
        ))
    }
  </ul>
)

export default Persons
