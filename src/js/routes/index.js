import React from 'react';
import {
  Switch,
  BrowserRouter
} from 'react-router-dom';

import Private from './Private';
import Public from './Public';

import Login from '@Pages/Login';
import Dashboard from '@Pages/Dashboard';
import Historico from '@Pages/Historico';
import Receptores from '@Pages/Receptores';
import CadastroReceptores from '@Pages/CadastroReceptores';
import InformacoesReceptores from '@Pages/InformacoesReceptores';
import Doadores from '@Pages/Doadores';
import CadastroDoadores from '@Pages/CadastroDoadores';
import InformacoesDoadores from '@Pages/InformacoesDoadores';
import Sobre from '@Pages/Sobre';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Public path='/' exact={true} component={Login} />
        <Public path='/sobre' exact={true} component={Sobre} />

        <Private path='/dashboard' exact={true} component={Dashboard} />
        <Private path='/historico' exact={true} component={Historico} />

        <Private path='/receptores' exact={true} component={Receptores} />
        <Private path='/receptores/cadastro' exact={true} component={CadastroReceptores} />

        <Private path='/doadores' exact={true} component={Doadores} />
        <Private path='/doadores/cadastro' exact={true} component={CadastroDoadores} />

        <Private path='/doadores/:id' exact={true} component={InformacoesDoadores} />
        <Private path='/receptores/:id' exate={true} component={InformacoesReceptores} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
