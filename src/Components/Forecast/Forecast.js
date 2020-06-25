import React, { useState } from "react"
import Conditions from "../Conditions/Conditions"
import Form from "../Form/Form"

//Styling
import "./Forecast.scss"

const Forecast = () => {
  //Creating responseObj variable to change variable using function useState
  let [res, setRes] = useState({})

  //To make URL dynamic
  let [city, setCity] = useState("")
  let [unit, setUnit] = useState("imperial")

  //Error handling (ie: API doesn't return status code 200)
  let [error, setError] = useState(false)
  let [loading, setLoading] = useState(false)

  //To make certain chars valid for URL (Uniform Resource Identifier)
  const uriEncodedCity = encodeURIComponent(city)

  function getForecast(event) {
    //We want to prevent refreshing to sustain the state
    event.preventDefault()

    //If user enters nothing for city
    if (city.length === 0) {
      return setError(true)
    }

    // Clear state in preparation for new data
    setError(false)
    setRes({})
    setLoading(true)

    //Fetch from RapidAPI using GET to return a JSON object
    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_OPENWEATHER_API_KEY,
        },
      }
    )
      //Then convert response to JSON format
      .then(response => response.json())
      .then(response => {
        //If the API doesn't give us code '200'
        if (response.cod !== 200) {
          throw new Error()
        }
        //Assign responseObj to the JSON response
        setRes(response)
        setLoading(false)
      })
      .catch(err => {
        setError(true)
        setLoading(false)
        console.log(err.message)
      })
  }
  return (
    <div>
      <img src={require('../../Assets/logo.png')} alt="Logo" />
      <h3>Find Current Weather Conditions</h3>
      <Conditions
        res={res}
        error={error} //new
        loading={loading} //new
      />{" "}
      <Form getForecast={getForecast} setCity={setCity} setUnit={setUnit} city={city} unit={unit}/>
    </div>
  )
}
export default Forecast
