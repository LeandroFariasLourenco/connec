import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  a {
    text-decoration: none;
    color: black;
    &:visited {
      color: black;
    }
  }

  ul , li {
    list-style: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  *:before,
  *:after {
    display: block;
  }

  * {
    font-family: 'Montserrat';
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;
