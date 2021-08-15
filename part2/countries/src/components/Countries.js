import React from 'react'

const Countries = ({ countries, show }) => {
  if (!countries.length) {
    return <div>
            Specify the filter.
          </div>
  } else if (countries.length > 10) {
    return <div>
             Too many matches, specify another filter.
           </div>
  } else {
    return <ul>
             { countries.map((c, index) => <li key={index}>{c.name} <button onClick={() => show(index)}>Show</button></li>) }
           </ul>
  }
}

export default Countries
