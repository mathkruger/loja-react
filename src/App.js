import React, { Component } from 'react';
import './sass/grid.scss';

import Main from './main';
import Header from './components/header/header';
import Menu from './components/menu/menu';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />

        <Main />
      </div>
    );
  }
}

export default App;
