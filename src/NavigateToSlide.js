import React, { Component, PropTypes } from 'react';
import './NavigateToSlide.css';

export default class NavigateToSlide extends Component {
  static contextTypes = {
    registerKeyDownHandler: PropTypes.func,
    router: PropTypes.any.isRequired,
    unregisterKeyDownHandler: PropTypes.func
  };

  static propTypes = {
    slides: PropTypes.array.isRequired
  };

  constructor (props, context) {
    super(props, context);

    this.state = {
      active: false,
      inputValue: ''
    };

    this._onInputChange = this._onInputChange.bind(this);
    this._onInputKeyDown = this._onInputKeyDown.bind(this)
    this._onKeyDown = this._onKeyDown.bind(this);;
  }

  componentDidMount () {
    const { registerKeyDownHandler } = this.context;

    registerKeyDownHandler(this._onKeyDown);
  }

  componentWillUnmount () {
    const { unregisterKeyDownHandler } = this.context;

    unregisterKeyDownHandler(this._onKeyDown);
  }

  render () {
    const { active, inputValue } = this.state;

    if (!active) {
      return null;
    }

    return (
      <div className='NavigateToSlideOverlay'>
        <div className='NavigateToSlide'>
          <input
            autoFocus
            className='NavigateToSlideInput'
            onChange={this._onInputChange}
            onKeyDown={this._onInputKeyDown}
            ref={(ref) => this._input = ref}
            value={inputValue}
          />
          <i className='fa fa-arrow-circle-right' />
        </div>
      </div>
    );
  }

  _onInputChange (event) {
    let inputValue = this._input.value.replace(/[^\d]/g, '');
    let slideIndex = null;

    if (inputValue) {
      const { slides } = this.props;

      slideIndex = Math.max(
        0,
        Math.min(
          slides.length - 1,
          parseInt(inputValue, 10)
        )
      );

      inputValue = slideIndex;
    }

    this.setState({
      inputValue
    });
  }

  _onInputKeyDown (event) {
    switch (event.keyCode) {
      case 13: // Enter
        const { router } = this.context;
        const { inputValue } = this.state;

        const slideIndex = parseInt(inputValue, 10) || 0;

        this.setState({
          active: false,
          inputValue: ''
        });

        router.transitionTo(`/${slideIndex}`);
        break;
      default:
        // Linting requires this :)
        break;
    }
  }

  _onKeyDown (event) {
    switch (event.key) {
      case 't':
        this.setState({
          active: true
        });

        event.preventDefault();

        return true;
      case 'Escape':
        this.setState({
          active: false
        });

        return true;
      default:
        // Linting requires this :)
        break;
    }
  }
}
