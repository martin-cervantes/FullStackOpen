import React from 'react'

const Country = ({ country }) => (
  <div>
    <img src={country.flag} width="200rem" alt="flag" />
    <p>Name: {country.name}</p>
    <p>Capital: {country.capital}</p>
    <p>Language: {country.languages[0].name}</p>
    <p>Population: {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
    <p>Currency: {country.currencies[0].name}</p>
  </div>
)

export default Country
