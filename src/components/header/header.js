// Importando o React
import React from "react";
import './header.scss';

import logo from '../../images/logo.png';

const Header = () => (
  <header id="main-header" className="reset section">
    <div className="content">
      <div className="col-12">
        <div className="top">
          <figure className="logo">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </figure>

          <div className="buscar">
            <form>
              <input type="text" placeholder="Digite sua busca ..." />
              <input type="submit" value="Buscar" />
            </form>
          </div>

          <div className="carrinho-login">
            <a href="">
              <i className="fas fa-user"></i>
              <span>Login</span>
            </a>
          </div>

          <div className="carrinho-login">
            <a href="">
              <i className="fas fa-shopping-cart"></i>
              <span>Carrinho</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;