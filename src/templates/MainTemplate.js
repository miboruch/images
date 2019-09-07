import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import GlobalStyle from '../assets/styles/GlobalStyle';
import SEO from '../components/SEO/SEO';
import Hamburger from '../components/Hamburger/Hamburger';
import Menu from '../components/Menu/Menu';

const MainTemplate = ({ children, isOpen, toggleMenu }) => (
  <>
    <SEO />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Hamburger isOpen={isOpen} toggleMenu={toggleMenu}></Hamburger>
        <Menu isOpen={isOpen} toggleMenu={toggleMenu}></Menu>
        {children}
      </>
    </ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

export default MainTemplate;
