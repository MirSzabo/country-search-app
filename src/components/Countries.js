import React from "react";
import styled from "styled-components";

const StyledList = styled.div`
  font: 1em sans-serif;
  line-height: 2;
  margin: auto;
  width: 50%;
  padding: 10px;
`;
const List = styled.ul`
  list-style-type: none;
`;

const BtnContainer = styled.span`
  margin-left: 1rem;
`;

const Countries = ({ countries, handleClick }) => (
  <StyledList>
    <List>
      <ul>
        {countries.map(({ name }) => (
          <li key={name}>
            {name}
            <BtnContainer>
              <button id={name} onClick={handleClick}>
                Show
              </button>
            </BtnContainer>
          </li>
        ))}
      </ul>
    </List>
  </StyledList>
);

export default Countries;
