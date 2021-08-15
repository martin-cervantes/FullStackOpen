import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Search from './Search'
import Countries from './Countries'
import Country from './Country'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ country, setCountry ] = useState(false)
  const [ index, setIndex ] = useState(0);
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    if (search) {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${search}`)
        .then(response => {
          setCountries(response.data)
        })
    }
  }, [search])

  const handleChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  const show = (index) => {
    setCountry(true)
    setIndex(index)
  }

  const hide = () => {
    setCountry(false)
  }

  if (country) {
    return (
      <div>
        <Country country={countries[index]} />

        <button onClick={() => hide()}>Back</button>

      </div>
    )
  }

  return (
    <div>
      <h1>Contries</h1>

      <Search
        search={search}
        handleChangeSearch={handleChangeSearch}
      />

      <Countries countries={countries} show={show} />

    </div>
  );
}

export default App;
