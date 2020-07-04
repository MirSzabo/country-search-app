import React from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  font: 1em sans-serif;
  font-weight: bold;
  margin: auto;
  width: 50%;
  padding: 10px;
`;

const Filter = ({ value, filterHandle }) => (
  <StyledInput>
    Find country: <input value={value} onChange={filterHandle} />
  </StyledInput>
);

export default Filter;
