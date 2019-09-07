import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/raleway-regular.woff') format('woff'),
        url('../fonts/raleway-regular.woff2') format('woff2');
  }

  html{
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Raleway';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
  }

  a{
    color: white;
    text-decoration: none;
  }
`;

export default GlobalStyle;
