import React, { Component } from 'react';
import './home.scss';

import Slider from '../slider/slider';

class Home extends Component {
  imagesSlider = [
    {
      src: '/images/orra-slider-carnaval-00375-protetor-para-colchao-casal.png',
      alt: 'Colchão vai tomar no cu'
    },
    {
      src: '/images/orra-slider-carnaval-03296-trav--visco-malha-infantil-20cm-x-30cm---o-a-2-anos-.png',
      alt: 'Colchão vai se foder'
    },
    {
      src: '/images/orra-slider-carnaval-03334-cobertor-com-mangas-caramelo.png',
      alt: 'Colchão bolsominion'
    },    
  ]

  render() {
    return (
      <Slider images={this.imagesSlider} />
    );
  }
}

export default Home;
