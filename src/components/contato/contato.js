import React, { Component } from 'react';

import './contato.scss';

class Contato extends Component {
  render() {
    return (
      <section id="contato" className="reset section">
        <div className="content">
          <div className="col-12">
            <h1 className="titulo">Contato</h1>
            <p>
              Entre em contato com a gente ai
            </p>
            <form>
              <input type="text" placeholder="Nome" name="Nome" id="Nome" />
              <input type="email" placeholder="Ee-mail" name="E-mail" id="E-mail" />
              <input type="text" placeholder="Cidade" name="Cidade" id="Cidade" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contato;
