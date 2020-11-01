import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import store from '@Store';
import { GlobalStyles } from '@Global/style';
import Routes from '@Routes';
import theme from '@Styles/theme';

const Main = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

ReactDOM.render(
  <Main />, document.querySelector('.connec-main')
);
