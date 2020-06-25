import React from "react"

//Styling
import "./Form.scss"

const Form = props => {
  return (
    <form onSubmit={props.getForecast}>
      <input
        type="text"
        placeholder="Enter City"
        maxLength="50"
        className="TextInput"
        value={props.city}
        onChange={e => props.setCity(e.target.value)}
      />
      <label>
        <input
          type="radio"
          name="units"
          checked={props.unit === "imperial"}
          value="imperial"
          className="Radio"
          onChange={e => props.setUnit(e.target.value)}
        />
        Fahrenheit
      </label>
      <label>
        <input
          type="radio"
          name="units"
          className="Radio"
          checked={props.unit === "metric"}
          value="metric"
          onChange={e => props.setUnit(e.target.value)}
        />
        Celsius
      </label>
      <button className="Button" type="submit">
        Get Forecast
      </button>
    </form>
  )
}

export default Form
