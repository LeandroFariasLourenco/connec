import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Login from '@Pages/Login';
import Dashboard from '@Pages/Dashboard';
import Historico from '@Pages/Historico';
import Receptores from '@Pages/Receptores';
import Register from '@Pages/Register';
import Sobre from '@Pages/Sobre';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={Login} />
        <Route path='/sobre' exact={true} component={Sobre} />

        <Route path='/dashboard' exact={true} component={Dashboard} />
        <Route path='/historico' exact={true} component={Historico} />
        <Route path='/receptores' exact={true} component={Receptores} />

        <Route path='/doadores' exact={true} component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
