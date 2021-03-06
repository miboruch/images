import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import MenuContext from '../../context/MenuContext';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  left: 0;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  transition: all 1s ease;
  overflow-x: hidden;
  z-index: 700;
`;

const StyledDiv = styled.div`
  width: 200px;
  height: 20vh;
  display: flex;
  position: relative;
  top: -20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  color: white;
  text-align: center;
  letter-spacing: 3px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};

  :focus {
    outline: none;
  }

  ::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    transform: skew(1deg, 1deg);
    background: linear-gradient(315deg, #ff0057, #e64a19);
    z-index: -1;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transition: all 1s 0.5s ease;
  }

  :hover::before {
    transform: skew(-1deg, -1deg);
    background: linear-gradient(315deg, #e64a19, #ff0057);
    transition: all 1.2s ease;
  }
`;

const StyledForm = styled.form`
  position: absolute;
  top: 50%;
  width: 70%;
  margin: auto;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isSearchOpen }) => (isSearchOpen ? 1 : 0)};
  visibility: ${({ isSearchOpen }) => (isSearchOpen ? 'visible' : 'hidden')};
  transition: all 1s ease;

  ${({ theme }) => theme.mq.tablet} {
    width: 40%;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  background: #000;
  border: none;
  position: relative;
  color: #fff;
  transition: all 0.5s ease;
  border-bottom: 1px solid #111;
  letter-spacing: 3px;

  :focus {
    outline: none;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    transition: all 0.5s ease;
  }

  ::placeholder {
    font-family: 'Raleway', sans-serif;
    letter-spacing: 3px;
    color: lightgrey;
    text-align: center;
  }
`;

const StyledParagraph = styled.p`
  font-size: 16px;
  letter-spacing: 2px;
  text-align: center;
  cursor: pointer;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  background: black;
  border: none;
  color: #fff;
  letter-spacing: 3px;
  font-family: ${({ theme }) => theme.font.family.raleway};
  transition: color 0.5s ease;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transform: skew(-1deg, -1deg);
    background: linear-gradient(315deg, #e64a19, #ff0057);
    z-index: -1;
    transition: all 2s ease;
  }

  :hover::before {
    transform: skew(1deg, 1deg);
    background: linear-gradient(315deg, #e64a19, #ff0057);
    transition: all 2s ease;
  }

  :disabled {
    color: #333;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
`;

const Menu = () => {
  const [query, setQuery] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  let { isOpen, toggleMenu } = useContext(MenuContext);

  const setSearchOpenHandler = () => {
    setSearchOpen(!searchOpen);
  };

  const setQueryHandler = event => {
    setQuery(event.target.value);
  };

  return (
    <StyledWrapper isOpen={isOpen}>
      <StyledDiv isOpen={isOpen}>
        <Link to={'/'}>
          <StyledParagraph onClick={() => toggleMenu()}>Home</StyledParagraph>
        </Link>
        <StyledParagraph onClick={() => setSearchOpenHandler()}>
          Search
        </StyledParagraph>
      </StyledDiv>
      <StyledForm isSearchOpen={searchOpen}>
        <StyledInput placeholder='Search' onChange={setQueryHandler}/>
        <StyledLink to={`/photospage/${query}`}>
          <StyledButton
            onClick={() => toggleMenu()}
            disabled={query === null || query === ''}
          >
            Click
          </StyledButton>
        </StyledLink>
      </StyledForm>
    </StyledWrapper>
  );
};

export default Menu;
