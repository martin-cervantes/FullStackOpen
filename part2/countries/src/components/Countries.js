import React from 'react'

import Country from './Country'

const Countries = ({ countries }) => {
  if (!countries.length) {
    return <div>
            Specify the filter.
          </div>
  } else if (countries.length > 10) {
    return <div>
             Too many matches, specify another filter.
           </div>
  } else {
    return <div>
             { countries.map((c, index) => <Country key={index} country={c} />) }
           </div>
  }
}

export default Countries
