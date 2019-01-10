import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';

import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';

import './slider.scss';

class Slider extends Component {
  options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
  }

  render() {
    return (
      <section id="home-slider" className="reset section">
        <OwlCarousel ref="car" options={this.options} >
          {
            this.props.images.map((element, i) => {
              return (<div><img src={element.src} alt={element.alt}/></div>)
            })
          }
        </OwlCarousel>
      </section>
    );
  }
}

export default Slider;
