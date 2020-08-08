import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Login from '@App/Login';
import Dashboard from '@App/Dashboard';
import Doadores from '@App/Doadores';
import Historico from '@App/Historico';
import Receptores from '@App/Receptores';
import Register from '@App/Register';
import Sobre from '@App/Sobre';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={Login} />
        <Route path='/sobre' exact={true} component={Sobre} />

        <Route path='/dashboard' exact={true} component={Dashboard} />
        <Route path='/historico' exact={true} component={Historico} />
        <Route path='/receptores' exact={true} component={Receptores} />

        <Route path='/doadores' exact={true} component={Doadores} />
        <Route path='/doadores/cadastro' exact={true} component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
