import React from 'react';
import {
  Switch,
  BrowserRouter
} from 'react-router-dom';

import C from '@Constants';

import Private from './Private';
import Public from './Public';

import Login from '@Pages/Login';
import Dashboard from '@Pages/Dashboard';
import Historico from '@Pages/Historico';
import Receptores from '@Pages/Receptores';
import CadastroReceptores from '@Pages/CadastroReceptores';
import AtualizarReceptores from '@Pages/AtualizarReceptores';
import InformacoesReceptores from '@Pages/InformacoesReceptores';
import Doadores from '@Pages/Doadores';
import CadastroDoadores from '@Pages/CadastroDoadores';
import AtualizarDoadores from '@Pages/AtualizarDoadores';
import InformacoesDoadores from '@Pages/InformacoesDoadores';
import Sobre from '@Pages/Sobre';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Public path={C.PATHS.HOME} exact={true} component={Login} />
        <Public path={C.PATHS.SOBRE} exact={true} component={Sobre} />

        <Private path={C.PATHS.DASHBOARD} exact={true} component={Dashboard} />
        <Private path={C.PATHS.HISTORICO} exact={true} component={Historico} />

        <Private path={C.PATHS.RECEPTORES} exact={true} component={Receptores} />
        <Private path={C.PATHS.RECEPTORES_CADASTRO} exact={true} component={CadastroReceptores} />
        <Private path={C.PATHS.RECEPTORES_ATUALIZAR} exact={true} component={AtualizarReceptores} />

        <Private path={C.PATHS.DOADORES} exact={true} component={Doadores} />
        <Private path={C.PATHS.DOADORES_CADASTRO} exact={true} component={CadastroDoadores} />
        <Private path={C.PATHS.DOADORES_ATUALIZAR} exact={true} component={AtualizarDoadores} />

        <Private path={C.PATHS.DOADOR} exact={true} component={InformacoesDoadores} />
        <Private path={C.PATHS.RECEPTOR} exact={true} component={InformacoesReceptores} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
