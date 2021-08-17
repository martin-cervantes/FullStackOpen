import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({ country, forescast }) => {
  const [ forecast, setForecast ] = useState({})
  const [ show, setShow ] = useState(false)

  useEffect(() => {
    if (!show) {
      const api_key = process.env.REACT_APP_API_KEY

      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&APPID=${api_key}`)
        .then(response => {
          setForecast(response.data)
          setShow(true)
        })
    }
  }, [forecast])

  if (show) {
    return (
      <div>
        <h1>{country.name}</h1>
        <img src={country.flag} width="200rem" alt="flag" />
        <p>Capital: {country.capital}</p>
        <p>Language: {country.languages[0].name}</p>
        <p>Population: {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <p>Currency: {country.currencies[0].name}</p>

        <img src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} alt="forecast" />
        <p>Forecast: {forecast.weather[0].main}</p>
        <p>Temperature: {forecast.main.temp}&deg;</p>
        <p>Wind: {forecast.wind.speed} m/s</p>
      </div>
    )
  }

  return (
    <div>
      <h1>{country.name}</h1>
      <img src={country.flag} width="200rem" alt="flag" />
      <p>Capital: {country.capital}</p>
      <p>Language: {country.languages[0].name}</p>
      <p>Population: {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      <p>Currency: {country.currencies[0].name}</p>
    </div>
  )
}

export default Country
