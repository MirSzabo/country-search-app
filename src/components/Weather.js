import React from "react";
import styled from "styled-components";

const StyledWeather = styled.div`
  background: rgba(0, 0, 0, 0.25);
  box-shadow: 1px 1px 5px grey;
  border-radius: 10px;
  line-height: 2;
  margin: 2rem;
  width: 50%;
  padding: 50px;
`;

const Weather = ({ data }) => {
  const {
    name,
    sys: { sunrise, sunset },
    main: { temp, humidity, feels_like },
    wind: { speed },
  } = data;

  const weatherIcon =
    "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };
  const dateSunrise = formatTime(new Date(sunrise * 1000));
  const dateSunset = formatTime(new Date(sunset * 1000));

  return (
    <StyledWeather>
      <h2>Weather in {name}</h2>
      <span>
        <b>Temperature: </b>
        {temp} <span>&#8451;</span>
        <div>
          <b>Feels like: </b>
          {feels_like} <span>&#8451;</span>
        </div>
      </span>
      <div>
        <img src={weatherIcon} alt="Weather icons" width="100" height="100" />
      </div>
      <div>
        <b>Wind: </b>
        {speed} kph
      </div>
      <div>
        <b>Humidity: </b>
        {humidity} %
      </div>
      <div>
        <b>Sunrise: </b>
        {dateSunrise}
      </div>
      <div>
        <b>Sunset: </b>
        {dateSunset}
      </div>
    </StyledWeather>
  );
};

export default Weather;
