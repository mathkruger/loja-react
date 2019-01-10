import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';

import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';

import './slider.scss';

class Slider extends Component {
  options = {
    items: 1,
    nav: true,
    repeat: true,
    autoplay: true
  }

  render() {
    return (
      <section id="slider" className="reset section">
        <OwlCarousel ref="car" options={this.options} >
          {
            this.props.images.map((element, i) => {
              let style = {
                background: 'url(' + element.src + ') center / 155% no-repeat',
              }

              return (
                <div className="slider-item" style={style}>
                  <img src={element.src} alt={element.alt}/>
                </div>
              )
            })
          }
        </OwlCarousel>
      </section>
    );
  }
}

export default Slider;
