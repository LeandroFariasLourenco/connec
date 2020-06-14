import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/connec-routes';
import { GlobalStyles } from './global/style';

const Main = () => {
  return (
    <>
      <GlobalStyles />
      <Routes/>
    </>
  );
};

ReactDOM.render(
  <Main/>,
  document.querySelector('.connec-main')
);
