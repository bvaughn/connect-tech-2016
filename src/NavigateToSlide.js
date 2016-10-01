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
    const { active, slideIndex } = this.state;

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
            value={slideIndex}
          />
          <i className='fa fa-arrow-circle-right' />
        </div>
      </div>
    );
  }

  _onInputChange (event) {
    this.setState({
      inputValue: this._input.value
    });
  }

  _onInputKeyDown (event) {
    switch (event.keyCode) {
      case 13: // Enter
        const { router } = this.context;
        const { slides } = this.props;

        const input = this._input.value || 0;
        const slideIndex = Math.max(
            0,
            Math.min(
              slides.length - 1,
              parseInt(input, 10)
            )
          );

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
    if (
      event.ctrlKey &&
      event.key === 't'
    ) {
      this.setState({
        active: true
      });
    } else if (
      event.key === 'Escape'
    ) {
      this.setState({
        active: false
      });
    }
  }
}
