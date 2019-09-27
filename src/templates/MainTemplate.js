import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import GlobalStyle from '../assets/styles/GlobalStyle';
import SEO from '../components/SEO/SEO';
import Hamburger from '../components/Hamburger/Hamburger';
import Menu from '../components/Menu/Menu';

const StyledWrapper = styled.div`
  width: 100%;
  background: #000;
`;

const MainTemplate = ({ children }) => (
  <StyledWrapper>
    <SEO />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Hamburger></Hamburger>
        <Menu></Menu>
        {children}
      </>
    </ThemeProvider>
  </StyledWrapper>
);

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default MainTemplate;
