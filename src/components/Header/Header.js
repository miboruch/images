import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 30vh;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Hello world</h1>
    </StyledHeader>
  );
};

export default Header;
