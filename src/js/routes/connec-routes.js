import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Login from './../pages/login/index';
import Cadastro from './../pages/cadastro/index';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={Login} />
        <Route path='/cadastro' exact={true} component={Cadastro} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
