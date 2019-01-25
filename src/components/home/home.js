import React, { Component } from 'react';
import './home.scss';

import Slider from '../slider/slider';
import ProdutoBox from '../produto-box/produto-box';

class Home extends Component {
  imagesSlider = [
    {
      key: 1,
      src: '/images/orra-slider-carnaval-00375-protetor-para-colchao-casal.png',
      alt: 'Colchão vai tomar no cu'
    },
    {
      key: 2,
      src: '/images/orra-slider-carnaval-03296-trav--visco-malha-infantil-20cm-x-30cm---o-a-2-anos-.png',
      alt: 'Colchão vai se foder'
    },
    {
      key: 3,
      src: '/images/orra-slider-carnaval-03334-cobertor-com-mangas-caramelo.png',
      alt: 'Colchão bolsominion'
    },    
  ]

  render() {
    return (
      <div>
        <Slider images={this.imagesSlider} />
        <ProdutoBox />
      </div>
    );
  }
}

export default Home;
