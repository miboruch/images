import React, { useContext } from 'react';
import styled from 'styled-components';

import MenuContext from '../../context/MenuContext';

const StyledHamburger = styled.button`
  cursor: pointer;
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  z-index: 100;
  margin: 0.5rem;
  position: fixed;
  top: 0;
  right: 0;

  :focus {
    outline: none;
  }
`;

const InnerHamburger = styled.div`
  width: 26px;
  height: 2px;
  position: relative;
  background: ${({ isOpen }) => (isOpen ? 'transparent' : 'white')};

  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 26px;
    height: 2px;
    background: white;
    left: 0;
    transition: all 0.3s ease;
  }

  ::before {
    transform: rotate(${({ isOpen }) => (isOpen ? '40deg' : '0')});
    top: ${({ isOpen }) => (isOpen ? '0' : '6px')};
  }

  ::after {
    transform: rotate(${({ isOpen }) => (isOpen ? '-40deg' : '0')});
    top: ${({ isOpen }) => (isOpen ? '0' : '-6px')};
  }
`;

const Hamburger = () => {
  const { isOpen, toggleMenu } = useContext(MenuContext);

  return (
    <StyledHamburger onClick={toggleMenu}>
      <InnerHamburger isOpen={isOpen}></InnerHamburger>
    </StyledHamburger>
  );
};

export default Hamburger;
