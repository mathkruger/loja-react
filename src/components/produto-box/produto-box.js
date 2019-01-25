// Importando o React
import React, { Component } from "react";
import './produto-box.scss';

import exemplo from '../../images/produto-exemplo.jpg';

class ProdutoBox extends Component {
  render() {
    return (
      <figure className="shelf">
        <img src={exemplo} alt="Produto legal" />
        <figcaption>
            <p className="nome">
              Jogo Skyrim PS4
            </p>
            <p className="preco">
              R$ 129,90
            </p>
            <button>
              Adicionar ao carrinho
            </button>
        </figcaption>
      </figure>
    );
  }
}

export default ProdutoBox;