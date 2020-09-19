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
        <Route path='/' exact={true} component={Login} />
        <Route path='/sobre' exact={true} component={Sobre} />

        <Route path='/dashboard' exact={true} component={Dashboard} />
        <Route path='/historico' exact={true} component={Historico} />

        <Route path='/receptores' exact={true} component={Receptores} />
        <Route path='/receptores/cadastro' exact={true} component={CadastroReceptores} />

        <Route path='/doadores' exact={true} component={Doadores} />
        <Route path='/doadores/cadastro' exact={true} component={CadastroDoadores} />

        <Route path='/doadores/:id' exact={true} component={InformacoesDoadores} />
        <Route path='/receptores/:id' exate={true} component={InformacoesReceptores} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
