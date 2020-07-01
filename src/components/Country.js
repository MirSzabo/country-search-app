import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Weather";

const Country = ({ country }) => {
  const { name, capital, population, languages, flag } = country;

  const [weatherData, setWeatherData] = useState();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => setReload(true), 1000 * 3);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    let didCancel = false;

    const api = "https://api.openweathermap.org/data/2.5/weather?q=";
    const cityName = capital.toLowerCase();
    const key = process.env.REACT_APP_API_KEY;
    const units = "&units=metric";
    const url = api + cityName + key + units;
    //console.log(url);

      axios.get(url).then(response => {
        setWeatherData(response.data);
        console.log(response.data);
    }, [reload]);

    return () => {
      didCancel = true;
    };
  });

  const languageList = languages.map(({ name }) => <li key={name}>{name}</li>);

  return (
    <div>
      <h1>{name}</h1>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>Languages:</p>
      <ul>{languageList}</ul>
      <img src={flag} alt="Flag of the country" width="200" height="200" />
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
};
export default Country;