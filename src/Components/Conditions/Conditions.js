import React from "react"

//Styling
import "./Conditions.scss"

const Conditions = props => {
  return (
    <div className="Wrapper">
      {props.error && (
        <small className="Small">Please enter a valid city.</small>
      )}
      {props.loading && <div className="Loader"></div>}
      {props.res.cod === 200 ? (
        <div>
          <p>
            <strong>{props.res.name}</strong>
          </p>
          <p>
            It is currently {Math.round(props.res.main.temp)} degrees out with{" "}
            {props.res.weather[0].description}.
          </p>
        </div>
      ) : null}
    </div>
  )
}
export default Conditions
