import React, { Component } from 'react';

import Home from './components/home/home';
import Contato from './components/contato/contato';

import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/contato' component={Contato}/>
      </Switch>
  </main>  
);

export default Main;
