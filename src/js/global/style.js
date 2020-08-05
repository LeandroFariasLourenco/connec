import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  a {
    text-decoration: none;
    color: black;

    &:visited {
      color: black;
    }
  }

  ul,
  li {
    list-style: none;
  }

  button {
    border: none;
    cursor: pointer;
    outline: none;

    &:active,
    &:focus {
      outline: none;
    }
  }

  * {
    font-family: ${({ theme }) => theme.fontPrimary};
  }

  *::before,
  *::after {
    display: block;
  }

  input {
    &:active,
    &:focus {
      outline: none;
      border: none;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;
