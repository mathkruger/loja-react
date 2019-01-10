// Importando o React
import React, { Component } from "react";
import './menu.scss';

import { NavLink } from 'react-router-dom';

class Menu extends Component {
  openMenuMobile = () => {
    document.querySelector('#main-menu ul').classList.add('open')
  }

  closeMenuMobile = () => {
    document.querySelector('#main-menu ul').classList.remove('open')
  }

  render() {
    return (
      <nav id="main-menu" className="reset section">
        <div className="content">
          <div className="col-12">
            <button className="menu-mobile" onClick={this.openMenuMobile}>
              <i class="fas fa-bars"></i> MENU
            </button>
            <ul>
              <button className="close-mobile" onClick={this.closeMenuMobile}>Fechar</button>
              <li><NavLink to="/" onClick={this.closeMenuMobile}>Home</NavLink></li>
              <li><NavLink to="contato" onClick={this.closeMenuMobile}>Contato</NavLink></li>
              <li><NavLink to="sobre" onClick={this.closeMenuMobile}>Sobre</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;