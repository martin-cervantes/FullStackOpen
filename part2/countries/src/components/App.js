import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Search from './Search'
import Countries from './Countries'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    if (search) {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${search}`)
        .then(response => {
          setCountries(response.data)
        })
    } 
  }, [search, countries])

  const handleChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h1>Contries</h1>

      <Search
        search={search}
        handleChangeSearch={handleChangeSearch}
      />

      <Countries countries={countries} />

    </div>
  );
}

export default App;
