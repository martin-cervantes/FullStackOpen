import React from 'react'

const Persons = ({ persons, regex }) => (
  <ul>
    { persons.filter(({name}) => name.match(regex)).map((p, index)=> <li key={index}>{p.name} {p.number}</li>) }
  </ul>
)

export default Persons
