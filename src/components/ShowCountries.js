import React, { useState, useEffect } from "react";
import Countries from "./Countries";
import Country from "./Country";
import styled from "styled-components";

const StyledOutput = styled.div`
  font: 1em sans-serif;
  font-size: 14px;
  margin: auto;
  width: 50%;
  padding: 10px;
`;

const ShowCountries = ({ countriesInitial }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countriesInitial);
  }, [countriesInitial]);

  const singleMatch = countries.length === 1;
  const manyMatches = countries.length > 10;
  const noMatch = countries.length === 0;

  const handleCLick = (event) =>
    setCountries([
      countries.find((country) => country.name === event.target.id),
    ]);

  return (
    <StyledOutput>
      {noMatch ? (
      ''
      ) : manyMatches ? (
        <p>Too many matches</p>
      ) : singleMatch ? (
        <Country country={countries[0]} />
      ): (
        <Countries countries={countries} handleClick={handleCLick} />
      )}
    </StyledOutput>
  );
};

export default ShowCountries;
