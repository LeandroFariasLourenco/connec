import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Login from '@App/Login';
import Register from '@App/Register';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={Login} />
        <Route path='/cadastro' exact={true} component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
