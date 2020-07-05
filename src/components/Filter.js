import React from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  font-weight: bold;
  font-size: 2rem;
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
