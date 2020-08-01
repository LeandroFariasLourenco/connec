import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/connec-routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@Global/style';
import theme from '@Styles/theme';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <Main />,
  document.querySelector('.connec-main')
);
