import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Login from './../pages/login/index';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={Login}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
