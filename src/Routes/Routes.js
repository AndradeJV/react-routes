import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import Usuarios from '../components/Usuarios/Usuarios'
import AdicionarUsuario from '../components/AdicionarUsuario/AdicionarUsuario';
import DetalhesUsuario from '../components/DetalhesUsuarios/DetalhesUsuario';
import PaginaNaoEncontrada from '../components/PaginaNaoEncontrada/PaginaNaoEncontrada';


const Routes = () => {

  return (
    <>
      <Router>
        <header>
          <nav>
            <ul>
              <li> <NavLink to="/" exact> Home </NavLink> </li>
              <li> <NavLink to="/adicionar" > Adicionar usuários </NavLink> </li>
              <li> <NavLink to="/usuarios" > Usuários cadastrados </NavLink> </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/usuarios/:id">
              <DetalhesUsuario />
            </Route>
            <Route path="/usuarios">
              <Usuarios />
            </Route>
            <Route path="/adicionar" >
              <AdicionarUsuario />
            </Route>
            <Route path="*">
              <PaginaNaoEncontrada />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}


export default Routes;