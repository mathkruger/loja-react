import React from 'react';

import Home from './components/home/home';
import Contato from './components/contato/contato';
import Sobre from './components/sobre/sobre';

import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/contato' component={Contato}/>
        <Route path='/sobre' component={Sobre}/>
      </Switch>
  </main>  
);

export default Main;
