import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    overflow-x: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

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
    outline: none;
    border: none;

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

  .is--loading {
    opacity: 0.3;
    cursor: not-allowed;
    transition: opacity 400ms;
  }
`;
