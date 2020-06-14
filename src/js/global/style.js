import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: black;
    &:visited {
      color: black;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit
    padding: 0;
    margin: 0;
  }
`;
