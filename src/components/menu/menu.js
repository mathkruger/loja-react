// Importando o React
import React, { Component } from "react";
import './menu.scss';

import { NavLink } from 'react-router-dom';

class Menu extends Component {
  toggleMenuMobile = () => {
    document.querySelector('#main-menu').classList.toggle('open')
  }

  render() {
    return (
      <nav id="main-menu" className="reset section">
        <div className="content">
          <div className="col-12">
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="contato">Contato</NavLink></li>
              <li><NavLink to="sobre">Sobre</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;