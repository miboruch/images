import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html{
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    color: #fff;
  }

  a{
    color: white;
    text-decoration: none;
  }
`;

export default GlobalStyle;
