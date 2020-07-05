import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Weather";
import styled from "styled-components";

const StyledOutput = styled.div`
  display: flex;
  flex-shrink: 1;
`;
const StyledCountry = styled.div`
  line-height: 2;
  margin: auto;
  width: 50%;
  padding: 10px;
  border: 1px solid black;
  background: white;
  box-shadow: 10px 10px 5px grey;
  border-radius: 25px;
`;
const List = styled.ul`
  list-style-type: none;
`;

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

    axios.get(url).then(
      (response) => {
        setWeatherData(response.data);
        console.log(response.data);
      },
      [reload]
    );

    return () => {
      didCancel = true;
    };
  });

  const languageList = languages.map(({ name }) => <li key={name}>{name}</li>);

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
  return (
    <StyledOutput>
      <StyledCountry>
        <h1>{name}</h1>
        <p><b>Capital:</b> {capital}</p>
        <p><b>Population:</b> {formatNumber(population)}</p>
        <p><b>Languages: </b></p>
        <List>
          {" "}
          <ul>{languageList}</ul>
        </List>
        <img src={flag} alt="Flag of the country" width="200" height="200" />
      </StyledCountry>
      {weatherData && <Weather data={weatherData} />}
    </StyledOutput>
  );
};
export default Country;
