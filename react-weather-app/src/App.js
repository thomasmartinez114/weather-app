import React, { useState } from "react"
import "./App.css"
import Search from "./components/search/search"
import Forecast from "./components/forecast/forecast"
import CurrentWeather from "./components/current-weather/current-weather"
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api"

function App() {
  // weather hooks
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ") // split the long lat into one values in array

    // get current city's weather
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    )

    // get current city's forecast
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    )

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forecastResponse = await response[1].json()

        // set the useState hooks to their responses
        setCurrentWeather({ city: searchData.label, ...weatherResponse })
        setForecast({ city: searchData.label, ...forecastResponse })
      })
      .catch((err) => console.log(err))
  }

  // console.log(forecast)

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {/*if theres currentWeather data then show */}
      {forecast && <Forecast data={forecast} />}
    </div>
  )
}

export default App
