import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 50vh;
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
  z-index: 99;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 50vh;
    background: #000;
    top: 50vh;
    left: 0;
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
    transition: all 1s 1s ease;
    z-index: -2;
  }
`;

const StyledDiv = styled.div`
  width: 200px;
  height: 20vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 10%;
  left: 0;
  background: #000;
  color: white;
  text-align: center;
  letter-spacing: 3px;

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
    transition: all 0.5s ease;
  }

  :hover::before {
    transform: skew(0, 0);
    background: linear-gradient(315deg, #e64a19, #ff0057);
    transition: all 0.5s ease;
  }
`;

const StyledForm = styled.form`
  position: absolute;
  top: 100%;
  width: 70%;
  margin: auto;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  visibility: hidden;

  @media all and(min-width: 1440px) {
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

  :focus {
    outline: none;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    transition: all 0.5s ease;
  }

  :placeholder {
    font-family: 'Raleway';
    letter-spacing: 5px;
    color: lightgrey;
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

  ::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    transform: skew(-1deg, -1deg);
    background: linear-gradient(315deg, #e64a19, #ff0057);
    z-index: -1;
    transition: all 1s ease;
  }

  :hover::before {
    transform: skew(0, 0);
    background: linear-gradient(315deg, #e64a19, #ff0057);
    transition: all 1s ease;
  }
`;

const Menu = ({ isOpen }) => {
  return (
    <StyledWrapper isOpen={isOpen}>
      <StyledDiv>
        <StyledParagraph>Home</StyledParagraph>
        <StyledParagraph>Search</StyledParagraph>
      </StyledDiv>
      <StyledForm>
        <StyledInput placeholder='Search'></StyledInput>
        <StyledButton>Click</StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
};

export default Menu;
