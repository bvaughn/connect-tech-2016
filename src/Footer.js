import React, { Component, PropTypes } from 'react';
import './Footer.css';

export default class Footer extends Component {
  static contextTypes = {
    slideIndex: PropTypes.number
  };

  static propTypes = {
    slides: PropTypes.array.isRequired
  };

  render () {
    const { slideIndex } = this.context;
    const { slides } = this.props;

    return (
      <footer className='Footer'>
        {slideIndex + 1} / {slides.length}
      </footer>
    );
  }
}
