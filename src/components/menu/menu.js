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

  changeLink = (target) => {
    this.closeMenuMobile()

    console.log(target)
  }

  render() {
    return (
      <nav id="main-menu" className="reset section">
        <div className="content">
          <div className="col-12">
            <button className="menu-mobile" onClick={this.openMenuMobile}>
              <i className="fas fa-bars"></i> MENU
            </button>
            <ul>
              <button className="close-mobile" onClick={this.changeLink}>Fechar</button>
              <li><NavLink to="/" onClick={this.changeLink}>Home</NavLink></li>
              <li><NavLink to="sobre" onClick={this.changeLink}>Sobre</NavLink></li>
              <li><NavLink to="contato" onClick={this.changeLink}>Contato</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;